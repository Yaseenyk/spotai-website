// One entry per feature page. Everything here is what the app does today; nothing planned is stated as shipped.
export interface Shot {
  src: string;
  alt: string;
  kind: 'phone' | 'browser';
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
  shots: Shot[];
  steps: { title: string; body: string }[];
  details: { title: string; body: string }[];
  limits: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

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
      'Pose tracking runs on the phone with MediaPipe. Each rep is checked for three things, and at the end of the set you get one tip written from templates your gym’s trainer approved.',
    shots: [
      { src: 'm-dark-coach.webp', alt: 'AI coach screen: pose tracking preview of a squat, exercise Squat selected, camera angle Side, note that video stays on the phone', kind: 'phone' },
      { src: 'm-dark-workout.webp', alt: 'Workout screen for Lat pulldown with Watch short and Record set buttons', kind: 'phone' },
    ],
    steps: [
      { title: 'Set the phone down', body: 'Side-on or at 45°, leaning on the rack or a bench, whole body in frame.' },
      { title: 'Do the set', body: 'The counter runs on body landmarks. Reps count as you lift; no tapping.' },
      { title: 'Read one tip', body: 'Knee valgus, shallow depth or forward lean, flagged per rep. One cue for the set, in English, Hindi or Bengali.' },
      { title: 'Tell it if it was wrong', body: 'Tap “This was wrong” or “Helpful”. Trainers see each template’s wrong-rate and retire the bad ones.' },
    ],
    details: [
      { title: 'Three checks per rep', body: 'Knee valgus (knees caving in), shallow depth, and excessive forward lean, each scored per rep from joint angles.' },
      { title: 'Trainer-approved cues', body: 'Every tip is a template a trainer reviewed in the staff console. The model gateway only words it; if the gateway is down, the exact template text is used.' },
      { title: 'Nothing leaves but counts', body: 'The server receives a rep count and per-rep flags. Never a frame, never a landmark stream.' },
      { title: 'Clips are a separate switch', body: 'Saving a clip of your set is its own consent, off by default. Delete any clip, any time, from the app.' },
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
      'The suggestion follows the twice-a-week-per-muscle guideline: the muscle group that is most rested comes first. You can always pick something else.',
    shots: [
      { src: 'm-dark-picker.webp', alt: 'Session picker: Strength, Cardio, Cycling and Mobility with the suggested one marked', kind: 'phone' },
      { src: 'm-dark-exercises.webp', alt: 'Exercise checklist for Back and biceps showing how many times each exercise was done this week', kind: 'phone' },
      { src: 'm-dark-workout.webp', alt: 'Set logger for Lat pulldown with reps and kilograms per set', kind: 'phone' },
    ],
    steps: [
      { title: 'Pick a session', body: 'Strength by muscle group, cardio, cycling or mobility. The app marks the one it suggests and says why.' },
      { title: 'Tick the exercises', body: 'Each one shows how many times you did it this week and when you last did it, so the gaps are obvious.' },
      { title: 'Log each set', body: 'Reps and kilograms for strength; timed sets for cardio and mobility. Watch a 30-second short if you forgot the move.' },
      { title: 'Done for today', body: 'The home screen shows the session ticked off, your streak and visits this week.' },
    ],
    details: [
      { title: 'Suggested, not forced', body: 'The rule looks at your last seven days and picks the muscle group trained least, then the one rested longest. Override it with one tap.' },
      { title: 'Exercise library with shorts', body: 'Every exercise has a how-to and a short from a well-known coach, opened inside the app.' },
      { title: 'Your plan, if you have one', body: 'Follow a programme day by day, or train freestyle. Rest days are marked.' },
      { title: 'Record a set with the camera', body: 'On squats, hand the set to the AI coach and it counts for you.' },
    ],
    limits: ['Sample plans are reviewed by a trainer before launch; today’s plan is a demo.', 'Shorts play inside the app and need a connection.'],
    faq: [
      { q: 'Can I ignore the suggestion?', a: 'Yes. Pick any session or any exercises. The suggestion is a starting point.' },
      { q: 'Does it work offline?', a: 'Logging works offline and syncs when you are back online. Shorts need a connection.' },
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
      'Three boards this week: visits, kilograms, streak. Lifetime totals and badges on your gains screen. Buddy suggestions with the reason they match.',
    shots: [
      { src: 'm-dark-gains.webp', alt: 'Gains screen: 8,850 kg lifted, reps and workouts, next badge', kind: 'phone' },
      { src: 'm-dark-leaderboard.webp', alt: 'Gym leaderboard with Visits, Kg lifted and Streak tabs and a podium', kind: 'phone' },
      { src: 'm-dark-connect.webp', alt: 'Buddies screen with a suggested partner and why they match', kind: 'phone' },
    ],
    steps: [
      { title: 'Gains', body: 'Lifetime kilograms, reps and workouts, this week’s numbers, personal bests.' },
      { title: 'Badges', body: 'Kilograms from 1,000 to 100,000; reps from 500 to 25,000; workouts from 10 to 250.' },
      { title: 'Leaderboard', body: 'Join with your first name. Visits, kilograms and streak, reset each week. You versus the buddy you train with most.' },
      { title: 'Buddies', body: 'Suggestions with the reason: same start, same hours, a shared goal. Requests, chat and groups.' },
    ],
    details: [
      { title: 'Opt in, opt out', body: 'Your numbers are private until you join the board. Leave and they go private again.' },
      { title: 'Separate consent for Connect', body: 'Buddy matching and chat are their own opt-ins, adults only. Trainers moderate and can endorse helpers.' },
      { title: 'Helper badge', body: 'Members trainers endorse show up first in buddy suggestions.' },
    ],
    limits: ['Leaderboard and Connect are for members aged 18 and over.', 'Boards are per gym; there is no cross-gym ranking.'],
    faq: [
      { q: 'How does the gym leaderboard work?', a: 'Opt in, first names only. Three boards: visits this week, kilograms this week, current streak. Leave any time.' },
      { q: 'Who can message me?', a: 'Only buddies you accepted. Chat is a separate consent and trainers moderate it.' },
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
    shots: [
      { src: 'm-dark-home.webp', alt: 'Home screen: Ready to train, Check in button, day streak and visits this week', kind: 'phone' },
      { src: 'm-dark-profile.webp', alt: 'Profile with membership, days left and pay dues', kind: 'phone' },
      { src: 'o-overview.webp', alt: 'Owner overview with live arrivals and dues flagged', kind: 'browser' },
    ],
    steps: [
      { title: 'Show the QR', body: 'Tap Check in, show the code at the desk. It refreshes itself, so screenshots do not work.' },
      { title: 'Or face check-in', body: 'If your gym has the optional entrance device, confirm on your phone. Your call; it is a separate consent.' },
      { title: 'See what is due', body: 'Days left and any overdue amount sit on the home screen, not in a message thread.' },
      { title: 'Pay with UPI', body: 'Google Pay, PhonePe, Paytm or BHIM. The reference reaches the gym’s ledger.' },
    ],
    details: [
      { title: 'Reminders that respect consent', body: 'The gym can only remind you if you turned reminders on in the privacy centre.' },
      { title: 'Staff see only what they need', body: 'The front desk sees who is in and who owes. Members never see each other’s dues.' },
    ],
    limits: ['UPI payments run in demo mode today; no provider is charged.', 'Face check-in stays in shadow mode until calibrated with consenting members.'],
    faq: [
      { q: 'Is there a face check-in? Is it safe?', a: 'Optional, on a small device at the entrance, never in the cloud. Encrypted templates, a liveness check, and you confirm each check-in on your phone.' },
      { q: 'Can I pay from the app?', a: 'Yes, with UPI. The payment reference is matched in the owner’s dues ledger.' },
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
    shots: [
      { src: 'o-overview.webp', alt: 'Overview: arrivals today, active members, overdue, collected this month, daily visits, busy hours, live arrivals', kind: 'browser' },
      { src: 'o-dues.webp', alt: 'Dues: overdue members with amount, days late, last visit and Send reminder', kind: 'browser' },
      { src: 'o-insights.webp', alt: 'Insights: members who visited, came back, visits per week, members using the AI coach, visits by weekday', kind: 'browser' },
    ],
    steps: [
      { title: 'Today at a glance', body: 'Arrivals as they happen with dues on the name, active members, memberships ending this week, collected this month against last.' },
      { title: 'Dues', body: 'One list, days overdue, a reminder button that respects each member’s consent. UPI payments from the member app land here with a reference.' },
      { title: 'Insights', body: 'Who visited in the last 30 days, who came back, visits per week, who uses the AI coach, busy hours by weekday. Figures from fewer than five members are hidden.' },
      { title: 'Members and plans', body: 'Plans, statuses, check-in history, complaints with their reference numbers.' },
    ],
    details: [
      { title: 'Front desk console', body: 'Check-in by QR or by name. Staff see who is in and who owes, nothing else.' },
      { title: 'Trainer console', body: 'Review the AI coach’s tip templates with each flag’s wrong-rate, endorse helpers, moderate chat and groups.' },
      { title: 'Complaints with a reference', body: 'Members file from the app and get a number. You answer from the dashboard. Required under India’s DPDP rules.' },
      { title: 'Face check-in, your call', body: 'An optional entrance device with a liveness check and encrypted templates, nothing in the cloud.' },
      { title: 'One database, no leaks', body: 'Every table is scoped to your gym with row-level security. Another gym can never read your members.' },
      { title: 'Week-long offline demo', body: 'Trial the member app with no server: the whole API answers from the phone.' },
    ],
    limits: ['Dues reminders go to a WhatsApp stub in the demo; nothing is sent.', 'Pilot gyms are onboarded by us today; self-serve sign-up comes later.'],
    faq: [
      { q: 'What do gym owners get?', a: 'Live arrivals with dues flagged, revenue and visit trends, busy hours, members, plans, dues reminders, complaints with reference numbers, and staff roles for trainers and the front desk.' },
      { q: 'How do we start?', a: 'Write to us. We set up your gym, plans and staff, and run a pilot with your members.' },
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
      'A gym app sees your camera, your attendance and sometimes your face. SpotAI treats each as a separate decision with the notice version recorded, the way the DPDP Act expects.',
    shots: [
      { src: 'm-dark-profile.webp', alt: 'Profile and privacy centre entry in the app', kind: 'phone' },
      { src: 'm-dark-coach.webp', alt: 'AI coach screen with Runs on your phone label', kind: 'phone' },
    ],
    steps: [
      { title: 'Camera coaching', body: 'Pose runs on the device. Only counts and flags leave.' },
      { title: 'Clips', body: 'Saving a set is off by default. Delete any clip from the app.' },
      { title: 'Face check-in', body: 'Encrypted templates on a device at the door, liveness check, confirm on your phone.' },
      { title: 'Matching, chat, reminders', body: 'Each its own switch. Adults only for camera and community.' },
    ],
    details: [
      { title: 'Export my data', body: 'A JSON of everything SpotAI holds about you, from the privacy centre, no email needed.' },
      { title: 'Delete my account', body: 'From the app. Gone, including clips.' },
      { title: 'Complaints get a reference', body: 'File from the app, get a number, and the gym must answer.' },
      { title: 'Language models behind a gate', body: 'Any model call goes through a gateway that strips identity and checks consent first, with template fallback.' },
      { title: 'Per-gym isolation', body: 'PostgreSQL row-level security keeps every gym’s data apart on the server.' },
    ],
    limits: ['SpotAI is built around the DPDP Act’s shape; your gym remains the data fiduciary for its members.'],
    faq: [
      { q: 'Is SpotAI compliant with India’s data protection rules?', a: 'It is built around consent per purpose as the DPDP Act expects, with export, deletion and complaints with reference numbers in the app.' },
      { q: 'Can I turn the camera off entirely?', a: 'Yes. Leave camera coaching off and the app never opens the camera.' },
    ],
    related: ['ai-coach', 'owners'],
  },
];

export const feature = (slug: string) => FEATURES.find((f) => f.slug === slug)!;
