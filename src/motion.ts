import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Every animation is transform/opacity only, so it stays on the compositor. With reduced motion on,
// nothing moves: the page is already fully readable without JavaScript.
export function start() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll<SVGElement>('[data-flag]').forEach((el) => el.setAttribute('opacity', '1'));
    reel(true);
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
  const chalk = gsap.utils.toArray<SVGGeometryElement>('[data-chalk] *');

  chalk.forEach((p) => {
    const len = p.getTotalLength();
    gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
  });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from(lines, { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, 0)
    .to(chalk, { strokeDashoffset: 0, duration: 1.6, stagger: 0.04, ease: 'power2.inOut' }, 0.2)
    .from('[data-figure]', { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out' }, 0.5)
    .from('[data-rep-box], [data-ex]', { opacity: 0, y: 10, duration: 0.6, stagger: 0.05 }, 1)
    .add(() => reel(false), 1.4);

  // Pointer parallax on the chalk kit.
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (stage && window.matchMedia('(pointer: fine)').matches) {
    const qx = kit.map((k) => gsap.quickTo(k, 'x', { duration: 0.8, ease: 'power3' }));
    window.addEventListener(
      'pointermove',
      (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 2;
        kit.forEach((k, i) => qx[i]!(dx * 14 * Number(k.dataset.depth ?? 1)));
      },
      { passive: true },
    );
  }
  gsap.to(stage, { y: 90, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });
}

// The exercise reel. A side-view lifter whose joints tween between two key poses per exercise; after four reps
// it slides to the next one. The tabs under the floor pick an exercise directly.
type Pose = { hx: number; hy: number; sx: number; sy: number; ex: number; ey: number; wx: number; wy: number; px: number; py: number; kx: number; ky: number; ax: number; ay: number };
type Exercise = { a: Pose; b: Pose; prop: 'plate' | 'db' | 'handle' | 'none'; plateAt?: 'wrist' | 'back'; gear?: 'bench' | 'seat'; headRot?: number; period: number; cue?: string };
const STAND = { hx: 250, hy: 80, sx: 250, sy: 150, px: 250, py: 300, kx: 256, ky: 400, ax: 250, ay: 500 };
const EXERCISES: Record<string, Exercise> = {
  squat: {
    a: { ...STAND, ex: 280, ey: 202, wx: 232, wy: 150 },
    b: { hx: 288, hy: 196, sx: 276, sy: 262, ex: 304, ey: 314, wx: 258, wy: 262, px: 218, py: 360, kx: 308, ky: 405, ax: 250, ay: 500 },
    prop: 'plate',
    plateAt: 'back',
    period: 2.2,
    cue: 'Knees out over your toes',
  },
  deadlift: {
    a: { hx: 318, hy: 220, sx: 296, sy: 268, ex: 300, ey: 360, wx: 304, wy: 452, px: 206, py: 328, kx: 282, ky: 420, ax: 250, ay: 500 },
    b: { ...STAND, ex: 258, ey: 240, wx: 264, wy: 326 },
    prop: 'plate',
    plateAt: 'wrist',
    period: 2.4,
  },
  bench: {
    a: { hx: 130, hy: 338, sx: 196, sy: 346, ex: 200, ey: 280, wx: 200, wy: 222, px: 330, py: 352, kx: 384, ky: 420, ax: 392, ay: 500 },
    b: { hx: 130, hy: 338, sx: 196, sy: 346, ex: 238, ey: 352, wx: 206, wy: 300, px: 330, py: 352, kx: 384, ky: 420, ax: 392, ay: 500 },
    prop: 'plate',
    plateAt: 'wrist',
    gear: 'bench',
    headRot: -90,
    period: 2,
  },
  curl: {
    a: { ...STAND, ex: 256, ey: 245, wx: 264, wy: 332 },
    b: { ...STAND, ex: 256, ey: 245, wx: 300, wy: 190 },
    prop: 'db',
    period: 1.8,
  },
  pulldown: {
    a: { hx: 250, hy: 196, sx: 250, sy: 262, ex: 294, ey: 190, wx: 306, wy: 104, px: 250, py: 382, kx: 334, ky: 400, ax: 334, ay: 500 },
    b: { hx: 250, hy: 196, sx: 250, sy: 262, ex: 282, ey: 300, wx: 310, wy: 250, px: 250, py: 382, kx: 334, ky: 400, ax: 334, ay: 500 },
    prop: 'handle',
    gear: 'seat',
    period: 2,
  },
  press: {
    a: { ...STAND, ex: 300, ey: 200, wx: 284, wy: 146 },
    b: { ...STAND, ex: 280, ey: 95, wx: 272, wy: 34 },
    prop: 'db',
    period: 2,
  },
};

export function reel(staticOnly: boolean) {
  const svg = document.querySelector<SVGSVGElement>('[data-figure]');
  if (!svg) return;
  const el = (sel: string) => svg.querySelector<SVGElement>(sel)!;
  const f = (n: string) => el(`[data-f="${n}"]`);
  const prop = (n: string) => el(`[data-prop="${n}"]`);
  const joint = (n: string) => el(`[data-j="${n}"]`);
  const tabs = gsap.utils.toArray<HTMLButtonElement>('[data-ex]');
  const repEl = document.querySelector<HTMLElement>('[data-rep]');
  const ticks = gsap.utils.toArray<HTMLElement>('[data-ticks] i');
  const nameEl = document.querySelector<HTMLElement>('[data-set-name]');
  const flag = document.querySelector<HTMLElement>('[data-hflag]');
  const ids = Object.keys(EXERCISES);
  let id = ids[0]!;
  const s: Pose = { ...EXERCISES[id]!.a };

  const seg = (n: string, x1: number, y1: number, x2: number, y2: number) => {
    const node = f(n);
    node.setAttribute('x1', String(x1));
    node.setAttribute('y1', String(y1));
    node.setAttribute('x2', String(x2));
    node.setAttribute('y2', String(y2));
  };
  const poly = (n: string, points: number[][]) => f(n).setAttribute('points', points.map((p) => p.join(',')).join(' '));
  const at = (node: Element, x: number, y: number) => {
    node.setAttribute('cx', String(x));
    node.setAttribute('cy', String(y));
  };
  const hex = (x: number, y: number, r: number) =>
    'M' + [0, 1, 2, 3, 4, 5].map((i) => `${(x + r * Math.cos((Math.PI / 3) * i)).toFixed(1)} ${(y + r * Math.sin((Math.PI / 3) * i)).toFixed(1)}`).join(' L') + 'Z';
  // Unit normal of a segment: positive side is the lifter's back (they face right).
  const norm = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    return [-dy / len, dx / len, dx, dy] as const;
  };
  // A muscle: a segment that swells to wm at tm along its length, then tapers to w2.
  const muscle = (x1: number, y1: number, x2: number, y2: number, w1: number, wm: number, w2: number, tm: number) => {
    const [nx, ny, dx, dy] = norm(x1, y1, x2, y2);
    const mx = x1 + dx * tm;
    const my = y1 + dy * tm;
    return `M${x1 + nx * w1} ${y1 + ny * w1} Q${mx + nx * wm} ${my + ny * wm} ${x2 + nx * w2} ${y2 + ny * w2} L${x2 - nx * w2} ${y2 - ny * w2} Q${mx - nx * wm} ${my - ny * wm} ${x1 - nx * w1} ${y1 - ny * w1} Z`;
  };
  // Shorts: the top half of the thigh, cut wider.
  const shorts = (x1: number, y1: number, x2: number, y2: number) => {
    const [nx, ny, dx, dy] = norm(x1, y1, x2, y2);
    const ex = x1 + dx * 0.52;
    const ey = y1 + dy * 0.52;
    return `M${x1 + nx * 23} ${y1 + ny * 23} L${ex + nx * 18} ${ey + ny * 18} L${ex - nx * 18} ${ey - ny * 18} L${x1 - nx * 21} ${y1 - ny * 21} Z`;
  };
  // Torso around the spine: lats and glutes on the back edge, chest and abs on the front.
  const torsoPath = (shirt: boolean) => {
    const [nx, ny, dx, dy] = norm(s.sx, s.sy, s.px, s.py);
    const p = (t: number, w: number, side: number) => `${s.sx + dx * t + nx * w * side} ${s.sy + dy * t + ny * w * side}`;
    const t0 = shirt ? 0.12 : 0;
    return `M${p(t0, 21, 1)} Q${p(0.3, 27, 1)} ${p(0.62, 16, 1)} Q${p(0.86, 25, 1)} ${p(1.04, 17, 1)} L${p(1.04, 15, -1)} Q${p(0.62, 17, -1)} ${p(0.26, 25, -1)} Q${p(0.08, 23, -1)} ${p(t0, 18, -1)} Z`;
  };
  // A shoe: heel behind the ankle, toe 36 ahead; the sole is a strip under it.
  const shoe = (x: number, y: number) => `M${x - 11} ${y - 7} Q${x + 10} ${y - 10} ${x + 30} ${y - 5} Q${x + 44} ${y - 2} ${x + 40} ${y + 7} L${x - 13} ${y + 7} Q${x - 17} ${y} ${x - 11} ${y - 7} Z`;
  const sole = (x: number, y: number) => `M${x - 13} ${y + 3} L${x + 41} ${y + 3} L${x + 40} ${y + 8} L${x - 13} ${y + 8} Z`;
  const d = (n: string, path: string) => f(n).setAttribute('d', path);
  const limbs = (suffix: string, ox: number) => {
    d(`uarm${suffix}`, muscle(s.sx + ox, s.sy, s.ex + ox, s.ey, 12, 14, 9, 0.45));
    at(f(`elbow${suffix}`), s.ex + ox, s.ey);
    d(`farm${suffix}`, muscle(s.ex + ox, s.ey, s.wx + ox, s.wy, 9, 11, 6, 0.35));
    at(f(`hand${suffix}`), s.wx + ox, s.wy);
    d(`thigh${suffix}`, muscle(s.px + ox, s.py, s.kx + ox, s.ky, 19, 21, 13, 0.4));
    d(`shorts${suffix}`, shorts(s.px + ox, s.py, s.kx + ox, s.ky));
    at(f(`knee${suffix}`), s.kx + ox, s.ky);
    d(`calf${suffix}`, muscle(s.kx + ox, s.ky, s.ax + ox, s.ay, 12, 18, 8, 0.3));
    d(`foot${suffix}`, shoe(s.ax + ox, s.ay));
  };

  const render = () => {
    const ex = EXERCISES[id]!;
    const rot = ex.headRot ?? 0;
    const rad = (rot * Math.PI) / 180;
    const nxh = s.hx + -2 * Math.cos(rad) - 14 * Math.sin(rad);
    const nyh = s.hy + -2 * Math.sin(rad) + 14 * Math.cos(rad);
    f('headG').setAttribute('transform', `translate(${s.hx} ${s.hy}) rotate(${rot})`);
    d('neck', muscle(nxh, nyh, s.sx, s.sy, 7, 8, 10, 0.5));
    d('torso', torsoPath(false));
    d('shirt', torsoPath(true));
    at(f('shoulderJ'), s.sx, s.sy);
    at(f('hipJ'), s.px, s.py);
    at(f('ankle'), s.ax, s.ay);
    d('sole', sole(s.ax, s.ay));
    limbs('', 0);
    limbs('B', -13);
    poly('trackArm', [[s.sx, s.sy], [s.ex, s.ey], [s.wx, s.wy]]);
    poly('trackLeg', [[s.px, s.py], [s.kx, s.ky], [s.ax, s.ay]]);
    seg('trackTorso', s.sx, s.sy, s.px, s.py);
    at(joint('shoulder'), s.sx, s.sy);
    at(joint('elbow'), s.ex, s.ey);
    at(joint('wrist'), s.wx, s.wy);
    at(joint('hip'), s.px, s.py);
    at(joint('knee'), s.kx, s.ky);
    at(joint('ankle'), s.ax, s.ay);
    const plate = prop('plate');
    plate.setAttribute('opacity', ex.prop === 'plate' ? '1' : '0');
    if (ex.plateAt === 'back') at(plate, s.sx - 12, s.sy + 6);
    else at(plate, s.wx, s.wy);
    prop('db').setAttribute('opacity', ex.prop === 'db' ? '1' : '0');
    if (ex.prop === 'db') prop('dbShape').setAttribute('d', hex(s.wx, s.wy, 22));
    const handle = prop('handle');
    handle.setAttribute('opacity', ex.prop === 'handle' ? '1' : '0');
    if (ex.prop === 'handle') handle.setAttribute('d', `M${s.wx - 28} ${s.wy} h56`);
    const cable = el('[data-gear="cable"]');
    cable.setAttribute('opacity', ex.prop === 'handle' ? '1' : '0');
    cable.setAttribute('x1', String(s.wx));
    cable.setAttribute('x2', String(s.wx));
    cable.setAttribute('y2', String(s.wy));
    el('[data-gear="bench"]').setAttribute('opacity', ex.gear === 'bench' ? '1' : '0');
    el('[data-gear="seat"]').setAttribute('opacity', ex.gear === 'seat' ? '1' : '0');
  };
  render();
  if (staticOnly) return;

  let loop: gsap.core.Timeline | null = null;
  let reps = 0;
  const setRep = (n: number) => {
    reps = n;
    if (!repEl) return;
    repEl.textContent = String(n);
    ticks.forEach((t, i) => t.classList.toggle('is-on', i < n));
    if (n) gsap.fromTo(repEl, { y: 8, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
  };
  const showFlag = (on: boolean) => flag && gsap.to(flag, { opacity: on ? 1 : 0, y: on ? 0 : 6, duration: 0.3 });

  const play = () => {
    const ex = EXERCISES[id]!;
    const half = ex.period / 2;
    loop?.kill();
    loop = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
    loop
      .to(s, { ...ex.b, duration: half, ease: 'power2.inOut', onUpdate: render })
      .add(() => {
        setRep(reps + 1);
        if (ex.cue) showFlag(reps === 3);
        if (reps >= 4) next();
      })
      .to(s, { ...ex.a, duration: half, ease: 'power2.inOut', onUpdate: render }, '+=0.1');
    const bar = tabs.find((t) => t.dataset.ex === id)?.querySelector('i');
    if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: (ex.period + 0.35) * 4, ease: 'none' });
  };

  const show = (nextId: string) => {
    if (!EXERCISES[nextId]) return;
    loop?.kill();
    tabs.forEach((t) => {
      t.setAttribute('aria-selected', String(t.dataset.ex === nextId));
      const bar = t.querySelector('i');
      if (bar && t.dataset.ex !== nextId) gsap.set(bar, { scaleX: 0 });
    });
    showFlag(false);
    gsap
      .timeline()
      .to(svg, { x: -70, opacity: 0, duration: 0.3, ease: 'power2.in' })
      .add(() => {
        id = nextId;
        Object.assign(s, EXERCISES[id]!.a);
        render();
        setRep(0);
        if (flag) flag.textContent = EXERCISES[id]!.cue ?? '';
        if (nameEl) nameEl.textContent = tabs.find((t) => t.dataset.ex === id)?.textContent?.trim() ?? '';
      })
      .fromTo(svg, { x: 70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
      .add(play);
  };
  const next = () => show(ids[(ids.indexOf(id) + 1) % ids.length]!);

  tabs.forEach((t) => t.addEventListener('click', () => t.dataset.ex !== id && show(t.dataset.ex!)));
  play();
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
