---
title: 'Gym attendance app: why check-in needs two doors · SpotAI'
description: 'A builder''s story on gym attendance apps: why SpotAI check-in has a QR that refreshes every 100 seconds and a front-desk fallback by name, and what to test first.'
h1: 'A gym attendance app needs two doors: QR and the front desk'
audience: owner
blurb: 'Why one check-in method is never enough, and what to test before you replace the register.'
answer: 'A good gym attendance app gives every member two ways in: a self check-in, such as a QR code, and a front-desk check-in by name for anyone who forgot their phone or battery. Make the QR expire so screenshots do not work, and make sure the owner sees each arrival live. Run it beside the paper register for a week.'
publish: 2026-11-14
updated: 2026-11-14
faq:
  - q: 'What is the best gym attendance app for a small gym?'
    a: 'The one members use on every visit without thinking. For most small gyms that is a QR check-in plus a desk check-in by name. Test it at your busiest hour with your real staff before you commit.'
  - q: 'How can I stop members sharing a check-in QR?'
    a: 'Use a code that expires. In SpotAI the QR is signed and refreshes every 100 seconds, so a screenshot sent to a friend does not get anyone in.'
  - q: 'What if a member forgets their phone?'
    a: 'The front desk can check them in by name. The member does not need an app for the gym to record the visit.'
  - q: 'Do I still need a paper register?'
    a: 'Keep it for the first week while you compare, then drop it once almost everyone is using the new method. Our free attendance register sheet is a middle step if you are not ready.'
cta:
  label: 'See check-in and arrivals'
  href: '/features/check-in/'
  text: 'QR from the member app, front desk by name, and the owner sees the arrival live. The free pilot is open to the first 10 gyms anywhere in India.'
---

There is a line in the SpotAI check-in page written in a member's voice, not a product manager's: "no 'bhaiya kitna baaki hai'". It is what a member says at the desk when they cannot see how much they owe. The same page asks the owner's version of the question: "Paying dues over WhatsApp screenshots?"

Those two sentences are the problem SpotAI's check-in is built around, and it has two doors. This guide is the story of that choice, for anyone choosing a gym attendance app.

## The problem, in the words around the desk

I will not pretend to have lived a hundred busy evenings at your front desk. What I can do is describe the situations the product is built around: members who forget their phones, members who ask the desk what they owe, payment proof forwarded as screenshots, and a register that nobody reads until a member has already vanished.

Picture a gym owner in Hyderabad (this is a picture, not a real person) who keeps a register by the door. It is perfectly good for today. It is useless for the question that matters: who has not been in for two weeks?

## Door one: the member's QR

The member-side door is a button on the home screen: "Check in", with a QR button beside it. Three things about it came from deliberate decisions:

- **The code refreshes itself every 100 seconds.** It is signed, so a screenshot from a friend does not get anyone in.
- **Check-in starts the session.** It feeds the day streak and this week's visit count, so checking in is also the first step of the workout.
- **The owner sees it live.** The arrival shows on the owner's overview with the time and how the member checked in.

## Door two: the desk, by name

A QR needs a charged phone and a working camera at the desk. Neither is guaranteed. So the front desk can scan the code or type a few letters of a name. The member does not need the app for the visit to be counted, and the owner can also check someone in from the overview with one button.

The first door is for speed. The second is for the evening when the first one fails. If you only have one door, the queue forms at the failure.

## What the arrival screen is for

Attendance is only worth keeping if it changes what you do. The owner overview shows arrivals today, a 14-day bar chart of visits and a busy-hours strip for the last four weeks. A list shows members who walked in today still owing, with the amount and the days late. The same page says members never see each other's dues.

One privacy rule I kept on purpose: if a gym has fewer than five members, the insight is hidden so nobody is picked out. And face check-in, which some owners will ask about, is optional hardware that comes later and stays off until members consent. It is not part of what you need today.

## The turning point

The real turning point was dropping the idea that attendance is a feature. It is a habit loop for two people. For the member, a check-in starts a streak. For the owner, a missing check-in is an early warning. Both depend on the check-in being easy enough to do every visit.

That is why I stopped asking "which method is best" and started asking "what happens when this one fails".

## What I would do again

Copy this list if you are replacing a register with a gym attendance app:

1. **Run both for a week.** Keep the register while the app proves itself.
2. **Have the desk help each member check in once.** Most only need showing one time.
3. **Insist on a second door.** A name-search check-in on the desk device.
4. **Use an expiring QR**, not a printed one that anyone can photograph.
5. **Put the report to work.** Look weekly at who has not been in for 7 or 14 days.
6. **Collect only what you need.** Biometric data is personal data; tell members and ask consent.
7. **Ask what is demo.** In the SpotAI pilot, UPI payments and reminders run in demo mode; nothing is charged or sent.

If you are not ready to move off paper, our [free attendance register sheet](/guides/gym-attendance-register/) makes the register more useful. When you are ready, see the screens on the [check-in page](/features/check-in/) and the owner side on the [owner page](/features/owners/). To see what dues are costing you, use the [gym fee calculator](/guides/gym-fee-calculator/).
