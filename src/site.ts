// Every fact on the site in one place. Nothing here is invented: the numbers come from the SpotAI repo.
export const SITE = {
  name: 'SpotAI',
  tagline: 'The AI gym buddy for Indian gyms',
  description:
    'AI gym app for India: squat form check on your phone, today’s workout, your gym’s leaderboard. Owners see who came and who owes. Free pilot in Hyderabad.',
  url: 'https://spotai.streamerosai.com/',
  email: 'contact@streamerosai.com',
  // WhatsApp click-to-chat. Digits only with country code.
  whatsapp: '918208335028',
  // Form endpoint (Formspree, Web3Forms or similar). Empty string keeps the mailto fallback.
  // The waitlist form sends through the same EmailJS service as the portfolio site, to `email`. These are
  // publishable values: EmailJS limits sending by allowed origin, not by keeping the key secret.
  emailjs: { service: 'service_560nh3i', template: 'template_dyb1k4x', publicKey: 'mB56akvK2qStLNadU' },
  pilot: { gyms: 10, days: 90, city: 'Hyderabad' },
  // Offline demo build of the member app; everything it saves stays on the phone.
  demo: { web: 'demo/', apk: 'downloads/spotai-demo.apk', ipa: 'downloads/spotai-ios.ipa', version: '1.6.1', size: '37 MB', ipaSize: '30 MB', android: '7.0', ios: '15', logins: ['ram@demo.spotai.app', 'yaseen@demo.spotai.app'], password: 'spotai-demo' },
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
    a: 'The first 10 gyms in Hyderabad get a free 90-day pilot. Pricing after the pilot will be announced to pilot gyms first. There is no per-member fee planned.',
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
    q: 'Is SpotAI available in Hindi and other Indian languages?',
    a: 'Yes. The member app is in 7 languages: English, Hindi, Telugu, Tamil, Kannada, Marathi and Bengali. Pick yours on the first screen or tap the globe at the top of any screen; the whole app switches at once and remembers your choice. It also opens in your phone’s language if it is one of the seven. The AI coach’s form tips are in English today; Hindi and Bengali versions are waiting for native-speaker review.',
  },
  {
    q: 'When can I download SpotAI?',
    a: 'You can try the full member app today: download it for Android, install it on iPhone, or open it in Safari. Gyms in Hyderabad are joining as partners; join the waitlist or ask your gym to switch it on.',
  },
  {
    q: 'Which exercises does the AI coach check?',
    a: 'Squats today: knee valgus, shallow depth and forward lean, per rep. Deadlift and bench press are next. Every exercise already has a how-to and a short video.',
  },
  {
    q: 'Who owns the data?',
    a: 'Your gym owns its member list. Members own their own data and can export or delete it from the app. Camera video never leaves the phone.',
  },
] as const;
