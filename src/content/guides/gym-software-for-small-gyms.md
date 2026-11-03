---
title: 'Gym software for a small gym: start at the front desk · SpotAI'
description: 'A builder''s story: why SpotAI''s gym software starts at the front desk, with check-in by QR or name and no app install, and what a small gym should check first.'
h1: 'Gym software for a small gym: start at the front desk'
audience: owner
blurb: 'Why I built the desk screen before anything clever, and a checklist for choosing gym software.'
answer: 'Good gym software for a small gym works at the front desk first: check a member in by QR or by name, see who owes, and do it without asking anyone to install an app. Everything else, such as leaderboards or AI, comes after the desk works on a busy evening. Test it with your real desk staff before you trust the demo.'
publish: 2026-11-08
updated: 2026-11-08
faq:
  - q: 'What should gym software do first?'
    a: 'Record who came and show who owes. If the desk cannot do both in a few seconds on a busy evening, nothing else matters. Reminders, reports and member apps are useful only after that works.'
  - q: 'Do members need to install an app?'
    a: 'Not with SpotAI. The front desk checks members in by QR or by name and tracks dues without anyone installing anything. Members who want the AI coach, leaderboard, buddies or in-app payments install the app when they are ready.'
  - q: 'What does a small gym need to run SpotAI?'
    a: 'A laptop or phone with internet for the console, and an Android phone for any member who wants the app. The optional face check-in device comes later and is not needed.'
  - q: 'Is there a public price?'
    a: 'Not yet. The first 10 gyms anywhere in India get a free 90-day pilot, and pricing will be announced to pilot gyms first. There is no per-member fee planned. As of November 2026, one Indian vendor lists 399 rupees a month for unlimited members after a one-month trial.'
cta:
  label: 'See the front-desk console'
  href: '/for-gym-owners/'
  text: 'Owner, trainer and front desk each get their own screen in one sign-in. The free pilot is open to the first 10 gyms anywhere in India.'
---

Release 1.6 of SpotAI went out on 2 November 2026 with one headline in its commit message: "gym staff console in the app". The commit just before it added "gym staff console inside the app (owner, trainer, front desk on a sample gym)". That is the least glamorous thing I have shipped, and I think it is the most important. This is why.

If you are searching for gym software for a small gym, you will find long feature lists. Almost none of them tell you what the person at your desk will actually do at 7 pm, when six people arrive at once.

## What I almost built first

SpotAI started as the exciting half: an AI coach that watches a squat through the phone camera, a leaderboard, buddies. The git history shows it. The first day of the website, 1 November, has more than twenty commits, and a large share of them are about the member side: the hero, the coach viewfinder, the phone screens.

The owner side was in the product, but it was still a list of screens. The thing a gym owner actually does all day is simpler: someone walks in, and someone at the desk has to know who they are and whether they owe money.

## The desk comes first

So the front-desk console became the centre of the owner story. Here is what it is built around, straight from the product facts:

- **Check in by QR or by name.** A member who forgot their phone is not turned away; the desk types a few letters of the name.
- **No app needed to be counted.** The desk tracks check-ins and dues without any member installing anything. Members who want the coach, leaderboard or in-app payments install the app when they are ready.
- **Dues on the name.** Someone who walks in owing is flagged for the desk and nobody else. Members never see each other's dues.
- **Three roles, one sign-in.** Owner, trainer and front desk each see what they need. The desk sees who is in and who owes; trainers see neither.

I will be plain about what is still rough: dues reminders and UPI payments run in demo mode during the pilot, so nothing is sent and nothing is charged. The console shows you the flow on a sample gym. It is not yet messaging your real members.

## The turning point: do not make members the bottleneck

The decision I am happiest with is a negative one. I did not require members to install an app before the gym could use SpotAI.

Think about why. In a small gym, a new tool succeeds or fails on the owner's patience. If the owner has to convince 300 members to download something before the dashboard shows anything, the dashboard stays empty and the owner gives up in a week. If the desk can start on day one with names and a QR, the dashboard fills itself while members decide in their own time.

That is also why the FAQ says what it says: a laptop or phone with internet for the console, an Android phone only for the members who want the app, and the optional face check-in device later, not now.

## What the market does

For context, I looked at one public page. As of November 2026, an Indian gym software vendor lists 399 rupees a month for unlimited members after a one-month free trial, with check-in by QR code, member ID or name search, and it describes itself as web-based with no member app mentioned. That is a sensible desk-first design. It tells me I am not inventing the idea; I am choosing the same starting point and adding a member app on top of it.

## What I would do again

Copy this if you are choosing gym software for a small gym:

1. **Test at the desk, not in the demo.** Put your actual desk person in front of it during your busiest hour.
2. **Time a check-in.** If it takes more than a few seconds, the queue will beat the software.
3. **Insist on a name-search fallback.** Phones die and members forget them.
4. **Check who sees dues.** The desk and owner should; other members should not.
5. **Do not wait for members to install anything.** The desk should work alone.
6. **Ask what is live and what is demo.** Reminders and payments are the usual ones to check.
7. **Know your own numbers first.** Use the [gym fee calculator](/guides/gym-fee-calculator/) to see your break-even member count and how much sits in unpaid dues.

If you still keep a register, our [attendance register sheet](/guides/gym-attendance-register/) is a free stopgap, and the [fee reminder templates](/guides/gym-fee-reminder-message/) help with the chasing while you decide.

## What I took from it

I enjoy building the coach. But a gym owner's day is the front desk, so that is where the product has to be boringly reliable first. You can see every console screen on the [owner features page](/features/owners/), and the member side of check-in on the [check-in page](/features/check-in/). The pilot is described on the [gym owners page](/for-gym-owners/).
