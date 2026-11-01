// One entry per feature page. Everything here is what the app does today; nothing planned is stated as shipped.
export interface Shot {
  src: string;
  alt: string;
  kind: 'phone' | 'browser';
}
export interface Step {
  title: string;
  body: string;
  shot: Shot;
}
export interface Feature {
  slug: string;
  nav: string;
  title: string;
  description: string;
  audience: 'members' | 'owners' | 'everyone';
  problem: string;
  fix: string;
  lead: string;
  hero: Shot;
  facts: [string, string][];
  steps: Step[];
  details: { title: string; body: string }[];
  limits: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

const phone = (src: string, alt: string): Shot => ({ src, alt, kind: 'phone' });
const browser = (src: string, alt: string): Shot => ({ src, alt, kind: 'browser' });

export const FEATURES: Feature[] = [
  {
    slug: 'ai-coach',
    nav: 'AI coach',
    title: 'AI form check on your phone camera',
    description:
      'SpotAI’s AI coach counts squat reps and flags knee valgus, shallow depth and forward lean on the phone, then gives one trainer-approved tip per set. Video never leaves the device.',
    audience: 'members',
    problem: 'No one spotting your squat?',
    fix: 'Prop your phone on the rack. The coach counts reps and calls your form.',
    lead:
      'Pose tracking runs on the phone with MediaPipe. Each rep is checked for three things, and at the end of the set you get one tip written from templates your gym’s trainer approved. No video is uploaded, ever.',
    hero: phone('m-dark-coach.webp', 'AI coach screen: pose tracking preview of a squat, exercise Squat selected, camera angle Side, note that video stays on the phone'),
    facts: [
      ['3', 'form checks per rep'],
      ['2', 'camera angles: side or 45°'],
      ['3', 'languages for tips'],
      ['0', 'frames leave the phone'],
    ],
    steps: [
      {
        title: 'Set the phone down and pick the angle',
        body: 'Lean the phone on the rack or a bench, side-on or at 45°, with your whole body in frame. The preview shows the tracking box so you know you are in shot before you start. Light from a window or the gym’s ceiling lights is enough; the model needs to see your hips, knees and ankles.',
        shot: phone('m-light-coach.webp', 'AI coach screen in light mode: pose tracking preview, exercise Squat, camera angle Side or 45°'),
      },
      {
        title: 'Do the set. The counter runs on your body',
        body: 'Reps are counted from the hip and knee landmarks, so there is nothing to tap between reps. Rack the bar when you are done. Each rep is scored for knee valgus (knees caving in), shallow depth and excessive forward lean from the joint angles, on the phone, as you move.',
        shot: phone('m-dark-coach.webp', 'AI coach screen during a squat set with the pose tracking preview and Start camera button'),
      },
      {
        title: 'Read one tip, not a wall of feedback',
        body: 'When the set ends you get a single cue chosen for the flag that fired most, in English, Hindi or Bengali. “Try pushing your knees out over your toes as you stand up.” Each cue is a template your gym’s trainer reviewed in the staff console; the language model only words it, and if the gateway is down the exact template text is used.',
        shot: phone('m-dark-home.webp', 'Home screen with the coach tip card: Try pushing your knees out over your toes as you stand up, with Helpful and This was wrong buttons'),
      },
      {
        title: 'Tell it when it was wrong',
        body: 'Tap “This was wrong” or “Helpful” under the tip. The answer is kept with the set, the flag and the rule version, so trainers see each template’s wrong-rate and retire the bad ones. You can also hand a set of squats to the coach straight from the workout screen with “Record set”.',
        shot: phone('m-dark-workout.webp', 'Workout screen for Lat pulldown with Watch short and Record set buttons and sets to log'),
      },
    ],
    details: [
      { title: 'Three checks per rep', body: 'Knee valgus, shallow depth and excessive forward lean, each scored per rep from joint angles. The flags are what the server receives: a rep count and, per rep, a map of flag to severity.' },
      { title: 'Trainer-approved cues', body: 'Every tip is a template a trainer reviewed in the staff console. The model gateway only words it; if the gateway is down, the exact template text is used, so you are never read something a human did not approve.' },
      { title: 'Nothing leaves but counts', body: 'Pose runs on the phone with MediaPipe at camera frame rate. The server never gets a frame or a landmark stream, so there is nothing to leak and nothing to delete later.' },
      { title: 'Clips are a separate switch', body: 'Saving a clip of your set is its own consent in the privacy centre, off by default. Clips you do save are listed under My clips and can be deleted one by one.' },
      { title: 'Shorts for every exercise', body: 'Forgot the move? Each exercise opens a 30-second short from a well-known coach inside the app, so you learn it and get back to the set.' },
      { title: 'Adults only', body: 'Camera features switch off for members under 18. The age check happens at sign-up and the API refuses camera endpoints for minors.' },
    ],
    limits: [
      'Squats only today. Deadlift and bench press are next; every exercise already has a how-to and a short.',
      'Camera features are for members aged 18 and over.',
      'Works best with the whole body in frame and steady light.',
    ],
    faq: [
      { q: 'Does the AI coach send my video to the cloud?', a: 'No. Pose tracking runs on your phone. Only rep counts and form flags leave the device, never frames.' },
      { q: 'Which exercises does the form check cover?', a: 'Squats today, with knee valgus, shallow depth and forward lean detected per rep. More exercises are coming.' },
      { q: 'Who writes the tips?', a: 'Your gym’s trainer approves the templates. The app picks one that matches the flag on your set.' },
      { q: 'Do I need to hold the phone?', a: 'No. Lean it on the rack or a bench so your whole body is in frame, then lift.' },
    ],
    related: ['workouts', 'privacy'],
  },
  {
    slug: 'workouts',
    nav: 'Workouts',
    title: 'Today’s workout, picked for you, every set logged',
    description:
      'Check in and SpotAI suggests today’s session from your last week, lets you tick the exercises you want, and logs reps and kilograms per set. Shorts for every exercise.',
    audience: 'members',
    problem: 'Walk in with no plan?',
    fix: 'Check in and the app tells you what to train today, then logs every set.',
    lead:
      'The suggestion follows the twice-a-week-per-muscle guideline: the muscle group that is most rested comes first. You can always pick something else, and everything you do is written down.',
    hero: phone('m-dark-home-train.webp', 'Home screen during a workout: Back and biceps session, next up Lat pulldown 3 by 10, day streak and visits this week'),
    facts: [
      ['4', 'session types'],
      ['2×', 'a week per muscle, the rule it follows'],
      ['30 s', 'shorts for every exercise'],
      ['Offline', 'logging that syncs later'],
    ],
    steps: [
      {
        title: 'Pick what kind of session',
        body: 'Strength, cardio, cycling or mobility. The app marks the one it suggests and says why: “Your plan has a recovery day today”, or the muscle group you have not trained this week. Tap anything else if you feel different.',
        shot: phone('m-dark-picker.webp', 'Session picker: What are you training today? Strength, Cardio, Cycling and Mobility with the suggested one marked'),
      },
      {
        title: 'Then which muscles',
        body: 'Back and biceps, chest and triceps, shoulders, legs, or today’s day from your plan. Each one shows when you last trained it, so “Shoulders · last trained 24 days ago · not trained this week” is the obvious pick. The rule aims for each muscle about twice a week with roughly two days between.',
        shot: phone('m-dark-splits.webp', 'Which muscles today: Back and biceps, Chest and triceps, Shoulders suggested with last trained 24 days ago, Legs, Full body'),
      },
      {
        title: 'Tick the exercises you want',
        body: 'The coach pre-ticks a balanced set. Every exercise shows how many times you did it this week and the last time you did it, so the gaps are obvious and you are not doing the same three lifts forever. Add or remove with one tap, then start.',
        shot: phone('m-dark-exercises.webp', 'Pick your exercises: Lat pulldown, Dumbbell row, Dumbbell biceps curl and Hammer curl ticked, each showing how many times it was done this week'),
      },
      {
        title: 'Log every set as you go',
        body: 'Reps and kilograms for strength, timed sets for cardio and mobility. Add a set, skip an exercise, or watch the short if you forgot the move. On squats, “Record set” hands the counting to the AI coach. Logging works offline and syncs when you are back online.',
        shot: phone('m-dark-workout.webp', 'Workout screen for Lat pulldown: how-to, Watch short and Record set, three sets of 10 reps with kilograms to log'),
      },
      {
        title: 'Follow a plan, or train freestyle',
        body: 'Your programme shows the week day by day with rest days marked. The home screen shows today’s session ticked off, your streak and visits this week, so you can see the week stacking up.',
        shot: phone('m-dark-workouts.webp', 'Train screen: your programme with the week, Saturday selected, rest day with a hip mobility flow'),
      },
    ],
    details: [
      { title: 'Suggested, not forced', body: 'The rule looks at your last seven days and picks the muscle group trained least, then the one rested longest. Override it with one tap; the app never locks you into its suggestion.' },
      { title: 'Exercise library with shorts', body: 'Every exercise has a how-to and a short from a well-known coach that plays inside the app. Thirty seconds, then back to the set.' },
      { title: 'This-week counts on every exercise', body: 'Each exercise in the picker shows how many times you did it this week and when you last did it. Gaps are visible before you start, not in a spreadsheet later.' },
      { title: 'Record a set with the camera', body: 'On squats, hand the set to the AI coach and it counts reps and checks form for you. Everything else you log by hand.' },
      { title: 'Streaks and visits', body: 'Check-ins build a day streak and a visits-this-week count on the home screen. Miss a day and the streak resets, which is the point.' },
      { title: 'History', body: 'Every logged set is kept with its date, reps and kilograms, and feeds your gains, personal bests and badges.' },
    ],
    limits: ['Sample plans are reviewed by a trainer before launch; today’s plan is a demo.', 'Shorts play inside the app and need a connection.'],
    faq: [
      { q: 'Can I ignore the suggestion?', a: 'Yes. Pick any session or any exercises. The suggestion is a starting point.' },
      { q: 'Does it work offline?', a: 'Logging works offline and syncs when you are back online. Shorts need a connection.' },
      { q: 'Can my trainer give me a plan?', a: 'Plans are a programme the app follows day by day. Trainer-authored plans per member are planned, not shipped yet.' },
    ],
    related: ['ai-coach', 'leaderboard'],
  },
  {
    slug: 'leaderboard',
    nav: 'Leaderboard & buddies',
    title: 'Gym leaderboard, gains and training buddies',
    description:
      'Opt in to your gym’s leaderboard for visits, kilograms and streak, see lifetime gains and badges, and find a buddy who trains when you do. First names only, leave any time.',
    audience: 'members',
    problem: 'Lose steam after week two?',
    fix: 'See the kilos add up and let your gym see you turn up.',
    lead:
      'Three boards this week: visits, kilograms, streak. Lifetime totals and badges on your gains screen. Buddy suggestions with the reason they match. All opt-in, first names only, adults only.',
    hero: phone('m-dark-leaderboard.webp', 'Gym leaderboard with tabs for Visits, Kg lifted and Streak, a podium of Diya, Sana and Arjun and the member’s own place highlighted'),
    facts: [
      ['3', 'boards: visits, kilos, streak'],
      ['16', 'milestone badges'],
      ['First names', 'only, on the board'],
      ['18+', 'for the board and buddies'],
    ],
    steps: [
      {
        title: 'Your gains, lifetime and this week',
        body: 'Kilograms lifted, reps and workouts since you joined, plus this week’s numbers next to them. “8,850 kg · 1,110 reps across 14 workouts” is the kind of line that makes a Tuesday session feel like it counted. Personal bests per exercise sit one tab over.',
        shot: phone('m-dark-gains.webp', 'Gains screen: 8,850 kg lifted, 1,110 reps across 14 workouts, this week 1,290 kg and 174 reps, next badge 10k kg'),
      },
      {
        title: 'Badges you actually earn',
        body: 'Kilograms from 1,000 up to 100,000; reps from 500 to 25,000; workouts from 10 to 250. The next one is always shown with how far you are from it. They are app milestones, not training targets, so the app never tells you how much to lift.',
        shot: phone('m-light-gains.webp', 'Gains screen in light mode with milestone badges and next badge progress'),
      },
      {
        title: 'The gym leaderboard, if you join it',
        body: 'Three boards reset every week: visits, kilograms lifted, current streak. Join with your first name and your numbers appear; leave and they go private again the same minute. Below the board, “You vs Diya this week” compares you with the buddy you train with most.',
        shot: phone('m-dark-leaderboard.webp', 'Gym leaderboard: Visits tab, podium with Diya 3 visits first, list with You at 6, and You vs Diya this week'),
      },
      {
        title: 'A buddy who trains when you do',
        body: 'Suggestions come with the reason: both just starting, both train evenings, one shared goal. Send a request, chat once they accept, or make a small training group. Buddy matching and chat are separate consents in the privacy centre, and trainers moderate.',
        shot: phone('m-dark-connect.webp', 'Connect screen: Buddies tab, one request wants to train with you, Kabir suggested with Both just starting, Both train evenings, 1 shared goal'),
      },
    ],
    details: [
      { title: 'Opt in, opt out', body: 'Your numbers are private until you join the board. Leave and they go private again. Nobody is listed without saying yes.' },
      { title: 'First names only', body: 'The board shows first names and numbers. No photos, no surnames, no profile links.' },
      { title: 'Separate consent for Connect', body: 'Buddy matching and chat are their own opt-ins, adults only. Turn either off and you vanish from suggestions.' },
      { title: 'Helper badge', body: 'Members a trainer endorses for helping others show up first in buddy suggestions.' },
      { title: 'Moderated', body: 'Trainers see reports, can mute or remove, and can create groups for classes.' },
      { title: 'Per gym', body: 'Boards and buddies are within your gym. There is no cross-gym ranking.' },
    ],
    limits: ['Leaderboard and Connect are for members aged 18 and over.', 'Boards are per gym; there is no cross-gym ranking.'],
    faq: [
      { q: 'How does the gym leaderboard work?', a: 'Opt in, first names only. Three boards: visits this week, kilograms this week, current streak. Leave any time.' },
      { q: 'Who can message me?', a: 'Only buddies you accepted. Chat is a separate consent and trainers moderate it.' },
      { q: 'Can I hide my numbers but keep buddies?', a: 'Yes. The leaderboard and Connect are separate switches.' },
    ],
    related: ['workouts', 'privacy'],
  },
  {
    slug: 'check-in',
    nav: 'Check-in & membership',
    title: 'QR check-in, membership and UPI dues in the app',
    description:
      'Check in at your gym with a QR code from the SpotAI app, see days left on your membership, and pay dues with UPI without leaving the app.',
    audience: 'everyone',
    problem: 'Paying dues over WhatsApp screenshots?',
    fix: 'Show a QR at the desk, see your days left, pay with UPI in the app.',
    lead:
      'The home screen is your membership card: check in, see days left and anything due, and pay from the app. The gym sees the arrival and the payment reference the moment it happens.',
    hero: phone('m-dark-home.webp', 'Home screen: Not checked in, Ready to train, Check in button with a QR button beside it, day streak and visits this week'),
    facts: [
      ['100 s', 'before the QR refreshes itself'],
      ['4', 'UPI apps: Google Pay, PhonePe, Paytm, BHIM'],
      ['Days left', 'on the home screen'],
      ['Live', 'arrival on the owner’s screen'],
    ],
    steps: [
      {
        title: 'Check in from the home screen',
        body: 'Tap Check in, or the QR button beside it to show a code at the desk. The code refreshes itself every 100 seconds, so a screenshot from a friend does not get anyone in. The check-in starts your session, your streak and this week’s visit count.',
        shot: phone('m-dark-home.webp', 'Home screen: Ready to train with Check in and Show QR, day streak 0 and visits this week'),
      },
      {
        title: 'See your membership without asking',
        body: 'The profile shows the plan, when it ends and the amount to renew. No message to the desk, no “bhaiya kitna baaki hai”. Clips, buddies, alerts and the privacy centre live on the same screen.',
        shot: phone('m-dark-profile.webp', 'Profile: membership Test plan monthly, ends Nov 21 2026, Renew for ₹1,000, tiles for Connect and My clips'),
      },
      {
        title: 'Pay with UPI, in the app',
        body: 'Tap Renew, pick Google Pay, PhonePe, Paytm or BHIM, and pay. The reference lands in the gym’s dues ledger, so there is no screenshot to forward and no “did you get it?”. Reminders only reach you if you turned them on in the privacy centre.',
        shot: phone('m-light-profile.webp', 'Profile in light mode with the membership card and Renew button'),
      },
      {
        title: 'The gym sees it the same second',
        body: 'Your arrival shows on the owner’s overview with the time and how you checked in. If anything is overdue it is flagged on your name for the front desk, and nobody else; members never see each other’s dues.',
        shot: browser('o-overview.webp', 'Owner overview: arrivals today, overdue ₹2,000, collected ₹9,000, daily visits and a live arrivals list showing Aarav 9:37 PM via App'),
      },
    ],
    details: [
      { title: 'QR that cannot be shared', body: 'The code is signed and refreshes every 100 seconds. The front desk scans it or types your name.' },
      { title: 'Optional face check-in', body: 'If your gym runs the entrance device, you confirm each check-in on your phone. It is a separate consent and stays off until you turn it on.' },
      { title: 'Reminders that respect consent', body: 'The gym can only remind you about dues if reminders are on in your privacy centre. Turn them off and the button is greyed out on their side.' },
      { title: 'Staff see only what they need', body: 'The front desk sees who is in and who owes. Trainers see neither. Members never see each other’s dues.' },
      { title: 'Streak and visits', body: 'Each check-in adds to your day streak and this week’s visits, which feed the leaderboard if you joined it.' },
      { title: 'Demo mode', body: 'In the private demo, payments are marked paid without a provider and reminders go to a stub. Nothing is charged or sent.' },
    ],
    limits: ['UPI payments run in demo mode today; no provider is charged.', 'Face check-in stays in shadow mode until calibrated with consenting members.'],
    faq: [
      { q: 'Is there a face check-in? Is it safe?', a: 'Optional, on a small device at the entrance, never in the cloud. Encrypted templates, a liveness check, and you confirm each check-in on your phone.' },
      { q: 'Can I pay from the app?', a: 'Yes, with UPI. The payment reference is matched in the owner’s dues ledger.' },
      { q: 'What if I forget my phone?', a: 'The front desk can check you in by name.' },
    ],
    related: ['owners', 'privacy'],
  },
  {
    slug: 'owners',
    nav: 'Gym owners',
    title: 'Gym management software for Indian gyms',
    description:
      'SpotAI’s owner console: live arrivals with dues flagged, overdue list with reminders, UPI payments, busy hours, insights, member complaints with reference numbers, front-desk and trainer consoles.',
    audience: 'owners',
    problem: 'Chasing dues on WhatsApp?',
    fix: 'Who came, who owes, when it is busy. One screen, and members who pay in the app.',
    lead:
      'Most gym software in India is a register with a login. SpotAI gives you a live picture of the floor and gives members a reason to keep coming, which is what keeps dues paid.',
    hero: browser('o-overview.webp', 'Owner overview: arrivals today 1, active members 8, overdue ₹2,000, collected this month ₹9,000, daily visits for 14 days, busy hours heatmap, live arrivals'),
    facts: [
      ['Live', 'arrivals with dues on the name'],
      ['14 days', 'of daily visits, 4 weeks of busy hours'],
      ['< 5', 'members: insight hidden'],
      ['3', 'consoles: owner, front desk, trainer'],
    ],
    steps: [
      {
        title: 'Today at a glance',
        body: 'Arrivals as they happen with the time and how they checked in, dues flagged on the name. Active members, memberships ending this week, collected this month against last. Daily visits for the last 14 days and a busy-hours heatmap for the last four weeks, so you staff the floor with numbers.',
        shot: browser('o-overview.webp', 'Owner overview with arrivals, active members, overdue, collected, daily visits chart, busy hours and live arrivals'),
      },
      {
        title: 'Dues in one list',
        body: 'Every overdue member with the amount, how many days late and their last visit. One button sends a reminder, and it is only enabled for members who allowed reminders. UPI payments made in the member app land here with a reference you can match. Only owners and managers see this; members never see each other’s dues.',
        shot: browser('o-dues.webp', 'Dues: Sana ₹1,000 21 days overdue, Rohan ₹1,000 8 days overdue, last visit, Send reminder'),
      },
      {
        title: 'Insights you can act on',
        body: 'Last 30 days: who visited, who came back from the month before, visits per week per member, how many use the AI coach, how many are in Connect, payments received. Visits by weekday and the most common form issues. Anything from fewer than five members is hidden so no one can be picked out.',
        shot: browser('o-insights.webp', 'Insights: members who visited 82%, came back 100%, visits per week 3, using the AI coach 36%, in Connect 55%, payments 8, visits by weekday'),
      },
      {
        title: 'Members, plans and complaints',
        body: 'Every member with plan and status, check-in history, and the complaints they filed from the app with their reference number. Plans and prices are yours to set. Staff accounts get a role: front desk or trainer.',
        shot: browser('o-members.webp', 'Members list with plan and status'),
      },
    ],
    details: [
      { title: 'Front desk console', body: 'Check-in by QR or by name, pending check-ins, who is in and who owes. Nothing else, so a new hire can run the desk on day one.' },
      { title: 'Trainer console', body: 'Review the AI coach’s tip templates with each flag’s wrong-rate and retire the bad ones. Endorse members who help others. Moderate chat and groups, create groups for classes.' },
      { title: 'Complaints with a reference', body: 'Members file from the app and get a number. You see and answer it in the dashboard. Required under India’s DPDP rules, and good manners.' },
      { title: 'Face check-in, your call', body: 'An optional device at the entrance with a liveness check and encrypted templates, nothing in the cloud. Stays in shadow mode until you calibrate it with consenting members.' },
      { title: 'One database, no leaks', body: 'Every table is scoped to your gym with PostgreSQL row-level security. The API opens each request inside your gym, so another gym can never read your members, even by mistake.' },
      { title: 'Week-long offline demo', body: 'Trial the member app with no server: the whole API answers from the phone, data stays saved, and it behaves over real days.' },
    ],
    limits: ['Dues reminders go to a WhatsApp stub in the demo; nothing is sent.', 'Pilot gyms are onboarded by us today; self-serve sign-up comes later.'],
    faq: [
      { q: 'What do gym owners get?', a: 'Live arrivals with dues flagged, revenue and visit trends, busy hours, members, plans, dues reminders, complaints with reference numbers, and staff roles for trainers and the front desk.' },
      { q: 'How do we start?', a: 'Write to us. We set up your gym, plans and staff, and run a pilot with your members.' },
      { q: 'Do my members need the app?', a: 'For check-in by name and dues, no. For the AI coach, leaderboard, buddies and paying in the app, yes.' },
    ],
    related: ['check-in', 'privacy'],
  },
  {
    slug: 'privacy',
    nav: 'Privacy',
    title: 'Private by design: consent per purpose, on-device AI',
    description:
      'SpotAI treats camera, clips, face, matching, chat and reminders as separate consents, keeps pose tracking on the phone, and lets members export or delete everything from the app. Built for India’s DPDP Act.',
    audience: 'everyone',
    problem: 'Worried where your camera footage goes?',
    fix: 'Nowhere. It stays on your phone, and every other use of your data is a switch you flip.',
    lead:
      'A gym app sees your camera, your attendance and sometimes your face. SpotAI treats each as a separate decision with the notice version recorded, the way the DPDP Act expects, not a wall of text you tap through once.',
    hero: phone('m-dark-profile.webp', 'Profile screen with the Privacy tab, membership card, Connect and My clips tiles'),
    facts: [
      ['6', 'separate consents'],
      ['On device', 'pose tracking'],
      ['1 tap', 'to export or delete'],
      ['DPDP', 'shaped, not retrofitted'],
    ],
    steps: [
      {
        title: 'Camera coaching stays on the phone',
        body: 'Pose runs on the device with MediaPipe. The server only ever receives a rep count and per-rep flags. There is no video to store, leak or subpoena. “Runs on your phone” is printed on the coach screen because it is the whole point.',
        shot: phone('m-dark-coach.webp', 'AI coach screen with the Runs on your phone label over the preview'),
      },
      {
        title: 'Clips, face, buddies, chat, reminders: one switch each',
        body: 'Saving clips is off by default. Face check-in is off until you turn it on. Buddy matching, chat and dues reminders are separate opt-ins, each stored with the notice version, method and time, so there is a record of exactly what you agreed to and when.',
        shot: phone('m-light-connect.webp', 'Connect screen in light mode, which only appears after the matching consent is on'),
      },
      {
        title: 'Export or delete, from the app',
        body: 'The privacy centre on your profile has Export my data, which gives you a JSON of everything SpotAI holds, and Delete my account, which removes it including clips. No email to support, no waiting.',
        shot: phone('m-dark-profile.webp', 'Profile with the Privacy tab where export and delete live'),
      },
      {
        title: 'Complaints get a reference the gym must answer',
        body: 'File a complaint from the app and you get a number. The gym sees it in the owner console and has to respond. Camera features and the community are for adults only; the app checks age at sign-up.',
        shot: phone('m-dark-welcome.webp', 'Welcome screen: Train smarter, get stronger, Continue with email'),
      },
    ],
    details: [
      { title: 'Export my data', body: 'A JSON of everything SpotAI holds about you, from the privacy centre, no email needed.' },
      { title: 'Delete my account', body: 'From the app. Gone, including clips.' },
      { title: 'Language models behind a gate', body: 'Any model call goes through a gateway that strips identity and checks consent first, with template fallback. Real member data never reaches an external model.' },
      { title: 'Per-gym isolation', body: 'PostgreSQL row-level security keeps every gym’s data apart on the server; a query that forgets a filter still cannot cross gyms.' },
      { title: 'Face templates never leave the door', body: 'The optional entrance device keeps encrypted templates locally with a liveness check. Nothing in the cloud.' },
      { title: 'Adults only where it matters', body: 'Camera features and the community switch off for members under 18.' },
    ],
    limits: ['SpotAI is built around the DPDP Act’s shape; your gym remains the data fiduciary for its members.'],
    faq: [
      { q: 'Is SpotAI compliant with India’s data protection rules?', a: 'It is built around consent per purpose as the DPDP Act expects, with export, deletion and complaints with reference numbers in the app.' },
      { q: 'Can I turn the camera off entirely?', a: 'Yes. Leave camera coaching off and the app never opens the camera.' },
      { q: 'Does the gym see my clips?', a: 'Only clips you choose to share. Saved clips are private to you by default.' },
    ],
    related: ['ai-coach', 'owners'],
  },
];

export const feature = (slug: string) => FEATURES.find((f) => f.slug === slug)!;
