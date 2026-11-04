// Loaded in one dynamic import after first paint (first interaction or 3.5 s after load); content never waits for
// this. No animation library: plain requestAnimationFrame tweens, the Web Animations API and CSS transitions.
// Everything moves with transform/opacity/stroke only. With reduced motion on, nothing moves.
const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));
const ease = {
  linear: (t: number) => t,
  out2: (t: number) => 1 - (1 - t) ** 2,
  out3: (t: number) => 1 - (1 - t) ** 3,
  inOut2: (t: number) => (t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) ** 2),
};
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Tween progress 0..1 over `ms` through `fn`; resolves when done, or stops quietly when `live()` turns false. */
function tween(ms: number, fn: (p: number) => void, easing = ease.linear, live: () => boolean = () => true) {
  return new Promise<void>((resolve) => {
    const t0 = performance.now();
    const step = (now: number) => {
      if (!live()) return resolve();
      const p = clamp((now - t0) / ms);
      fn(easing(p));
      if (p < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
}

export function start() {
  if (reduced()) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll<SVGElement>('[data-flag]').forEach((el) => el.setAttribute('opacity', '1'));
    reel(true);
    return;
  }
  hero();
  reveals();
  squat();
}

function hero() {
  const kit = [...document.querySelectorAll<SVGElement>('[data-kit]')];
  reel(false);

  // Pointer parallax on the chalk kit (CSS `translate`, so it never fights other transforms).
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (stage && window.matchMedia('(pointer: fine)').matches) {
    kit.forEach((k) => (k.style.transition = 'translate 0.8s cubic-bezier(0.22, 1, 0.36, 1)'));
    window.addEventListener(
      'pointermove',
      (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 2;
        kit.forEach((k) => (k.style.translate = `${dx * 14 * Number(k.dataset.depth ?? 1)}px 0`));
      },
      { passive: true },
    );
  }
  // The stage drifts down as the hero scrolls away.
  const top = document.querySelector<HTMLElement>('#top');
  if (stage && top) {
    let queued = false;
    const drift = () => {
      queued = false;
      const h = top.offsetHeight || 1;
      stage.style.translate = `0 ${clamp(window.scrollY / h) * 90}px`;
    };
    window.addEventListener('scroll', () => queued || ((queued = true), requestAnimationFrame(drift)), { passive: true });
  }
}

// The exercise reel. A side-view lifter whose joints tween between two key poses per exercise; after four reps
// it slides to the next one. The tabs under the floor pick an exercise directly.
type Pose = { hx: number; hy: number; sx: number; sy: number; ex: number; ey: number; wx: number; wy: number; px: number; py: number; kx: number; ky: number; ax: number; ay: number };
type Exercise = { a: Pose; b: Pose; prop: 'plate' | 'db' | 'handle' | 'none'; plateAt?: 'wrist' | 'back'; gear?: 'bench' | 'seat'; period: number; cue?: boolean };
const STAND = { hx: 250, hy: 80, sx: 250, sy: 150, px: 250, py: 300, kx: 256, ky: 400, ax: 250, ay: 500 };
const EXERCISES: Record<string, Exercise> = {
  squat: {
    a: { ...STAND, ex: 280, ey: 202, wx: 232, wy: 150 },
    b: { hx: 288, hy: 196, sx: 276, sy: 262, ex: 304, ey: 314, wx: 258, wy: 262, px: 218, py: 360, kx: 308, ky: 405, ax: 250, ay: 500 },
    prop: 'plate',
    plateAt: 'back',
    period: 2.2,
    cue: true,
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
  const tabs = [...document.querySelectorAll<HTMLButtonElement>('[data-ex]')];
  const repEl = document.querySelector<HTMLElement>('[data-rep]');
  const ticks = [...document.querySelectorAll<HTMLElement>('[data-ticks] i')];
  const nameEl = document.querySelector<HTMLElement>('[data-set-name]');
  const flag = document.querySelector<HTMLElement>('[data-hflag]');
  // The cue's words come from the page, in the page's language.
  const cueText = flag?.textContent ?? '';
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
  // Torso: a tapered slab from the shoulder line to the hip line, drawn around the spine.
  const torso = () => {
    const dx = s.px - s.sx;
    const dy = s.py - s.sy;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const sw = 20;
    const hw = 15;
    return `M${s.sx + nx * sw} ${s.sy + ny * sw} L${s.px + nx * hw} ${s.py + ny * hw} L${s.px - nx * hw} ${s.py - ny * hw} L${s.sx - nx * sw} ${s.sy - ny * sw} Z`;
  };
  const limbs = (suffix: string, ox: number) => {
    seg(`uarm${suffix}`, s.sx + ox, s.sy, s.ex + ox, s.ey);
    seg(`farm${suffix}`, s.ex + ox, s.ey, s.wx + ox, s.wy);
    at(f(`hand${suffix}`), s.wx + ox, s.wy);
    seg(`thigh${suffix}`, s.px + ox, s.py, s.kx + ox, s.ky);
    seg(`shin${suffix}`, s.kx + ox, s.ky, s.ax + ox, s.ay);
    seg(`foot${suffix}`, s.ax + ox, s.ay, s.ax + ox + 30, s.ay);
  };

  const render = () => {
    const ex = EXERCISES[id]!;
    at(f('head'), s.hx, s.hy);
    seg('neck', s.hx, s.hy, s.sx, s.sy);
    f('torso').setAttribute('d', torso());
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

  let token = 0;
  let reps = 0;
  const setRep = (n: number) => {
    reps = n;
    if (!repEl) return;
    repEl.textContent = String(n);
    ticks.forEach((t, i) => t.classList.toggle('is-on', i < n));
    if (n) repEl.animate([{ transform: 'translateY(8px)', opacity: 0.4 }, { transform: 'none', opacity: 1 }], { duration: 400, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
  };
  const showFlag = (on: boolean) => {
    if (!flag) return;
    flag.style.transition = 'opacity 0.3s, transform 0.3s';
    flag.style.opacity = on ? '1' : '0';
    flag.style.transform = on ? 'none' : 'translateY(6px)';
  };
  const moveTo = (to: Pose, ms: number, mine: number) => {
    const from = { ...s };
    return tween(
      ms,
      (p) => {
        for (const k of Object.keys(to) as (keyof Pose)[]) s[k] = from[k] + (to[k] - from[k]) * p;
        render();
      },
      ease.inOut2,
      () => mine === token,
    );
  };

  const play = async () => {
    const mine = ++token;
    const ex = EXERCISES[id]!;
    const half = ex.period / 2;
    const bar = tabs.find((t) => t.dataset.ex === id)?.querySelector('i');
    bar?.getAnimations().forEach((a) => a.cancel());
    bar?.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: (ex.period + 0.35) * 4000, fill: 'forwards' });
    for (;;) {
      await moveTo(ex.b, half * 1000, mine);
      if (mine !== token) return;
      setRep(reps + 1);
      if (ex.cue) showFlag(reps === 3);
      if (reps >= 4) return next();
      await sleep(100);
      await moveTo(ex.a, half * 1000, mine);
      if (mine !== token) return;
      await sleep(250);
    }
  };

  const show = async (nextId: string) => {
    if (!EXERCISES[nextId]) return;
    const mine = ++token;
    tabs.forEach((t) => {
      t.setAttribute('aria-selected', String(t.dataset.ex === nextId));
      if (t.dataset.ex !== nextId) t.querySelector('i')?.getAnimations().forEach((a) => a.cancel());
    });
    showFlag(false);
    const out = svg.animate([{ translate: '0 0', opacity: 1 }, { translate: '-70px 0', opacity: 0 }], { duration: 300, easing: 'ease-in', fill: 'forwards' });
    await out.finished;
    if (mine !== token) return;
    id = nextId;
    Object.assign(s, EXERCISES[id]!.a);
    render();
    setRep(0);
    if (flag) flag.textContent = EXERCISES[id]!.cue ? cueText : '';
    if (nameEl) nameEl.textContent = tabs.find((t) => t.dataset.ex === id)?.textContent?.trim() ?? '';
    const inn = svg.animate([{ translate: '70px 0', opacity: 0 }, { translate: '0 0', opacity: 1 }], { duration: 500, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
    out.cancel();
    await inn.finished;
    if (mine === token) play();
  };
  const next = () => show(ids[(ids.indexOf(id) + 1) % ids.length]!);

  tabs.forEach((t) => t.addEventListener('click', () => t.dataset.ex !== id && show(t.dataset.ex!)));
  // The reel only runs while it is on screen and the tab is visible, so it costs nothing elsewhere.
  let onScreen = true;
  let running = false;
  const gate = () => {
    if (onScreen && !document.hidden) {
      if (!running) {
        running = true;
        play();
      }
    } else if (running) {
      running = false;
      token++;
    }
  };
  new IntersectionObserver((e) => {
    onScreen = e[e.length - 1]!.isIntersecting;
    gate();
  }).observe(svg);
  document.addEventListener('visibilitychange', gate);
}

function reveals() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }),
    { rootMargin: '0px 0px -12% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}

// The coach scene: scrubbed by scroll, the figure sinks into a squat and the flags fire in order.
// Sequential tweens as a flat list: [start, duration, values] on one 4.7-unit timeline.
type Step = [t0: number, dur: number, to: Record<string, number>];
const SQUAT_STEPS: Step[] = [
  [0, 1, { hipY: 290, kneeY: 345, headY: 165, armY: 250 }],
  [1, 1, { hipY: 330, kneeY: 352, kneeLx: 205, kneeRx: 315, headY: 205, headX: 272, armY: 262 }],
  [2, 0.6, { kneeLx: 222, kneeRx: 298 }],
  [2.6, 0.6, { headX: 318, headY: 215 }],
  [3.2, 0.5, { headX: 272, headY: 205 }],
  [3.7, 1, { hipY: 250, kneeY: 330, kneeLx: 225, kneeRx: 295, headY: 120, headX: 260, armY: 230 }],
];
const FLAG_STEPS: Record<string, Step[]> = {
  depth: [[0.6, 0.3, { v: 1 }], [1.2, 0.3, { v: 0 }]],
  valgus: [[1.5, 0.3, { v: 1 }], [2.2, 0.3, { v: 0 }]],
  lean: [[2.9, 0.3, { v: 1 }], [3.3, 0.3, { v: 0 }]],
  good: [[4.2, 0.3, { v: 1 }]],
};
const SQUAT_END = 4.7;
/** Walk sequential tweens to time T; each starts from where the previous ended. */
function sample(steps: Step[], init: Record<string, number>, T: number) {
  const v = { ...init };
  for (const [t0, dur, to] of steps) {
    if (T <= t0) break;
    const p = ease.out2(clamp((T - t0) / dur));
    for (const k in to) v[k] = v[k]! + (to[k]! - v[k]!) * p;
  }
  return v;
}

function squat() {
  const svg = document.querySelector<SVGSVGElement>('[data-squat]');
  const section = document.querySelector<HTMLElement>('#coach');
  if (!svg || !section) return;
  const seg = (n: string) => svg.querySelector<SVGLineElement>(`[data-seg="${n}"]`)!;
  const j = (n: string) => svg.querySelector<SVGCircleElement>(`[data-j="${n}"]`)!;
  const stand = { hipY: 250, kneeY: 330, kneeLx: 225, kneeRx: 295, headY: 120, headX: 260, armY: 230 };
  const set = (el: Element, a: string, v: number) => el.setAttribute(a, String(v));
  const apply = (s: typeof stand) => {
    set(seg('spine'), 'x1', s.headX);
    set(seg('spine'), 'y1', s.headY + 30);
    set(seg('spine'), 'y2', s.hipY);
    set(seg('trackSpine'), 'x1', s.headX);
    set(seg('trackSpine'), 'y1', s.headY + 30);
    set(seg('trackSpine'), 'y2', s.hipY);
    for (const arm of ['armL', 'armR']) {
      set(seg(arm), 'x1', s.headX);
      set(seg(arm), 'y1', s.headY + 55);
      set(seg(arm), 'y2', s.armY);
    }
    for (const side of ['L', 'R'] as const) {
      const kx = side === 'L' ? s.kneeLx : s.kneeRx;
      set(seg(`thigh${side}`), 'y1', s.hipY);
      set(seg(`thigh${side}`), 'x2', kx);
      set(seg(`thigh${side}`), 'y2', s.kneeY);
      set(seg(`shin${side}`), 'x1', kx);
      set(seg(`shin${side}`), 'y1', s.kneeY);
      set(j(`knee${side}`), 'cx', kx);
      set(j(`knee${side}`), 'cy', s.kneeY);
    }
    set(j('hip'), 'cy', s.hipY);
    set(j('head'), 'cx', s.headX);
    set(j('head'), 'cy', s.headY);
  };
  const flags = Object.keys(FLAG_STEPS).map((n) => [svg.querySelector(`[data-flag="${n}"]`)!, FLAG_STEPS[n]!] as const);
  const draw = (progress: number) => {
    const T = progress * SQUAT_END;
    apply(sample(SQUAT_STEPS, stand, T) as typeof stand);
    flags.forEach(([el, steps]) => el.setAttribute('opacity', String(sample(steps, { v: 0 }, T).v)));
  };
  // Scroll progress from "section top at 70% of the viewport" to "section bottom at 60%", eased toward its target.
  const target = () => {
    const r = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const a = vh * 0.7;
    const b = vh * 0.6 - r.height;
    return clamp((a - r.top) / (a - b));
  };
  let cur = target();
  let goal = cur;
  let raf = 0;
  const frame = () => {
    cur += (goal - cur) * 0.2;
    if (Math.abs(goal - cur) < 0.0005) cur = goal;
    draw(cur);
    raf = cur === goal ? 0 : requestAnimationFrame(frame);
  };
  const onScroll = () => {
    goal = target();
    if (!raf) raf = requestAnimationFrame(frame);
  };
  draw(cur);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}
