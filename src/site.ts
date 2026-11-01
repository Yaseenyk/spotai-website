// Every fact on the site in one place. Nothing here is invented: the numbers come from the SpotAI repo.
export const SITE = {
  name: 'SpotAI',
  tagline: 'The AI gym buddy for Indian gyms',
  description:
    'Nobody checking your form, no plan for today, dues chased on WhatsApp: SpotAI fixes all three. An AI gym coach that checks your squat on the phone camera, a workout log, an opt-in gym leaderboard and buddies for members; arrivals, dues reminders and UPI payments for gym owners in India. Video never leaves the phone.',
  url: 'https://spotai.streamerosai.com/',
  email: 'contact@streamerosai.com',
  author: { name: 'Yaseen Khatib', url: 'https://yaseenkhatib.streamerosai.com' },
  twitterCard: 'summary_large_image',
  locale: 'en_IN',
  keywords: [
    'gym app India',
    'AI gym coach',
    'AI form check',
    'gym management software India',
    'gym member app',
    'gym leaderboard',
    'gym buddy app',
    'gym check-in app',
    'UPI gym payments',
    'gym dues reminder',
    'workout tracker India',
    'DPDP compliant gym app',
  ],
} as const;

export const FAQ = [
  {
    q: 'What is SpotAI?',
    a: 'SpotAI is a gym app with two sides. Members get an AI coach that checks their form on the phone camera, a workout log, a gym leaderboard and buddies to train with. Gym owners get a dashboard with arrivals, dues, revenue and busy hours, plus a front-desk console for check-ins and a trainer console for reviewing the AI coach’s tips.',
  },
  {
    q: 'Does the AI coach send my video to the cloud?',
    a: 'No. Pose tracking runs on your phone with MediaPipe. Only rep counts and form flags leave the device, never frames. Clips are saved only if you turn that on in your privacy settings, and you can delete them any time.',
  },
  {
    q: 'Which exercises does the form check cover?',
    a: 'Squats today, with knee valgus, shallow depth and excessive forward lean detected per rep. More exercises are coming; every exercise in the library already has a how-to and a short video.',
  },
  {
    q: 'How does the gym leaderboard work?',
    a: 'It is opt-in and shows first names only. Three boards: visits this week, kilograms lifted this week, and current streak. You can leave at any time and your numbers go private again.',
  },
  {
    q: 'What do gym owners get?',
    a: 'Today’s arrivals with dues flagged, revenue and visit trends, busy hours, members, plans, dues reminders that respect consent, member complaints with reference numbers, and staff roles for trainers and the front desk. Members pay dues in the app with UPI.',
  },
  {
    q: 'Is SpotAI compliant with India’s data protection rules?',
    a: 'SpotAI is built around consent per purpose, as the DPDP Act expects. Camera coaching, clip saving, face check-in, community matching and chat are each separate opt-ins. Members can export or delete their data from the privacy centre, and a complaint gets a reference number the gym must answer.',
  },
  {
    q: 'Is there a face check-in? Is it safe?',
    a: 'Face check-in is optional and runs on a small device at the gym entrance, never in the cloud. Templates are encrypted, there is a liveness check, and the member confirms each check-in on their phone. Camera features are for adults only.',
  },
  {
    q: 'When can I download SpotAI?',
    a: 'The app is in private demo with partner gyms now. Join the waitlist and you will get the Play Store and App Store links on launch day.',
  },
] as const;
