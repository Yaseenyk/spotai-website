import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Loaded after the page is painted and idle; content never waits for this. Every animation is transform/opacity
// only, so it stays on the compositor. With reduced motion on, nothing moves.
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
  const screens = gsap.utils.toArray<HTMLImageElement>('[data-screen]');
  const moments = gsap.utils.toArray<HTMLElement>('[data-moment]');
  if (!screens.length) return;
  const repEl = document.querySelector<HTMLElement>('[data-rep]');
  const cue = document.querySelector('[data-cue]');
  const visits = document.querySelector<HTMLElement>('[data-visits]');
  const you = document.querySelector<HTMLElement>('[data-you]');
  const paid = document.querySelector('[data-paid]');

  const show = (i: number) => {
    screens.forEach((img, k) => img.classList.toggle('is-on', k === i));
    moments.forEach((m) => m.classList.toggle('is-active', Number(m.dataset.moment) === i));
  };

  // One pass through the story: a set with the coach, a check-in that moves you up the board, a due paid with UPI.
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
  // 1. Coach: reps count up, a cue appears on rep 5 and clears.
  const rep = { n: 0 };
  tl.add(() => show(1))
    .set(cue, { opacity: 0 })
    .set(rep, { n: 0 })
    .to(rep, { n: 8, duration: 3.2, ease: 'none', onUpdate: () => repEl && (repEl.textContent = String(Math.floor(rep.n))) })
    .to(cue, { opacity: 1, duration: 0.3 }, '-=1.6')
    .to(cue, { opacity: 0, duration: 0.3 }, '-=0.4')
    .to({}, { duration: 0.6 });
  // 2. Leaderboard: your check-in lands as one more visit.
  tl.add(() => show(2))
    .add(() => visits && (visits.textContent = '1'))
    .to({}, { duration: 1.2 })
    .add(() => visits && (visits.textContent = '2'))
    .fromTo(visits, { scale: 1.5, color: '#c4b5fd' }, { scale: 1, color: '#ece9e1', duration: 0.6, ease: 'power3.out' })
    .fromTo(you, { boxShadow: 'inset 0 0 0 1px rgba(196,181,253,0.4)' }, { boxShadow: 'inset 0 0 0 2px rgba(196,181,253,0.9)', duration: 0.3, yoyo: true, repeat: 1 }, '<')
    .to({}, { duration: 2 });
  // 3. Owner: the overdue amount gets paid.
  tl.add(() => show(0))
    .set(paid, { opacity: 0, scale: 0.9 })
    .to({}, { duration: 1.2 })
    .to(paid, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
    .to({}, { duration: 2 });

  // Pointer parallax: the cards drift a little more than the phone.
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (stage && window.matchMedia('(pointer: fine)').matches) {
    const phone = document.querySelector('[data-phone]');
    const px = gsap.quickTo(phone, 'x', { duration: 1, ease: 'power3' });
    const mx = moments.map((m) => gsap.quickTo(m, 'x', { duration: 0.9, ease: 'power3' }));
    window.addEventListener(
      'pointermove',
      (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 2;
        px(dx * -6);
        mx.forEach((q, i) => q(dx * (10 + i * 4)));
      },
      { passive: true },
    );
  }
  gsap.to(stage, { y: 60, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });
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
