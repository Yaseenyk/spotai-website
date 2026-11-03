---
title: 'Gym fee calculator: break-even members, dues and GST'
description: 'Free gym fee calculator for Indian gym owners: enter fee, members and monthly costs to see break-even members, money stuck in dues and the GST-inclusive fee.'
h1: 'Gym fee calculator for Indian gyms'
audience: owner
blurb: 'Enter your fee, members and costs. See break-even, money stuck in dues and the GST split.'
answer: 'Enter your monthly fee, number of members and fixed monthly costs. The calculator shows how many members you need to break even, how much money is sitting in unpaid dues, and what a GST-inclusive fee leaves you after 5% GST. It is plain arithmetic on your own numbers, and nothing you type leaves your browser.'
publish: 2026-11-03
updated: 2026-11-03
faq:
  - q: 'How do I work out how many members my gym needs to break even?'
    a: 'Divide your fixed monthly costs (rent, salaries, power, equipment instalments) by your average monthly fee per member. For example, ₹60,000 of costs and a ₹1,200 average fee means 50 paying members to break even. The calculator on this page does that sum for you.'
  - q: 'Is GST charged on gym membership in India?'
    a: 'Yes. Since 22 September 2025, gym and fitness centre services attract GST at 5% without input tax credit. If your board price already includes GST, the amount you keep is the price divided by 1.05. Check your own registration and invoicing with a chartered accountant.'
  - q: 'What counts as dues?'
    a: 'Money for membership periods that have already started but is not yet paid. Here it is estimated as the share of members who are overdue multiplied by one month of fee, so it is a rough size of the problem and not an accounting figure.'
  - q: 'Does this calculator save or send my numbers?'
    a: 'No. It runs in your browser and nothing is sent anywhere.'
cta:
  label: 'See SpotAI for gym owners'
  href: '/for-gym-owners/'
  text: 'SpotAI shows overdue members and amounts on one screen, so the dues figure here is a list of names you can act on. The pilot is free for the first gyms, anywhere in India.'
---

Fill in your own numbers. The results update as you type.

<style>
  .calc { margin-top: 16px; padding: 20px; border-radius: 14px; background: var(--iron); box-shadow: inset 0 0 0 1px var(--line); }
  .calc__grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
  .calc label { display: block; font-size: 13.5px; color: var(--steel); }
  .calc input, .calc select { display: block; width: 100%; margin-top: 6px; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--line-2); background: var(--rubber); color: var(--chalk); font: inherit; font-size: 16px; }
  .calc__out { display: grid; gap: 12px; margin-top: 18px; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
  .calc__out div { padding: 14px 16px; border-radius: 12px; background: var(--rubber); box-shadow: inset 0 0 0 1px var(--line); }
  .calc__out span { display: block; font-size: 13px; color: var(--dim); }
  .calc__out strong { display: block; margin-top: 4px; font-size: 22px; color: var(--chalk); font-variant-numeric: tabular-nums; }
</style>
<form class="calc" id="feecalc" onsubmit="return false">
<div class="calc__grid">
<label>Average monthly fee per member (₹)<input id="fee" type="number" min="0" step="50" value="1200" inputmode="numeric"></label>
<label>Paying members<input id="members" type="number" min="0" step="1" value="80" inputmode="numeric"></label>
<label>Fixed costs per month (₹): rent, salaries, power, instalments<input id="costs" type="number" min="0" step="1000" value="60000" inputmode="numeric"></label>
<label>Members overdue (%)<input id="late" type="number" min="0" max="100" step="1" value="15" inputmode="numeric"></label>
<label>Is the fee GST-inclusive?<select id="gst"><option value="1">Yes, price includes 5% GST</option><option value="0">No, GST is added on top</option></select></label>
</div>
<div class="calc__out" aria-live="polite">
<div><span>Billing per month</span><strong id="o-bill">–</strong></div>
<div><span>What you keep after GST</span><strong id="o-net">–</strong></div>
<div><span>Profit or loss per month</span><strong id="o-profit">–</strong></div>
<div><span>Members to break even</span><strong id="o-be">–</strong></div>
<div><span>Roughly stuck in dues</span><strong id="o-dues">–</strong></div>
</div>
</form>
<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var inr = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
  function run() {
    var fee = +$('fee').value || 0, m = +$('members').value || 0, costs = +$('costs').value || 0, late = +$('late').value || 0;
    var inclusive = $('gst').value === '1';
    var keep = inclusive ? fee / 1.05 : fee;
    var bill = fee * m;
    var net = keep * m;
    $('o-bill').textContent = inr(inclusive ? bill : bill * 1.05);
    $('o-net').textContent = inr(net);
    $('o-profit').textContent = (net - costs < 0 ? '−' : '') + inr(Math.abs(net - costs));
    $('o-be').textContent = keep > 0 ? Math.ceil(costs / keep) + ' members' : '–';
    $('o-dues').textContent = inr(m * (late / 100) * fee);
  }
  var f = document.getElementById('feecalc');
  if (f) { f.addEventListener('input', function () { run(); if (!window.__calcUsed && window.gaEvent) { window.__calcUsed = 1; window.gaEvent('calculator_use', { cta_text: 'gym-fee-calculator' }); } }); run(); }
})();
</script>

## How the numbers are worked out

- **Billing per month** is fee × members. If GST is added on top, 5% is added to it.
- **What you keep after GST** is the fee divided by 1.05 when your price already includes GST, times members. If GST is added on top, you keep the full fee.
- **Members to break even** is fixed costs ÷ the fee you keep per member, rounded up.
- **Roughly stuck in dues** is members × overdue share × one month of fee. It is a size estimate. Your real figure depends on how many months each member owes.

Worked example with the default numbers: 80 members at ₹1,200 with the price including GST. You keep ₹1,200 ÷ 1.05 = ₹1,142.86 per member, so ₹91,429 a month. Costs of ₹60,000 leave about ₹31,429. Break-even is 53 members. With 15% overdue, about ₹14,400 is waiting to be collected.

## What to do with the result

If break-even is close to your member count, a handful of lapsed members is the difference between profit and loss, so renewals matter more than new joins. Send reminders before the expiry date, not after: our [gym fee reminder templates](/guides/gym-fee-reminder-message/) have the wording.
GST treatment depends on your registration, so confirm the details with a chartered accountant. This calculator is for planning, not for filing.
