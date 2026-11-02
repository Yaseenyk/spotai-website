// English site copy: the contract every translation fills. A translation in <code>.ts has the same shape
// (same keys, same array lengths); anything it leaves out falls back to English.
//
// Conventions:
// - Plain strings are rendered as text. Strings documented as "HTML" may contain <strong>, <code>, <a> and
//   are rendered with set:html; keep the tags, translate the words.
// - Functions build sentences around values from data (SITE, indian-foods.json) or URLs. Keep the
//   parameters; reorder the sentence freely.
// - Feature pages have their own copy in ../features/<code>.ts.
import { FAQ, SITE } from '../../site';

const { pilot, demo } = SITE;

/** Nutrition values of one dish from indian-foods.json, used by the calories guide. */
interface Food {
  grams: number;
  kcal: number;
  protein: number;
  carbs: number;
}

export default {
  site: {
    tagline: SITE.tagline as string,
    description: SITE.description as string,
  },

  /** Shared across pages. */
  common: {
    skip: 'Skip to content',
    waPilot: 'Hi SpotAI, I want to know about the free pilot for my gym.',
    language: 'Language',
    /** Floating WhatsApp button: aria-label and visible text. */
    waLabel: 'Chat on WhatsApp',
    waShort: 'WhatsApp',
    /** Floating download button, above WhatsApp: aria-label and visible text. */
    dlLabel: 'Download the SpotAI demo app',
    dlShort: 'Download app',
    /** Alt text of the default share image. */
    ogImageAlt: 'SpotAI: your AI gym buddy, with the member app and the owner dashboard',
    breadcrumb: 'Breadcrumb',
    inApp: 'In the SpotAI app',
    seeFeature: 'See the full feature',
    chatWhatsApp: 'Chat on WhatsApp',
    /** Prefilled WhatsApp message from a gym owner who wants the pilot. */
    waOwnerPilot: `Hi SpotAI, I run a gym in ${pilot.city} and want the free pilot.`,
    /** Prefilled WhatsApp message a member forwards to their gym owner; `url` is the gym owners page. */
    waAskOwner: (url: string) => `Bhaiya, can we get SpotAI at our gym? Free pilot for Hyderabad gyms: ${url}`,
    /** Screen-reader state of a privacy switch. */
    on: 'on',
    off: 'off',
  },

  /** The site FAQ: home page and the site-wide FAQPage JSON-LD. */
  faq: FAQ.map((f) => ({ q: f.q as string, a: f.a as string })),

  nav: {
    home: 'SpotAI home',
    primary: 'Primary',
    mobile: 'Mobile',
    features: 'Features',
    forMembers: 'For members',
    forOwners: 'For gym owners',
    owners: 'Gym owners',
    pricing: 'Pricing',
    guides: 'Guides',
    faq: 'FAQ',
    cta: 'Free pilot for gyms',
    openMenu: 'Open menu',
  },

  footer: {
    home: 'SpotAI home',
    /** aria-labels of the two link lists and the language list. */
    featuresLabel: 'Features',
    navLabel: 'Footer',
    languagesLabel: 'Languages',
    allFeatures: 'All features',
    forOwners: 'For gym owners',
    pricing: 'Pricing',
    guides: 'Guides',
    faq: 'FAQ',
    getApp: 'Get the app',
    madeBy: (name: string) => `Made by ${name}`,
    /** After "© <year> ". */
    legal: 'SpotAI · Hyderabad, India · Not medical advice. Train with a qualified coach.',
  },

  // ---------------------------------------------------------------- Home page sections

  home: {
    title: 'SpotAI: AI gym trainer app and gym management software for India',
  },

  hero: {
    title: 'No spotter. No plan. Dues on WhatsApp.',
    sub: 'SpotAI fixes all three.',
    lead: 'The AI gym app for Indian gyms: form check on your phone camera, today’s plan, your gym’s leaderboard, dues paid with UPI.',
    ctaApk: 'Download the Android demo',
    ctaOwner: 'Gym owner? Free pilot',
    /** HTML. */
    note: `Android ${demo.android}+, ${demo.size}, works offline. On iPhone, <a href="/${demo.web}">open the web demo</a>.`,
    repsLabel: 'reps this set',
    /** Form cue that pops up on the squat. */
    cue: 'Knees out over your toes',
    tabsLabel: 'Exercises in the demo',
    /** Tabs of the animated demo, by exercise id. */
    exercises: {
      squat: 'Squat',
      deadlift: 'Deadlift',
      bench: 'Bench press',
      curl: 'Biceps curl',
      pulldown: 'Lat pulldown',
      press: 'Overhead press',
    },
  },

  members: {
    title: 'Walk in with no plan? Not anymore.',
    lead: 'Check in on your phone. SpotAI gives you today’s workout, then logs every set, in English, Hindi, Telugu, Tamil, Kannada, Marathi or Bengali.',
    /** One per screenshot, in order. */
    steps: [
      {
        problem: 'No idea what to train today',
        fix: 'Check in and the app picks today’s session from your last week: the muscle group that’s most rested, or cardio, cycling, mobility.',
        alt: 'Session picker: What are you training today? Strength is suggested with the reason, then Cardio, Cycling and Mobility',
      },
      {
        problem: 'Same three exercises every time',
        fix: 'Tick the ones you want. Each exercise shows how many times you did it this week, so the gaps are obvious.',
        alt: 'Exercise checklist for Back and biceps with Lat pulldown, Dumbbell row, Biceps curl and Hammer curl, each showing how many times it was done this week',
      },
      {
        problem: 'Sets never get written down',
        fix: 'Reps and kilograms per set, a 30-second short if you forgot the move, or let the camera count the set for you.',
        alt: 'Workout screen for Lat pulldown with a how-to, Watch short and Record set buttons and sets of reps and kilograms to log',
      },
    ],
  },

  coach: {
    /** The illustrated camera view (hidden from screen readers). */
    cam: {
      exercise: 'Squat',
      view: 'Side view',
      live: 'On device',
      depth: 'Shallow depth',
      valgus: 'Knee valgus',
      lean: 'Forward lean',
      good: 'Good rep',
      /** After the big "6". */
      repOf: 'of 8 reps',
      tip: '“Try pushing your knees out over your toes as you stand up.”',
      helpful: 'Helpful',
      wrong: 'This was wrong',
    },
    title: 'No one spotting your squat? The AI coach checks your form on the phone camera.',
    lead: 'Prop your phone against the rack and do a set. The coach counts reps, flags form per rep, and gives you one tip your gym’s trainer has approved.',
    features: [
      { title: 'Counts every rep', body: 'Prop the phone side-on or at 45°. The counter runs on the body landmarks, so you lift and the app keeps score.' },
      { title: 'Three form checks per rep', body: 'Knee valgus, shallow depth and forward lean, flagged per rep. Squats today; deadlift and bench are next.' },
      { title: 'One tip per set', body: 'Picked from templates your gym’s trainer approved, in English today. Nothing made up on the spot.' },
      { title: 'Video never leaves your phone', body: 'Pose runs on the phone with MediaPipe. Only rep counts and flags reach the server, never a frame.' },
      { title: 'Mark a tip wrong', body: 'Tap “This was wrong” and trainers see each template’s wrong-rate in the staff console, then retire the bad ones.' },
      { title: 'Clips are your call', body: 'Saving a clip is a separate consent, off by default, deletable any time. Camera features are for members 18 and over.' },
    ],
  },

  gains: {
    title: 'Lose steam after week two? Your gym keeps you coming back.',
    lead: 'The kilos add up, the streak shows, and the people at your gym see you turn up.',
    /** One per screenshot, in order. */
    cards: [
      {
        problem: 'Progress you can’t see',
        fix: 'Lifetime kilograms, reps and workouts, personal bests, and badges from 1,000 kg lifted up to 100,000.',
        alt: 'Gains screen: lifetime kilograms lifted, reps and workouts, personal bests and milestone badges',
      },
      {
        problem: 'Nobody notices you showed up',
        fix: 'Three gym boards: visits, kilos and streak, this week. Opt in with your first name. Leave any time and your numbers go private again.',
        alt: 'Gym leaderboard with tabs for Visits, Kg lifted and Streak, a podium of Diya, Sana and Arjun, and the member’s own place highlighted',
      },
      {
        problem: 'Training alone',
        fix: 'Buddy suggestions with the reason: same start, same hours, a shared goal. Chat and groups, each a separate consent, adults only.',
        alt: 'Buddies screen with a suggested training partner and why they match, plus requests, chats and groups',
      },
    ],
  },

  owners: {
    for: 'For gym owners',
    title: 'See who came today. See who stopped coming. Before they stop paying.',
    lead: 'Most gym software in India is a register with a login. SpotAI shows you who came, who owes, and when the floor is busy, and gives members a reason to keep coming.',
    more: 'Free pilot for Hyderabad gyms',
    /** Label over each owner console screenshot. */
    console: 'Owner console, in the browser',
    /** One per screenshot, in order. */
    problems: [
      {
        problem: 'Dues chased on WhatsApp',
        fix: 'Overdue members in one list with days late. Reminders respect each member’s consent. Members pay inside the app with UPI and the reference lands in your ledger.',
        alt: 'Dues screen listing Sana and Rohan with ₹1,000 each, days overdue, last visit and a Send reminder button',
      },
      {
        problem: 'No idea who came today',
        fix: 'Arrivals as they happen with dues flagged on the name, active members, memberships ending this week, and collected this month against last.',
        alt: 'Owner overview: arrivals today, active members, ₹2,000 overdue, ₹9,000 collected, daily visits bar chart, busy hours and a live arrivals list',
      },
      {
        problem: 'Guessing the busy hours',
        fix: 'Visits by weekday and hour over four weeks, who came back from last month, who uses the coach. Figures from fewer than five members stay hidden.',
        alt: 'Insights: members who visited 82%, came back from the month before 100%, visits per week 3, members using the AI coach 36%, visits by weekday chart',
      },
    ],
    extras: [
      { title: 'Front desk console', body: 'Check-in by QR or by name. Staff see who is in and who owes, nothing else.' },
      { title: 'Trainer console', body: 'Review the AI coach’s tip templates with each flag’s wrong-rate, endorse helpers, moderate the community.' },
      { title: 'Complaints with a reference', body: 'A member files from the app, gets a number, and you see it in the dashboard. Required under India’s DPDP rules.' },
      { title: 'Face check-in, your call', body: 'An optional entrance device with liveness check and encrypted templates, nothing in the cloud. Stays in shadow mode until calibrated with consenting members.' },
    ],
    cta: 'Running a gym in Hyderabad? Free 90-day pilot, we load your register.',
  },

  privacy: {
    title: 'Worried where your camera footage goes? Nowhere.',
    lead: 'A gym app sees your camera, your attendance and sometimes your face. Each one is a separate decision you make, not a wall of text you tap through once.',
    points: [
      { title: 'Frames never leave the phone', body: 'Pose tracking runs on the device. The server only ever gets rep counts and flags.' },
      { title: 'One switch per purpose', body: 'Camera, clips, face, matching, chat and reminders are separate opt-ins, each with the notice version recorded.' },
      { title: 'Export or delete from the app', body: 'A JSON of everything you have, or the whole account gone. No email to support.' },
      { title: 'Complaints get a reference', body: 'File from the app, get a number, and the gym has to answer. As India’s DPDP Act expects.' },
      { title: 'Language models behind a gate', body: 'Any model call goes through a gateway that strips identity and checks consent first, with template fallback.' },
      { title: 'Adults only', body: 'Camera features and the community switch off for members under 18.' },
    ],
    /** The illustrated privacy centre. */
    centreLabel: 'The privacy centre in the app',
    centreTitle: 'Privacy centre',
    /** Switch labels, by consent. */
    consents: {
      camera: 'Camera coaching',
      clips: 'Save my clips',
      face: 'Face check-in',
      matching: 'Buddy matching',
      chat: 'Chat',
      reminders: 'Dues reminders',
    },
    exportData: 'Export my data',
    deleteAccount: 'Delete my account',
  },

  faqSection: {
    title: 'Questions gym members and owners ask first',
    lead: 'Straight answers. Write to us if yours is not here.',
  },

  download: {
    title: 'Get SpotAI at your gym',
    lead: `Try the Android demo today. Gym owners in ${pilot.city} get a free pilot. Tell us who you are and we reply on WhatsApp.`,
    demo: {
      title: 'Try the demo now',
      body: 'The full member app in 7 languages, running offline on your phone. Nothing you log leaves the phone.',
      android: 'Download for Android',
      iphone: 'Open on iPhone',
      /** HTML. */
      steps: [
        'Open the downloaded <code>spotai-demo.apk</code>. If Android asks, allow installs from your browser.',
        'Tap <strong>Sign up</strong>, enter your name, email and a password, and tick the privacy notice. Your account is ready at once; no email code in the demo.',
        'Check in, pick a session, log sets. Everything you save stays on your phone and is still there when you open the app again.',
      ],
      /** HTML. */
      meta: `Version ${demo.version} · Android ${demo.android} or newer · ${demo.size} · signed by SpotAI · just looking? sign in as <code>${demo.logins[0]}</code>, password <code>${demo.password}</code>`,
      iosTitle: 'On iPhone',
      /** Link to the full iPhone guide, under the iPhone steps. */
      iosGuide: 'Step-by-step iPhone guide',
      /** HTML. */
      ios: [
        `<strong>Quickest:</strong> open <a href="/${demo.web}">spotai.streamerosai.com/${demo.web}</a> in <strong>Safari</strong>, tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>. It opens full-screen and keeps your data on the phone.`,
        `<strong>Native iOS app:</strong> <a href="/${demo.ipa}" download>download the iOS build</a> (${demo.ipaSize}, iOS ${demo.ios} or newer) and install it from your computer with <a href="https://sideloadly.io/" target="_blank" rel="noopener">Sideloadly</a> or AltStore using your Apple ID. With a free Apple ID the install lasts 7 days, then you install it again. App Store and TestFlight come at launch.`,
      ],
    },
    owner: {
      title: 'I own a gym',
      body: `Free ${pilot.days}-day pilot for the first ${pilot.gyms} ${pilot.city} gyms. We load your register for you.`,
      cta: 'Chat on WhatsApp',
    },
    member: {
      title: 'I train at a gym',
      body: 'Ask your gym owner to switch it on. One tap sends them the pilot link.',
      cta: 'Send to my gym owner',
    },
    form: {
      label: 'Join the waitlist',
      /** Subject line of the waitlist email. */
      subject: 'SpotAI waitlist',
      name: 'Your name',
      whatsapp: 'WhatsApp number',
      who: 'I am a',
      whoOptions: { member: 'Gym member', owner: 'Gym owner', trainer: 'Trainer' },
      gym: 'Gym name and area',
      gymPlaceholder: 'e.g. Iron Temple, Kukatpally',
      submit: 'Join the waitlist',
      /** Under the button: when a form endpoint is set, otherwise the mailto fallback. */
      noteForm: 'We reply on WhatsApp within a day.',
      noteMail: 'Opens your mail app with the details filled in.',
      /** Followed by the email address. */
      orWrite: 'Or write to',
    },
    welcomeAlt: 'SpotAI welcome screen with a kettlebell, dumbbell and shaker, the line Train smarter get stronger, and Continue with email',
    homeAlt: 'SpotAI home screen in light mode: Ready to train, Check in button, day streak and visits this week',
  },

  // ---------------------------------------------------------------- Pages

  pricing: {
    title: 'Gym management software price in India',
    description: `SpotAI is free for the first ${pilot.gyms} gyms in ${pilot.city} for ${pilot.days} days. Free for members. No per-member fee planned.`,
    /** Breadcrumb name in JSON-LD. */
    crumb: 'Pricing',
    h1: 'Pricing',
    lead: 'Nothing to pay during the pilot. Pricing after it is announced to pilot gyms first.',
    gym: {
      for: 'Gym owners',
      price: '₹0',
      /** After the price. */
      per: `for ${pilot.days} days`,
      sub: `First ${pilot.gyms} gyms in ${pilot.city}`,
      items: [
        'Owner console, front-desk console, trainer console',
        'We load your register or Excel in one visit',
        'QR poster for the desk, app poster for the floor',
        'WhatsApp support, seven days a week',
        'Your member list stays yours',
        'No per-member fee planned after the pilot',
      ],
      link: 'What the pilot includes',
    },
    member: {
      for: 'Members',
      price: 'Free',
      sub: 'When your gym is on SpotAI',
      items: [
        'AI squat coach on your phone camera',
        'Today’s workout and every set logged',
        'Your gym’s leaderboard and buddies',
        'Membership, days left and UPI dues in the app',
        'Export or delete your data any time',
      ],
      cta: 'Ask your gym to switch it on',
    },
    notes: {
      title: 'What is and is not in the pilot',
      items: [
        'Dues reminders and UPI payments run in demo mode during the pilot: the flows are in the app, nothing is sent or charged until we switch your gym to live with you.',
        'The AI coach checks squats today. Deadlift and bench press are next.',
        'Face check-in hardware is optional and comes later; QR and check-in by name work from day one.',
        'Your gym remains the data fiduciary for its members under India’s DPDP Act; SpotAI gives you the consent records, exports and complaint references to meet it.',
      ],
    },
  },

  forGymOwners: {
    title: 'Gym management software India: fee reminders, attendance',
    description: `See who came today, who stopped coming and who owes, from one screen. Free ${pilot.days}-day pilot for the first ${pilot.gyms} gyms in ${pilot.city}; members need no app to start.`,
    /** Breadcrumb name in JSON-LD. */
    crumb: 'For gym owners',
    heroFor: `For gym owners · ${pilot.city}`,
    h1: 'Gym management software that shows who came, who stopped coming and who owes.',
    fix: 'See it before they stop paying.',
    lead: 'SpotAI’s owner console is a live picture of your floor on your laptop or phone. Members need no app to start: the front desk checks them in by QR or by name. Members who want the AI coach, the leaderboard and buddies install the app when they are ready.',
    ctaPilot: 'The free pilot',
    note: `Free ${pilot.days}-day pilot for the first ${pilot.gyms} gyms in ${pilot.city}. We load your register for you.`,
    heroAlt: 'SpotAI owner console: arrivals today, active members, overdue, collected this month, daily visits, busy hours and live arrivals',
    today: {
      title: 'One screen, every morning',
      items: [
        { title: 'Who came today', body: 'Arrivals as they happen, with the time and how they checked in. Dues flagged on the name for the front desk.' },
        { title: 'Who stopped coming', body: 'Visits per member, last visit, and the busy-hours heatmap. The member who vanished in week three shows up before the month ends.' },
        { title: 'Who owes', body: 'Overdue list with amount and days late. Members never see each other’s dues.' },
        { title: 'What the floor looks like', body: 'Daily visits for 14 days, busy hours over four weeks, memberships ending this week, collected this month against last.' },
      ],
    },
    vs: {
      title: 'Against the register, Excel and the WhatsApp group',
      today: 'Today',
      withSpotai: 'With SpotAI',
      /** Row heading, today, with SpotAI. */
      rows: [
        ['Who came today', 'Ask the desk', 'Live list'],
        ['Who stopped coming', 'Notice at renewal', 'Flagged after 7 days'],
        ['Dues', 'WhatsApp screenshots', 'List with days late, UPI in the app'],
        ['Member list', 'One register, one copy', 'Console, searchable, always yours'],
        ['Busy hours', 'Gut feel', 'Four-week heatmap'],
        ['Trainer tips', 'Verbal', 'Approved templates, wrong-rate tracked'],
      ] as [string, string, string][],
    },
    console: {
      title: 'The console',
      /** One per screenshot, in order. */
      shots: [
        { alt: 'Dues: overdue members with amount, days late, last visit and Send reminder', caption: 'Dues, with days late and a reminder button that respects each member’s consent.' },
        { alt: 'Insights: members who visited, came back, visits per week, members using the AI coach, visits by weekday', caption: 'Insights for the last 30 days. Anything from fewer than five members is hidden.' },
        { alt: 'Members list with plan and status', caption: 'Members, plans, check-in history, complaints with their reference number.' },
      ],
      more: 'Every owner feature, in detail',
    },
    members: {
      title: 'What your members get, when they are ready',
      lead: 'A reason to keep coming, which is what keeps dues paid.',
      /** HTML. */
      items: [
        '<strong>AI squat coach</strong> on their own phone camera. Every tip is a template your trainer approved.',
        '<strong>Today’s workout</strong> and every set logged, with a short for every exercise.',
        '<strong>Your gym’s leaderboard</strong>: visits, kilos, streak. Opt-in, first names only.',
        '<strong>Buddies</strong> who train at the same hours. Adults only, trainer-moderated.',
        '<strong>Membership and dues</strong> on the home screen, UPI in the app.',
      ],
      more: 'All member features',
      alt: 'SpotAI member app home screen during a workout',
    },
    pilot: {
      for: 'The free pilot',
      title: `Free for the first ${pilot.gyms} gyms in ${pilot.city}, for ${pilot.days} days`,
      get: 'You get',
      getItems: [
        'The owner console, front-desk console and trainer console.',
        'We come to your gym and load your register or Excel in one visit.',
        'A QR poster for the desk and a member-app poster for the floor.',
        'WhatsApp support, seven days a week.',
        'Your member list stays yours, pilot or not.',
      ],
      ask: 'We ask',
      askItems: [
        'Thirty minutes with you each week.',
        'Honest feedback from you, your trainer and the desk.',
        'Permission to say you were a pilot gym, once you are happy.',
      ],
      leave: 'Leave your number',
      note: 'What you need: a laptop or phone with internet. Face check-in hardware is optional and comes later. Dues reminders and UPI run in demo mode during the pilot.',
    },
    faqTitle: 'Questions gym owners ask',
    faq: [
      { q: 'How much does it cost?', a: `Free for the first ${pilot.gyms} gyms in ${pilot.city} for ${pilot.days} days. Pricing after the pilot is announced to pilot gyms first; there is no per-member fee planned.` },
      { q: 'Do my members have to install an app?', a: 'No. The front desk checks members in by QR or by name and tracks dues without anyone installing anything. Members install the app when they want the AI coach, leaderboard, buddies or in-app payments.' },
      { q: 'What do I need at the gym?', a: 'A laptop or phone with internet for the console. Any Android phone for members who want the app. The face check-in device is optional and comes later.' },
      { q: 'What happens to my register or Excel?', a: 'We load it for you in one visit: names, plans, end dates, dues. You keep working from the console from day one.' },
      { q: 'Does it replace my trainer?', a: 'No. Every tip the AI coach gives is a template your trainer approved in the trainer console, and trainers see which tips members marked wrong.' },
      { q: 'Who owns the data?', a: 'You own your member list. Members own their own data and can export or delete it from the app. Camera video never leaves their phone.' },
      { q: 'Do dues reminders and UPI work today?', a: 'In the pilot, reminders and UPI run in demo mode: the flows are in the app, nothing is sent or charged until we switch your gym to live with you.' },
    ],
  },

  featuresIndex: {
    title: 'Features · SpotAI',
    /** JSON-LD name. */
    name: 'SpotAI features',
    description: 'Everything SpotAI does for gym members and owners in India: AI squat form check, workouts, leaderboard, QR check-in, UPI dues and the gym console.',
    h1: 'Everything SpotAI does',
    lead: 'One app for members, one console for the gym. Each page below names the problem and shows the screen that fixes it.',
    members: 'For members',
    owners: 'For gym owners',
  },

  /** Labels around every feature page (the copy of each feature is in ../features/). */
  featurePage: {
    crumb: 'Features',
    who: { members: 'For members', owners: 'For gym owners', everyone: 'For members and gym owners' },
    cta: 'Get early access',
    how: 'How it works',
    factsLabel: 'Key facts',
    howTitle: 'How it works',
    getTitle: 'What you get',
    limits: 'Today’s limits',
    faqTitle: 'Questions',
    moreTitle: 'More of SpotAI',
    moreCta: { kicker: 'Get the app', title: 'Join the waitlist', text: 'Play Store and App Store links on launch day.' },
  },

  guidesIndex: {
    title: 'Gym guides for members and owners in India · SpotAI',
    /** JSON-LD name. */
    name: 'SpotAI guides',
    description: 'Practical guides for gym members and gym owners in India: calories in Indian food, beginner workout plans, fee reminder messages and attendance registers.',
    h1: 'Guides',
    lead: 'Short, practical answers for people who train and people who run gyms in India.',
    /** Audience tag on each card. */
    members: 'Members',
    owners: 'Gym owners',
    /** Cards of the hand-built guides, by slug. Markdown guides bring their own. */
    pages: {
      'calories-in-indian-food': { title: 'Calories in roti, rice, dal and other Indian food', blurb: 'One roti, one idli, a bowl of dal: calories and protein per serving for everyday Indian dishes.' },
      'gym-workout-plan-for-beginners': { title: 'Gym workout plan for beginners', blurb: 'A 3-day full body plan and a 4-day upper/lower split, with sets, reps and how to progress.' },
      'gym-fee-reminder-message': { title: 'Gym fee reminder message templates', blurb: 'Ready-to-send WhatsApp reminders in English and Hindi, before, on and after the due date.' },
      'gym-attendance-register': { title: 'Gym attendance register: free sheet', blurb: 'A free attendance sheet for Excel or Google Sheets, and three checks that keep members renewing.' },
    },
  },

  /** Labels around every guide page. */
  guide: {
    crumb: 'Guides',
    /** Before the date. */
    updated: 'Updated',
    questions: 'Questions',
  },

  /** The iPhone install guide (/install-iphone/). Steps are HTML. */
  installIphone: {
    title: 'Install SpotAI on iPhone: step-by-step guide',
    description: `Put SpotAI on your iPhone home screen in a minute with Safari, or install the native iOS app from a Windows or Mac computer. Both free.`,
    crumb: 'Install on iPhone',
    h1: 'Install SpotAI on your iPhone',
    lead: 'Two ways: add the app to your home screen in a minute, or install the native app from a computer. Both are free, and what you log stays on your phone.',
    quick: {
      title: 'Option 1: Home screen app (1 minute, recommended)',
      steps: [
        `Open <strong>Safari</strong> on your iPhone and go to <a href="/${demo.web}">spotai.streamerosai.com/${demo.web}</a>.`,
        'Tap the <strong>Share</strong> button: the square with an arrow pointing up, at the bottom of the screen.',
        'Scroll down, tap <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>.',
        'Open <strong>SpotAI</strong> from your home screen. It opens full screen, like any other app.',
        `Tap <strong>Sign up</strong>, or just look around with <code>${demo.logins[0]}</code> and password <code>${demo.password}</code>.`,
      ],
      cta: 'Open the app in Safari',
    },
    native: {
      title: 'Option 2: Native app from a computer (about 15 minutes)',
      need: 'You need a Windows or Mac computer, a cable for your iPhone, and your Apple ID.',
      steps: [
        `On the computer, download the <a href="/${demo.ipa}" download>SpotAI iOS file</a> (${demo.ipaSize}, iOS ${demo.ios} or newer).`,
        'Install <a href="https://sideloadly.io/" target="_blank" rel="noopener">Sideloadly</a>. On Windows, also install iTunes and iCloud from Apple’s website, not from the Microsoft Store.',
        'Connect your iPhone with the cable, unlock it and tap <strong>Trust</strong> when it asks.',
        'Open Sideloadly, drag the SpotAI file into it, enter your Apple ID and click <strong>Start</strong>.',
        'On the iPhone, open <strong>Settings → General → VPN &amp; Device Management</strong>, tap your Apple ID and tap <strong>Trust</strong>.',
        'On iOS 16 or newer, turn on <strong>Settings → Privacy &amp; Security → Developer Mode</strong> and restart when asked.',
        'Open SpotAI from your home screen.',
      ],
      note: 'With a free Apple ID the app works for 7 days. After that, connect the iPhone and click Start in Sideloadly again; your data stays on the phone.',
    },
    faqTitle: 'Questions',
    faq: [
      { q: 'Why is SpotAI not on the App Store yet?', a: 'It will be at launch. Until then, the home screen app and the iOS file are the ways to try it on an iPhone.' },
      { q: 'Do I have to give Sideloadly my Apple ID?', a: 'For option 2, yes: Apple needs it to sign the app for your iPhone. If you would rather not, use option 1, which needs no Apple ID.' },
      { q: 'Does what I log leave my phone?', a: 'No. In the demo, everything you log is kept on your phone, in both options.' },
    ],
  },

  notFound: {
    title: 'Page not found · SpotAI',
    description: 'That page is not here. Jump to a SpotAI feature, the gym owner pilot, or pricing.',
    h1: 'That page is not here.',
    lead: 'Try one of these.',
    home: 'Home',
    forOwners: 'For gym owners',
    pricing: 'Pricing',
  },

  // ---------------------------------------------------------------- Hand-built guides

  guideCalories: {
    title: 'Calories in roti, rice, dal: Indian food chart · SpotAI',
    description: (roti: Food) => `Calories in one roti (${roti.kcal} kcal), a plate of rice, a bowl of dal, idli, dosa, poha and paratha, with protein per serving. From the Indian Nutrient Databank.`,
    h1: 'Calories in roti, rice, dal and other Indian food',
    answer: (v: { roti: Food; rice: Food; dal: Food; idli: Food; count: number }) =>
      `One plain roti (${v.roti.grams} g) has about ${v.roti.kcal} kcal. A plate of boiled rice (${v.rice.grams} g) has about ${v.rice.kcal} kcal, a bowl of mixed dal about ${v.dal.kcal} kcal, and one idli about ${v.idli.kcal} kcal. The tables below list ${v.count} everyday dishes per serving, with protein, carbs and fat.`,
    faq: (v: { roti: Food; rice: Food; dal: Food }) => [
      {
        q: 'How many calories are in one roti?',
        a: `One plain chapati or roti of about ${v.roti.grams} g, made without ghee, has about ${v.roti.kcal} kcal, ${v.roti.protein} g protein and ${v.roti.carbs} g carbohydrate. Ghee or oil on top adds to that.`,
      },
      {
        q: 'Roti or rice: which has fewer calories?',
        a: `Per serving it depends on how much you eat. One ${v.roti.grams} g roti is about ${v.roti.kcal} kcal; a ${v.rice.grams} g plate of boiled rice is about ${v.rice.kcal} kcal, roughly the same as ${Math.round(v.rice.kcal / v.roti.kcal)} rotis.`,
      },
      {
        q: 'How many calories are in a bowl of dal?',
        a: `A bowl of mixed dal (about ${v.dal.grams} g cooked) is about ${v.dal.kcal} kcal with ${v.dal.protein} g protein. Thicker dals with butter or cream, like dal makhani, are higher.`,
      },
      {
        q: 'Where do these numbers come from?',
        a: 'From the Indian Nutrient Databank (Jaacks et al., 2024), which calculates nutrients for home-style Indian recipes. Your own recipe, oil and portion will differ, so treat these as estimates.',
      },
    ],
    cta: { label: 'Log food in SpotAI', text: 'SpotAI totals what you eat each day and month from this same table. Logging is optional.' },
    /** HTML. */
    intro: 'Gym-goers in India mostly eat home food, and generic calorie apps rarely know a bowl of rajma from a cup of chilli. The numbers below are per <strong>serving as it is usually eaten</strong>: one roti, one idli, one bowl of dal, one plate of rice.',
    /** Heading of each food group table. */
    groupTitle: (group: string) => `${group}: calories per serving`,
    table: { dish: 'Dish, one serving', kcal: 'kcal', protein: 'Protein', carbs: 'Carbs', fat: 'Fat' },
    /** Serving under each dish name, e.g. "1 chapati, about 36 g". */
    serving: (unit: string, grams: number) => `1 ${unit}, about ${grams} g`,
    howTitle: 'How to use these numbers',
    /** HTML. */
    how: [
      '<strong>Count pieces, not plates.</strong> Two rotis, one bowl of dal and a small bowl of rice is easier to log than a guessed "one thali".',
      '<strong>Add the extras.</strong> Ghee on roti, butter on dosa and a spoon of pickle are not in the base numbers.',
      '<strong>Protein matters as much as calories</strong> if you train. Dal, paneer, curd and eggs are where most home protein comes from.',
      '<strong>Weigh once.</strong> Weigh your usual bowl and roti one time; after that the servings above are close enough.',
    ],
    source: 'Source: Indian Nutrient Databank (Jaacks LM et al., Current Developments in Nutrition, 2024). Recipes where the databank counts all the frying oil or a whole tray as one serving are left out. Estimates for typical home recipes, not medical or dietary advice.',
  },

  guideAttendance: {
    title: 'Gym attendance register: free Excel sheet · SpotAI',
    description: 'Free gym attendance register sheet for Excel or Google Sheets: the columns that matter and how to spot members who stopped coming.',
    h1: 'Gym attendance register: free sheet and how to use it',
    answer: 'A gym attendance register needs the date, member name, check-in time and membership end date. Download the free sheet below (works in Excel and Google Sheets). Its real use is not counting heads: it shows who has stopped coming before they stop paying.',
    faq: [
      {
        q: 'What should a gym attendance register have?',
        a: 'Date, member name or ID, check-in time, and ideally check-out time and membership end date. With those, you can see who is coming, when the gym is busy, and who has stopped coming before their membership runs out.',
      },
      {
        q: 'Is there a free gym attendance sheet in Excel?',
        a: 'Yes, the sheet linked on this page is free. It opens in Excel or Google Sheets and has the columns above.',
      },
      {
        q: 'Paper register, Excel or an app: which is better?',
        a: 'Paper is fine for a few members a day. Excel helps once you want totals. An app records check-ins on its own (by QR or at the desk) and can flag members who owe or have stopped coming without anyone reading the sheet.',
      },
      {
        q: 'How does SpotAI record attendance?',
        a: 'Members show a QR from the app at the desk, or the desk checks them in by name. Each check-in appears live on the owner console with the time, and members who stopped coming show up before their membership ends.',
      },
    ],
    cta: { label: 'See live attendance in SpotAI', text: 'SpotAI records check-ins by QR or name and shows who came today and who stopped coming.' },
    download: 'Download the free attendance sheet (CSV)',
    columnsTitle: 'Columns to keep',
    /** HTML. */
    columns: [
      '<strong>Date</strong> and <strong>check-in time</strong>: busy hours come from these.',
      '<strong>Member name</strong> and <strong>phone or member ID</strong>: two members called Rahul is normal.',
      '<strong>Check-out time</strong>: optional, useful for crowding.',
      '<strong>Membership ends</strong>: so the desk sees renewals coming.',
      '<strong>Dues</strong>: a yes/no is enough at the desk; keep amounts private.',
    ],
    checksTitle: 'Three things to check every week',
    /** HTML. */
    checks: [
      '<strong>Who hasn\'t come in 7 days.</strong> These members are the ones who won\'t renew. Call or message them now.',
      '<strong>Busy hours.</strong> Count check-ins by hour. Put your trainers where the crowd is.',
      '<strong>Renewals in the next 7 days.</strong> Remind them before the date, not after.',
    ],
    enoughTitle: 'When a register stops being enough',
    enough: 'Once the desk is writing more than a few dozen names a day, the register gets filled in late, names get misspelt, and nobody has time to read it for the three checks above. That is the point where a QR check-in and a console that does the reading for you pays off.',
  },

  guideFeeReminder: {
    title: 'Gym fee reminder message: WhatsApp templates · SpotAI',
    description: 'Copy-paste gym fee reminder messages for WhatsApp in English and Hindi: before the due date, on the day and after, with amount and how to pay.',
    h1: 'Gym fee reminder message templates',
    answer: "A good gym fee reminder is short, private and specific: the member's name, the amount, the due date and how to pay, sent to the member alone, never to a group. Below are ready-to-send messages for before, on and after the due date, in English and Hindi.",
    faq: [
      {
        q: 'When should a gym send a fee reminder?',
        a: 'A common rhythm is a friendly note a few days before the membership ends, one on the due date, and one gentle follow-up a few days after. More than that starts to feel like chasing.',
      },
      {
        q: 'Can I send gym fee reminders on WhatsApp?',
        a: 'Yes, as long as the member agreed to get messages from the gym. Send one message to one member, not a group: dues are private. For many members at once, the WhatsApp Business app or the WhatsApp Business API is the usual route.',
      },
      {
        q: 'Should the reminder say the amount?',
        a: 'Yes. The amount, the date and how to pay in one message saves a back-and-forth. Do not post amounts in a group chat where other members can see them.',
      },
      {
        q: 'How does SpotAI handle fee reminders?',
        a: 'The owner console lists every overdue member with the amount and days late, and the reminder button only works for members who allowed reminders. Members see what they owe and pay with UPI in the app. In the pilot, reminders and UPI run in demo mode.',
      },
    ],
    cta: { label: 'See the dues list', text: 'SpotAI shows who owes, how many days late, and lets members pay with UPI in the app. Free pilot for Hyderabad gyms.' },
    /** Ready-to-send messages. Keep the {placeholders} in braces as they are. */
    sections: [
      {
        title: '3 days before the due date',
        messages: [
          'Hi {name}, a quick heads-up from {gym}: your membership renews on {date}. The amount is ₹{amount}. You can pay at the desk or by UPI to {upi id}. See you at the gym!',
          'नमस्ते {name}, {gym} की तरफ़ से याद दिलाना था: आपकी मेंबरशिप {date} को रिन्यू होनी है। राशि ₹{amount} है। डेस्क पर या UPI {upi id} पर भुगतान कर सकते हैं। जिम में मिलते हैं!',
        ],
      },
      {
        title: 'On the due date',
        messages: [
          'Hi {name}, your {gym} membership is due today, ₹{amount}. Pay at the desk or UPI {upi id} and share the payment reference here. Thank you!',
          'नमस्ते {name}, आज आपकी {gym} मेंबरशिप की फ़ीस ₹{amount} देय है। डेस्क पर या UPI {upi id} पर भुगतान करें और रेफ़रेंस यहाँ भेज दें। धन्यवाद!',
        ],
      },
      {
        title: 'A few days after',
        messages: [
          'Hi {name}, we noticed the {gym} fee of ₹{amount} from {date} is still open. If you have already paid, please send the reference and we will update it. If anything changed, just reply and we can sort it out.',
          'नमस्ते {name}, {date} की ₹{amount} फ़ीस अभी बाकी दिख रही है। अगर आपने भुगतान कर दिया है तो रेफ़रेंस भेज दें, हम अपडेट कर देंगे। कुछ बदला हो तो बताइए, मिलकर हल निकाल लेंगे।',
        ],
      },
      {
        title: 'For a member who stopped coming',
        messages: [
          "Hi {name}, we haven't seen you at {gym} for a while. All good? Your membership ends on {date}. If timings are the problem, tell us; mornings before 7 are quiet this month.",
        ],
      },
    ],
    rulesTitle: 'Rules that keep reminders from annoying people',
    /** HTML. */
    rules: [
      '<strong>One member, one message.</strong> Never post dues in a group. It embarrasses people and shares their data.',
      '<strong>Only if they agreed.</strong> Ask at joining whether they want reminders on WhatsApp, and stop if they say no.',
      '<strong>Not at night.</strong> Keep reminders between morning and evening.',
      '<strong>Say how to pay.</strong> A UPI ID or link in the message gets paid faster than "please clear your dues".',
      '<strong>Notice who stopped coming.</strong> A member who hasn\'t visited in two weeks is about to not renew; talk to them before the due date.',
    ],
    note: (phone: string) => `Questions? Message us on WhatsApp at ${phone}.`,
  },

  guideWorkoutPlan: {
    title: 'Gym workout plan for beginners: 3-day and 4-day split · SpotAI',
    description: 'Gym workout plan for beginners: a 3-day full body plan and a 4-day upper/lower split, with sets, reps and how to progress.',
    h1: 'Gym workout plan for beginners',
    answer: 'Start with three full-body days a week (for example Monday, Wednesday, Friday), 2 to 3 sets of 8 to 12 reps per exercise. After a couple of months, move to a 4-day upper/lower split. Both train each muscle about twice a week, which works better for beginners than one muscle a day.',
    faq: [
      {
        q: 'How many days a week should a beginner go to the gym?',
        a: 'Three days a week is enough to start, with a rest day between sessions. Moving to four days with an upper/lower split works well once three days feels easy.',
      },
      {
        q: 'Is a bro split (one muscle a day) good for beginners?',
        a: 'It works, but it trains each muscle only once a week. Full body or upper/lower hits each muscle about twice a week, which is the common recommendation for building muscle.',
      },
      {
        q: 'How many sets and reps should a beginner do?',
        a: 'Two to three sets of 8 to 12 reps per exercise, stopping with one or two good reps left. Add weight when you can do the top of the range on every set with clean form.',
      },
      {
        q: 'Can an app plan my gym workout?',
        a: "SpotAI suggests today's session from what you trained in the last week, so each muscle comes round about twice a week, and logs every set. You can always pick something else.",
      },
    ],
    cta: { label: 'How SpotAI plans your day', text: "SpotAI picks today's session from your last week and logs every set, with a short video for every exercise." },
    table: { day: 'Day', exercises: 'Exercises' },
    fullBody: {
      title: '3-day full body plan',
      intro: 'Train on three non-consecutive days. Rest at least a day between sessions.',
      /** Day, exercises. */
      rows: [
        ['Day 1', 'Goblet squat 3×10 · Push-up 3×8 · Dumbbell row 3×10 · Plank 3×30 s'],
        ['Day 2', 'Romanian deadlift 3×10 · Dumbbell shoulder press 3×10 · Lat pulldown 3×10 · Glute bridge 3×12'],
        ['Day 3', 'Leg press 3×12 · Dumbbell bench press 3×10 · Seated cable row 3×10 · Dead bug 3×10'],
      ] as [string, string][],
    },
    upperLower: {
      title: '4-day upper/lower split',
      intro: 'When three days feels easy, split the body in two and train each half twice: for example Monday, Tuesday, Thursday, Friday. Do 3 sets of 8 to 12 reps.',
      /** Day, exercises. */
      rows: [
        ['Mon: Upper', 'Dumbbell bench press · Lat pulldown · Shoulder press · Dumbbell row · Biceps curl'],
        ['Tue: Lower', 'Goblet squat · Romanian deadlift · Walking lunge · Calf raise · Plank'],
        ['Thu: Upper', 'Incline push-up · Seated cable row · Lateral raise · Face pull · Triceps pushdown'],
        ['Fri: Lower', 'Leg press · Hip thrust · Leg curl · Step-up · Side plank'],
      ] as [string, string][],
    },
    progressTitle: 'How to progress',
    /** HTML. */
    progress: [
      '<strong>Write every set down.</strong> Reps and kilograms. Without a log you can\'t tell if you are getting stronger.',
      '<strong>Add weight slowly.</strong> When every set reaches 12 clean reps, go up by the smallest jump the gym has.',
      '<strong>Form first.</strong> If your knees cave in on squats or your back rounds on deadlifts, lower the weight. Ask the trainer, or let the SpotAI coach check your squat on the phone camera.',
      '<strong>Rest days count.</strong> Sleep and food are when the training turns into muscle.',
    ],
    note: "General guidance for healthy adults, not medical advice. Check with a doctor before starting if you have an injury or health condition, and with your gym's trainer for your own plan.",
  },
};
