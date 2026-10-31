import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Every animation is transform/opacity only, so it stays on the compositor. With reduced motion on,
// nothing moves: the page is already fully readable without JavaScript.
export function start() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll<SVGElement>('[data-flag]').forEach((el) => el.setAttribute('opacity', '1'));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  hero();
  reveals();
  counters();
  squat();
  tilt();
}

function hero() {
  const lines = gsap.utils.toArray<HTMLElement>('[data-hero-line]');
  const kit = gsap.utils.toArray<SVGElement>('[data-kit]');
  const phone = document.querySelector('[data-phone]');
  const tip = document.querySelector('[data-tip]');
  const poseLines = gsap.utils.toArray<SVGPathElement>('[data-pose-lines] path');
  const poseDots = document.querySelector('[data-pose-dots]');
  const chip = document.querySelector('[data-pose-chip]');

  poseLines.forEach((p) => {
    const len = p.getTotalLength();
    gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
  });
  gsap.set(poseDots, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
  gsap.set(chip, { opacity: 0, y: 10 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from(lines, { y: 40, opacity: 0, duration: 1, stagger: 0.09 }, 0)
    .from(phone, { y: 80, opacity: 0, rotate: -14, duration: 1.3, ease: 'expo.out' }, 0.2)
    .from(kit, { y: 120, opacity: 0, scale: 0.8, duration: 1.4, stagger: 0.12, ease: 'expo.out' }, 0.3)
    .to(poseLines, { strokeDashoffset: 0, duration: 0.9, stagger: 0.08, ease: 'power2.inOut' }, 0.7)
    .to(poseDots, { opacity: 1, scale: 1, duration: 0.6 }, 1.2)
    .to(chip, { opacity: 1, y: 0, duration: 0.5 }, 1.6)
    .from(tip, { x: 30, opacity: 0, duration: 0.8 }, 1.4)
    .from('[data-beam]', { scaleY: 0, transformOrigin: '50% 0%', duration: 1.6, stagger: 0.2, ease: 'power2.out' }, 0.2)
    .from('[data-spot]', { opacity: 0, duration: 2 }, 0);

  // The kit never quite settles.
  kit.forEach((k, i) => {
    gsap.to(k, { y: `+=${10 + i * 4}`, duration: 4.5 + i, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });
  });
  gsap.to('[data-pose-lines]', { y: 6, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });
  gsap.to('[data-scan]', { y: 330, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  // Pointer parallax: nearer kit moves more.
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (stage && window.matchMedia('(pointer: fine)').matches) {
    const qx = kit.map((k) => gsap.quickTo(k, 'x', { duration: 0.8, ease: 'power3' }));
    const qy = kit.map((k) => gsap.quickTo(k, 'y', { duration: 0.8, ease: 'power3' }));
    const px = gsap.quickTo(phone, 'x', { duration: 1, ease: 'power3' });
    const py = gsap.quickTo(phone, 'y', { duration: 1, ease: 'power3' });
    window.addEventListener(
      'pointermove',
      (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 2;
        const dy = (e.clientY / window.innerHeight - 0.5) * 2;
        kit.forEach((k, i) => {
          const depth = Number(k.dataset.depth ?? 1);
          qx[i]!(dx * 18 * depth);
          qy[i]!(dy * 14 * depth);
        });
        px(dx * -10);
        py(dy * -8);
      },
      { passive: true },
    );
  }

  // Scroll: the gym recedes, the kit drifts apart.
  gsap.to('[data-gym]', { y: 120, scale: 1.06, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });
  kit.forEach((k, i) =>
    gsap.to(k, { y: `+=${(i + 1) * 60}`, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } }),
  );
}

function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => els.forEach((el) => el.classList.add('is-in')),
  });
}

function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const state = { n: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          n: end,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => (el.textContent = Math.round(state.n).toLocaleString('en-IN')),
        }),
    });
  });
  const bar = document.querySelector('[data-bar]');
  if (bar) gsap.to(bar, { scaleX: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 85%', once: true } });
}

// The coach scene: scrubbed by scroll, the figure sinks into a squat and the flags fire in order.
function squat() {
  const svg = document.querySelector<SVGSVGElement>('[data-squat]');
  if (!svg) return;
  const seg = (n: string) => svg.querySelector<SVGLineElement>(`[data-seg="${n}"]`)!;
  const j = (n: string) => svg.querySelector<SVGCircleElement>(`[data-j="${n}"]`)!;
  const stand = { hipY: 250, kneeY: 330, kneeLx: 225, kneeRx: 295, headY: 120, armY: 230 };
  const deep = { hipY: 330, kneeY: 352, kneeLx: 205, kneeRx: 315, headY: 205, armY: 262 };
  const s = { ...stand };
  const apply = () => {
    seg('spine').setAttribute('y1', String(s.headY + 30));
    seg('spine').setAttribute('y2', String(s.hipY));
    seg('armL').setAttribute('y1', String(s.headY + 55));
    seg('armR').setAttribute('y1', String(s.headY + 55));
    seg('armL').setAttribute('y2', String(s.armY));
    seg('armR').setAttribute('y2', String(s.armY));
    for (const side of ['L', 'R'] as const) {
      const kx = side === 'L' ? s.kneeLx : s.kneeRx;
      seg(`thigh${side}`).setAttribute('y1', String(s.hipY));
      seg(`thigh${side}`).setAttribute('x2', String(kx));
      seg(`thigh${side}`).setAttribute('y2', String(s.kneeY));
      seg(`shin${side}`).setAttribute('x1', String(kx));
      seg(`shin${side}`).setAttribute('y1', String(s.kneeY));
      j(`knee${side}`).setAttribute('cx', String(kx));
      j(`knee${side}`).setAttribute('cy', String(s.kneeY));
    }
    j('hip').setAttribute('cy', String(s.hipY));
    j('head').setAttribute('cy', String(s.headY));
  };
  const flag = (n: string) => svg.querySelector(`[data-flag="${n}"]`)!;
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '#coach', start: 'top 70%', end: 'bottom 60%', scrub: 0.6 },
  });
  tl.to(s, { hipY: 290, kneeY: 345, headY: 165, armY: 250, duration: 1, onUpdate: apply })
    .to(flag('depth'), { opacity: 1, duration: 0.3 }, '<0.6')
    .to(s, { ...deep, duration: 1, onUpdate: apply })
    .to(flag('depth'), { opacity: 0, duration: 0.3 }, '<0.2')
    .to(flag('valgus'), { opacity: 1, duration: 0.3 }, '<0.3')
    .to(s, { kneeLx: 222, kneeRx: 298, duration: 0.6, onUpdate: apply })
    .to(flag('valgus'), { opacity: 0, duration: 0.3 }, '<0.2')
    .to(s, { ...stand, duration: 1, onUpdate: apply })
    .to(flag('good'), { opacity: 1, duration: 0.3 }, '<0.5');
}

// The owner dashboard tilts toward the pointer, like a screen on a desk.
function tilt() {
  const el = document.querySelector<HTMLElement>('[data-tilt]');
  const frame = el?.firstElementChild as HTMLElement | null;
  if (!el || !frame || !window.matchMedia('(pointer: fine)').matches) return;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    frame.style.setProperty('--ry', `${dx * 8}deg`);
    frame.style.setProperty('--rx', `${dy * -8}deg`);
  });
  el.addEventListener('pointerleave', () => {
    frame.style.setProperty('--ry', '0deg');
    frame.style.setProperty('--rx', '0deg');
  });
}
