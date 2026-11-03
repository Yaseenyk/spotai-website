---
title: 'One rep max calculator: 1RM from weight and reps (kg)'
description: 'Free 1RM calculator. Enter the weight and reps of a hard set to estimate your one rep max with the Epley and Brzycki formulas, plus a percentage table.'
h1: 'One rep max (1RM) calculator'
audience: member
blurb: 'Estimate your one rep max from a hard set, with a percentage table for training.'
answer: 'Enter the weight you lifted and how many clean reps you did, ideally 10 or fewer. The calculator estimates your one rep max with the Epley formula (weight × (1 + reps ÷ 30)) and the Brzycki formula (weight × 36 ÷ (37 − reps)), then shows what 50% to 95% of that number is. It is an estimate: you do not need to lift your true max to use it.'
publish: 2026-11-03
updated: 2026-11-03
faq:
  - q: 'What is a one rep max?'
    a: 'The heaviest weight you can lift for a single repetition with good form. Most people estimate it from a lighter set instead of testing it, which is safer and needs no spotter.'
  - q: 'Which formula is more accurate, Epley or Brzycki?'
    a: 'Neither is exact. Both are estimates that work best for sets of about 2 to 10 reps and drift further from reality as reps go up. Brzycki gives a slightly lower number than Epley at higher reps. Use the same formula each time so you can compare progress.'
  - q: 'How many reps should I use?'
    a: 'Use a hard set you finished with good form and about one rep left in reserve, from 2 to 10 reps. Sets of 15 or more are too far from a single and the estimate becomes unreliable.'
  - q: 'Is it safe to test a true one rep max?'
    a: 'It carries more injury risk than a rep set, especially for beginners and on exercises like the squat and bench press. Use a spotter or safety bars, warm up properly, or just rely on the estimate. If you are new, build a few weeks of technique first.'
cta:
  label: 'See what SpotAI does'
  href: '/features/'
  text: 'SpotAI logs your sets and checks your squat form with your phone camera, so each session builds on the last. Workout logging works offline.'
---

Pick the unit, then enter one hard set.

<style>
  .calc { margin-top: 16px; padding: 20px; border-radius: 14px; background: var(--iron); box-shadow: inset 0 0 0 1px var(--line); }
  .calc__grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
  .calc label { display: block; font-size: 13.5px; color: var(--steel); }
  .calc input, .calc select { display: block; width: 100%; margin-top: 6px; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--line-2); background: var(--rubber); color: var(--chalk); font: inherit; font-size: 16px; }
  .calc__out { display: grid; gap: 12px; margin-top: 18px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  .calc__out div { padding: 14px 16px; border-radius: 12px; background: var(--rubber); box-shadow: inset 0 0 0 1px var(--line); }
  .calc__out span { display: block; font-size: 13px; color: var(--dim); }
  .calc__out strong { display: block; margin-top: 4px; font-size: 22px; color: var(--chalk); font-variant-numeric: tabular-nums; }
  .calc__err { margin-top: 14px; color: var(--warn); font-size: 14px; }
</style>
<form class="calc" id="rmcalc" onsubmit="return false">
<div class="calc__grid">
<label>Weight lifted<input id="w" type="number" min="1" step="0.5" value="60" inputmode="decimal"></label>
<label>Reps (1 to 12)<input id="r" type="number" min="1" max="12" step="1" value="8" inputmode="numeric"></label>
<label>Unit<select id="u"><option value="kg">kg</option><option value="lb">lb</option></select></label>
</div>
<p class="calc__err" id="rm-err" role="status"></p>
<div class="calc__out" aria-live="polite">
<div><span>Epley estimate</span><strong id="o-ep">–</strong></div>
<div><span>Brzycki estimate</span><strong id="o-br">–</strong></div>
<div><span>Average of the two</span><strong id="o-av">–</strong></div>
</div>
<div class="table-wrap"><table>
<thead><tr><th>% of 1RM</th><th>Weight</th></tr></thead>
<tbody id="rm-table"></tbody>
</table></div>
</form>
<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var PCT = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];
  function run() {
    var w = parseFloat($('w').value), r = parseInt($('r').value, 10), u = $('u').value;
    var err = $('rm-err');
    if (!(w > 0) || !(r >= 1) || r > 12) {
      err.textContent = 'Enter a weight above 0 and between 1 and 12 reps.';
      ['o-ep', 'o-br', 'o-av'].forEach(function (id) { $(id).textContent = '–'; });
      $('rm-table').innerHTML = '';
      return;
    }
    err.textContent = r > 10 ? 'Above 10 reps the estimate gets less reliable.' : '';
    var ep = r === 1 ? w : w * (1 + r / 30);
    var br = r === 1 ? w : (w * 36) / (37 - r);
    var av = (ep + br) / 2;
    var f = function (n) { return (Math.round(n * 10) / 10).toLocaleString('en-IN') + ' ' + u; };
    $('o-ep').textContent = f(ep);
    $('o-br').textContent = f(br);
    $('o-av').textContent = f(av);
    $('rm-table').innerHTML = PCT.map(function (p) { return '<tr><td>' + p + '%</td><td>' + f((av * p) / 100) + '</td></tr>'; }).join('');
  }
  var form = document.getElementById('rmcalc');
  if (form) { form.addEventListener('input', run); run(); }
})();
</script>

## The two formulas

- **Epley:** 1RM = weight × (1 + reps ÷ 30)
- **Brzycki:** 1RM = weight × 36 ÷ (37 − reps)

Worked example: 100 kg for 5 reps gives 116.7 kg with Epley and 112.5 kg with Brzycki. The page averages the two and builds the percentage table from that average.

## How to use the percentage table

Percentages of your max are a way to choose a working weight. As a rough guide, heavy sets of 1 to 5 reps sit near 85 to 95%, sets of 6 to 10 near 70 to 80%, and lighter volume work near 60 to 70%. These ranges are rules of thumb: how you feel on the day and how clean your reps are matter more than the exact number.

## Getting a good number

- Use a set you finished with solid form and about one rep to spare.
- Keep to 2 to 10 reps. The longer the set, the weaker the estimate.
- Use the same lift, same exercise setup and the same formula each time you test, so changes mean progress and not noise.
- Do not chase a true max on the squat or bench without a spotter or safety bars.