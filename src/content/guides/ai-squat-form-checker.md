---
title: 'AI squat form checker: one built to admit it is wrong · SpotAI'
description: 'A builder''s story: how SpotAI''s AI squat form checker runs on the phone, checks three things per rep, and lets you tap "This was wrong" so trainers can retire bad tips.'
h1: 'An AI squat form checker that is allowed to be wrong'
audience: member
blurb: 'What an AI squat form check can and cannot see, and why mine has a This was wrong button.'
answer: 'An AI squat form checker uses your phone camera to track your joints and flag problems such as knees caving in, shallow depth or too much forward lean. It is a screening aid, not a judge: single-camera tracking misses things. SpotAI runs the tracking on the phone, sends no video anywhere, and lets you tap "This was wrong".'
publish: 2026-11-11
updated: 2026-11-11
faq:
  - q: 'How does an AI squat form checker work?'
    a: 'It tracks your hip, knee and ankle positions from the phone camera, works out joint angles on each rep, and compares them with simple limits. In SpotAI that gives three flags per rep: knee valgus, shallow depth and excessive forward lean.'
  - q: 'Does SpotAI upload my squat video?'
    a: 'No. Pose tracking runs on your phone with MediaPipe. Only rep counts and form flags leave the device, never frames. Saving a clip is a separate consent, off by default.'
  - q: 'How accurate is AI squat form checking?'
    a: 'Not lab-grade. A 2026 buyer''s guide by another AI fitness app, read in November 2026, notes that single-camera tracking can be several degrees off in joint angle, struggles when body parts are hidden, and is best treated as a screen for big obvious faults. SpotAI has no accuracy figure to quote, which is why it asks you to mark tips that were wrong.'
  - q: 'Which exercises does it check?'
    a: 'Squats today. Deadlift and bench press are next. Camera features are for members aged 18 and over.'
cta:
  label: 'Try the AI coach'
  href: '/features/ai-coach/'
  text: 'Prop your phone on the rack, do a set, and read one tip. The demo app is free to try and your video never leaves the phone. The first 10 gyms anywhere in India can join the free pilot.'
---

At 02:42 on 1 November 2026 I committed a new hero for the SpotAI website: "a side-view lifter that cycles squat, deadlift, bench, curl, pulldown and press, with a rep counter and a cue on squats". At 02:50 I replaced the lifter with an anatomical figure, with a profile head, muscles and gym kit. At 02:57 I committed "Hero lifter: back to the ball-joint mannequin".

Seven minutes between two commits, one lesson. The anatomical figure looked impressive, but the coach does not see muscles. The plain mannequin shows exactly what the coach tracks: joints. That small lesson became the rule for the whole AI squat form checker: show only what it can really see.

## The problem in plain words

When you squat with nobody spotting you, you cannot see your own knees or your own depth. If you have been told your knees cave in, or that you stop too high, you are guessing on every rep. An AI squat form checker tries to be the person standing beside you.

The catch is that it is software looking through one camera. It will be wrong sometimes. I decided to design around that instead of hiding it.

## What it checks, and where it runs

Here is the whole job, from the product facts:

- **Tracking on the phone.** Pose tracking runs with MediaPipe on your phone. Hip, knee and ankle landmarks give the rep count, so there is nothing to tap between reps.
- **Three checks per rep.** Knee valgus (knees caving in), shallow depth and excessive forward lean, scored from joint angles as you move.
- **One tip per set.** When the set ends you get one cue for the flag that fired most, not a wall of feedback.
- **Nothing leaves but counts.** The server receives a rep count and, per rep, which flags fired. Not a frame, not a landmark stream.

That last point matters in India as much as anywhere. A gym floor is full of people who did not agree to be filmed for a cloud service. If the video never leaves the phone, there is nothing to leak and nothing to delete later.

## Where I admitted it could be wrong

Look at what the tip screen carries: two buttons, "Helpful" and "This was wrong".

I added them because I would not trust software that cannot be corrected. Tapping "This was wrong" stores your answer with the set, the flag and the rule version. In the staff console, trainers can then see the wrong-rate for each tip template and retire the bad ones.

It also shapes who writes the tips. Every cue is a template that a trainer at your gym reviewed. A language model only words it, and if the model gateway is down the exact template text is used. So you are never read something a human did not approve.

## What other people say about the limits

I read one public buyer's guide for AI form-check apps, published by another AI fitness app, in November 2026. It says single-camera, markerless capture is not lab-grade, that a smartphone system showed an average joint-angle error of about 5.8 degrees against marker-based capture, that hidden body parts and depth are weak spots, and that these tools are best used as screening aids for big, obvious faults. It does not say whether the apps it lists process video on the phone or on a server, which is the first thing I would want to know.

I agree with all of that, and it is the reason I will not publish an accuracy percentage for SpotAI. I do not have one I could stand behind. What I can promise is narrower: the check runs on your phone, it covers three named things, and you can tell it when it is wrong.

## The turning point

The mannequin was not the only reversal. The turning point was accepting that "honest" beats "impressive" in this product. A figure with muscles made the coach look smarter. A bare mannequin with a cue beside the knees tells you what was measured. I kept the second.

## What I would do again

If you want to use any AI squat form checker well, copy this:

1. **Film from the side or at 45 degrees**, phone propped on a rack or bench, whole body in frame.
2. **Use steady light.** The model has to see hips, knees and ankles.
3. **Treat one flag as a prompt, not a verdict.** If it fires every rep, look at it yourself.
4. **Compare with your own video once.** Pause at the bottom of a rep and check depth by eye.
5. **Tell the app when it is wrong.** That feedback is how weak tips get retired.
6. **Check where the video goes** before you point a camera at yourself in a gym.
7. **Fix one thing per set.** The knees-out cue in our [knees caving in guide](/guides/how-to-fix-knees-caving-in-squat/) is a good first one.

You can read how the whole flow works on the [AI coach page](/features/ai-coach/), including the three checks, the camera angles and what stays on the phone. Squats are the only exercise checked today; deadlift and bench press are next.
