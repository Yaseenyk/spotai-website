// Every fact on the site in one place. Nothing here is invented: the numbers come from the SpotAI repo.
export const SITE = {
  name: 'SpotAI',
  tagline: 'The AI gym buddy for Indian gyms',
  description:
    'AI gym app for India: squat form check on your phone, today’s workout, your gym’s leaderboard. Owners see who came and who owes. Free pilot in Hyderabad.',
  url: 'https://spotai.streamerosai.com/',
  email: 'contact@streamerosai.com',
  // WhatsApp click-to-chat. Digits only with country code; replace the placeholder before launch.
  whatsapp: '919000000000',
  // Form endpoint (Formspree, Web3Forms or similar). Empty string keeps the mailto fallback.
  formEndpoint: '',
  pilot: { gyms: 10, days: 90, city: 'Hyderabad' },
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
    a: 'SpotAI is a gym app with two sides. Members get an AI coach that checks their squat on the phone camera, today’s workout, a gym leaderboard and buddies. Gym owners get a console with live arrivals, who stopped coming, dues and busy hours, plus a front-desk console and a trainer console.',
  },
  {
    q: 'How much does SpotAI cost?',
    a: 'The first 10 gyms in Hyderabad get a free 90-day pilot. Pricing after the pilot will be announced to pilot gyms first. There is no per-member fee planned and your member list exports as CSV any time.',
  },
  {
    q: 'Do my members have to install an app?',
    a: 'No. The front desk checks members in by QR or by name and tracks dues without anyone installing anything. Members who want the AI coach, leaderboard, buddies or in-app payments install the app when they are ready.',
  },
  {
    q: 'What do I need at the gym?',
    a: 'A laptop or phone with internet for the console, and an Android phone for any member who wants the app. The face check-in device is optional and comes later. Workout logging in the member app works offline and syncs later.',
  },
  {
    q: 'Is SpotAI available in Hindi?',
    a: 'The app is in English today. Coach tips have Hindi and Bengali versions drafted and waiting for native-speaker review before they ship.',
  },
  {
    q: 'When can I download SpotAI?',
    a: 'The app is in private demo with partner gyms in Hyderabad. Android and iOS come at launch; join the waitlist or ask your gym to switch it on and we will tell you first.',
  },
  {
    q: 'Which exercises does the AI coach check?',
    a: 'Squats today: knee valgus, shallow depth and forward lean, per rep. Deadlift and bench press are next. Every exercise already has a how-to and a short video.',
  },
  {
    q: 'Who owns the data?',
    a: 'Your gym owns its member list and can export it as CSV any time. Members own their own data and can export or delete it from the app. Camera video never leaves the phone.',
  },
] as const;
