// English copy for every feature page, keyed by slug. Translations in <code>.ts mirror this shape
// (same slugs, same keys, same array lengths); the data each page needs (screenshots, audience, related
// pages) stays in src/features.ts.
import type { FeatureCopy } from './index';

const en: Record<string, FeatureCopy> = {
  'ai-coach': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'AI coach',
    /** <title> and JSON-LD name. */
    title: 'AI gym trainer app with camera form check for squats',
    /** Meta description. */
    description:
      'AI squat form checker on your phone: counts reps, flags knee valgus, depth and forward lean, one trainer-approved tip per set. Video never leaves the phone.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'No one spotting your squat?',
    fix: 'Prop your phone on the rack. The coach counts reps and calls your form.',
    lead:
      'Pose tracking runs on the phone with MediaPipe. Each rep is checked for three things, and at the end of the set you get one tip written from templates your gym’s trainer approved. No video is uploaded, ever.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'AI coach screen: pose tracking preview of a squat, exercise Squat selected, camera angle Side, note that video stays on the phone',
    /** Number, label. */
    facts: [
      ['3', 'form checks per rep'],
      ['2', 'camera angles: side or 45°'],
      ['1', 'trainer-approved tip per set'],
      ['0', 'frames leave the phone'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Set the phone down and pick the angle',
        body: 'Lean the phone on the rack or a bench, side-on or at 45°, with your whole body in frame. The preview shows the tracking box so you know you are in shot before you start. Light from a window or the gym’s ceiling lights is enough; the model needs to see your hips, knees and ankles.',
        alt: 'AI coach screen in light mode: pose tracking preview, exercise Squat, camera angle Side or 45°',
      },
      {
        title: 'Do the set. The counter runs on your body',
        body: 'Reps are counted from the hip and knee landmarks, so there is nothing to tap between reps. Rack the bar when you are done. Each rep is scored for knee valgus (knees caving in), shallow depth and excessive forward lean from the joint angles, on the phone, as you move.',
        alt: 'AI coach screen during a squat set with the pose tracking preview and Start camera button',
      },
      {
        title: 'Read one tip, not a wall of feedback',
        body: 'When the set ends you get a single cue chosen for the flag that fired most, in English today; Hindi and Bengali versions are waiting for native-speaker review. “Try pushing your knees out over your toes as you stand up.” Each cue is a template your gym’s trainer reviewed in the staff console; the language model only words it, and if the gateway is down the exact template text is used.',
        alt: 'Home screen with the coach tip card: Try pushing your knees out over your toes as you stand up, with Helpful and This was wrong buttons',
      },
      {
        title: 'Tell it when it was wrong',
        body: 'Tap “This was wrong” or “Helpful” under the tip. The answer is kept with the set, the flag and the rule version, so trainers see each template’s wrong-rate and retire the bad ones. You can also hand a set of squats to the coach straight from the workout screen with “Record set”.',
        alt: 'Workout screen for Lat pulldown with Watch short and Record set buttons and sets to log',
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
      { q: 'Form check karne wala app kaunsa hai?', a: 'SpotAI ka AI coach phone camera se squat ka form check karta hai: reps ginta hai, ghutne andar aana, kam depth aur aage jhukna pakadta hai, aur har set ke baad ek tip deta hai. Video phone se bahar nahi jaata.' },
    ],
  },
  'workouts': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Workouts',
    /** <title> and JSON-LD name. */
    title: 'Gym workout plan app: every set logged',
    /** Meta description. */
    description:
      'Workout tracker for Indian gyms: today’s session picked from your week, tick the exercises, log reps and kilograms per set, a short for every exercise.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Walk in with no plan?',
    fix: 'Check in and the app tells you what to train today, then logs every set.',
    lead:
      'The suggestion follows the twice-a-week-per-muscle guideline: the muscle group that is most rested comes first. You can always pick something else, and everything you do is written down.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'Home screen during a workout: Back and biceps session, next up Lat pulldown 3 by 10, day streak and visits this week',
    /** Number, label. */
    facts: [
      ['4', 'session types'],
      ['2×', 'a week per muscle, the rule it follows'],
      ['30 s', 'shorts for every exercise'],
      ['Offline', 'logging that syncs later'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Pick what kind of session',
        body: 'Strength, cardio, cycling or mobility. The app marks the one it suggests and says why: “Your plan has a recovery day today”, or the muscle group you have not trained this week. Tap anything else if you feel different.',
        alt: 'Session picker: What are you training today? Strength, Cardio, Cycling and Mobility with the suggested one marked',
      },
      {
        title: 'Then which muscles',
        body: 'Back and biceps, chest and triceps, shoulders, legs, or today’s day from your plan. Each one shows when you last trained it, so “Shoulders · last trained 24 days ago · not trained this week” is the obvious pick. The rule aims for each muscle about twice a week with roughly two days between.',
        alt: 'Which muscles today: Back and biceps, Chest and triceps, Shoulders suggested with last trained 24 days ago, Legs, Full body',
      },
      {
        title: 'Tick the exercises you want',
        body: 'The coach pre-ticks a balanced set. Every exercise shows how many times you did it this week and the last time you did it, so the gaps are obvious and you are not doing the same three lifts forever. Add or remove with one tap, then start.',
        alt: 'Pick your exercises: Lat pulldown, Dumbbell row, Dumbbell biceps curl and Hammer curl ticked, each showing how many times it was done this week',
      },
      {
        title: 'Log every set as you go',
        body: 'Reps and kilograms for strength, timed sets for cardio and mobility. Add a set, skip an exercise, or watch the short if you forgot the move. On squats, “Record set” hands the counting to the AI coach. Logging works offline and syncs when you are back online.',
        alt: 'Workout screen for Lat pulldown: how-to, Watch short and Record set, three sets of 10 reps with kilograms to log',
      },
      {
        title: 'Follow a plan, or train freestyle',
        body: 'Your programme shows the week day by day with rest days marked. The home screen shows today’s session ticked off, your streak and visits this week, so you can see the week stacking up.',
        alt: 'Train screen: your programme with the week, Saturday selected, rest day with a hip mobility flow',
      },
    ],
    details: [
      { title: 'Suggested, not forced', body: 'The rule looks at your last seven days and picks the muscle group trained least, then the one rested longest. Override it with one tap; the app never locks you into its suggestion.' },
      { title: 'Exercise library with shorts', body: 'Every exercise has a how-to and a short from a well-known coach that plays inside the app. Thirty seconds, then back to the set.' },
      { title: 'This-week counts on every exercise', body: 'Each exercise in the picker shows how many times you did it this week and when you last did it. Gaps are visible before you start, not in a spreadsheet later.' },
      { title: 'Record a set with the camera', body: 'On squats, hand the set to the AI coach and it counts reps and checks form for you. Everything else you log by hand.' },
      { title: 'Streaks and visits', body: 'Check-ins build a day streak and a visits-this-week count on the home screen. Rest days you mark keep the streak going; skip without one and it resets.' },
      { title: 'History', body: 'Every logged set is kept with its date, reps and kilograms, and feeds your gains, personal bests and badges.' },
    ],
    limits: [
      'Sample plans are reviewed by a trainer before launch; today’s plan is a demo.',
      'Shorts play inside the app and need a connection.',
    ],
    faq: [
      { q: 'Can I ignore the suggestion?', a: 'Yes. Pick any session or any exercises. The suggestion is a starting point.' },
      { q: 'Does it work offline?', a: 'Logging works offline and syncs when you are back online. Shorts need a connection.' },
      { q: 'Can my trainer give me a plan?', a: 'Plans are a programme the app follows day by day. Trainer-authored plans per member are planned, not shipped yet.' },
    ],
  },
  'leaderboard': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Leaderboard & buddies',
    /** <title> and JSON-LD name. */
    title: 'Gym buddy app and gym leaderboard',
    /** Meta description. */
    description:
      'Gym leaderboard app: opt in for visits, kilograms and streak, lifetime gains and badges, and a buddy who trains when you do. First names only.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Lose steam after week two?',
    fix: 'See the kilos add up and let your gym see you turn up.',
    lead:
      'Three boards this week: visits, kilograms, streak. Lifetime totals and badges on your gains screen. Buddy suggestions with the reason they match. All opt-in, first names only, adults only.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'Gym leaderboard with tabs for Visits, Kg lifted and Streak, a podium of Diya, Sana and Arjun and the member’s own place highlighted',
    /** Number, label. */
    facts: [
      ['3', 'boards: visits, kilos, streak'],
      ['16', 'milestone badges'],
      ['First names', 'only, on the board'],
      ['18+', 'for the board and buddies'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Your gains, lifetime and this week',
        body: 'Kilograms lifted, reps and workouts since you joined, plus this week’s numbers next to them. “8,850 kg · 1,110 reps across 14 workouts” is the kind of line that makes a Tuesday session feel like it counted. Personal bests per exercise sit one tab over.',
        alt: 'Gains screen: 8,850 kg lifted, 1,110 reps across 14 workouts, this week 1,290 kg and 174 reps, next badge 10k kg',
      },
      {
        title: 'Badges you actually earn',
        body: 'Kilograms from 1,000 up to 100,000; reps from 500 to 25,000; workouts from 10 to 250. The next one is always shown with how far you are from it. They are app milestones, not training targets, so the app never tells you how much to lift.',
        alt: 'Gains screen in light mode with milestone badges and next badge progress',
      },
      {
        title: 'The gym leaderboard, if you join it',
        body: 'Three boards reset every week: visits, kilograms lifted, current streak. Join with your first name and your numbers appear; leave and they go private again the same minute. Below the board, “You vs Diya this week” compares you with the buddy you train with most.',
        alt: 'Gym leaderboard: Visits tab, podium with Diya 3 visits first, list with You at 6, and You vs Diya this week',
      },
      {
        title: 'A buddy who trains when you do',
        body: 'Suggestions come with the reason: both just starting, both train evenings, one shared goal. Send a request, chat once they accept, or make a small training group. Buddy matching and chat are separate consents in the privacy centre, and trainers moderate.',
        alt: 'Connect screen: Buddies tab, one request wants to train with you, Kabir suggested with Both just starting, Both train evenings, 1 shared goal',
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
    limits: [
      'Leaderboard and Connect are for members aged 18 and over.',
      'Boards are per gym; there is no cross-gym ranking.',
    ],
    faq: [
      { q: 'How does the gym leaderboard work?', a: 'Opt in, first names only. Three boards: visits this week, kilograms this week, current streak. Leave any time.' },
      { q: 'How do I find a gym buddy?', a: 'Open Connect and turn on buddy matching. Suggestions come from members of your own gym with the reason you match, like training at the same time. Adults only.' },
      { q: 'Who can message me?', a: 'Only buddies you accepted. Chat is a separate consent and trainers moderate it.' },
      { q: 'Can I hide my numbers but keep buddies?', a: 'Yes. The leaderboard and Connect are separate switches.' },
    ],
  },
  'food-log': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Food log',
    /** <title> and JSON-LD name. */
    title: 'Calorie counter for Indian food: roti, dal, idli',
    /** Meta description. */
    description:
      'Calorie counter app for Indian food: search 672 home-style dishes, log by servings or grams, see daily and monthly calories and protein. Logging is optional.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Calorie apps that don’t know dal?',
    fix: 'Search roti, dal or dosa, tap how many, and the day adds up.',
    lead:
      'The food log uses the Indian Nutrient Databank, so a chapati is a chapati and a bowl of rajma is a bowl of rajma. Log by servings or grams, add anything in your own words, snap a photo of the plate. Logging is optional; the more you log, the closer the totals.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'Food log, Day tab: 246 kcal today with protein, carbs and fat; idli 100 g at breakfast, 1.5 chapati at lunch, banana at snacks',
    /** Number, label. */
    facts: [
      ['672', 'Indian dishes to search'],
      ['4', 'meals a day'],
      ['Day + month', 'calorie totals'],
      ['0', 'food photos uploaded'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Search the dish you ate',
        body: 'Type chapati, poha or dal makhani. Each result shows its usual serving with calories and protein, so you pick the right one without reading a label. Not in the list? Add it in your own words; it still counts as a meal, just without numbers.',
        alt: 'Add to Lunch sheet: search chapati, result Chapati/Roti, 1 chapati, 73 kcal, 2.1 g protein, and Not in the list? Add it in your own words',
      },
      {
        title: 'Say how much: servings or grams',
        body: 'Tap plus and minus for servings (one and a half chapatis is fine) or switch to grams if you weighed it. Calories, protein, carbs and fat update before you add, and the serving size in grams is shown underneath.',
        alt: 'Amount step: Chapati/Roti, Servings tab, 1.5 chapati, 110 kcal, 3.2 g protein, 19.2 g carbs, 2 g fat, one chapati is about 36 g',
      },
      {
        title: 'Your day, meal by meal',
        body: 'Breakfast, lunch, snacks and dinner each list what you added, with the day’s calories, protein, carbs and fat on top. Forgot yesterday? Step back a day and log it. Add a photo of the plate if that is easier than typing; photos stay on the phone.',
        alt: 'Food log Day tab, empty: 0 kcal, protein, carbs and fat, note that logging food is optional, Add food and Photo buttons for each meal',
      },
      {
        title: 'The month at a glance',
        body: 'The Month tab totals the calories you logged, the number of days you logged and the daily average, with a bar for each day. Useful for spotting the weekend that undoes the week.',
        alt: 'Food log Month tab: 246 kcal logged on 1 day, average per day, a bar for Mon Nov 2, and the Indian Nutrient Databank credit',
      },
    ],
    details: [
      { title: 'Indian food, Indian portions', body: 'Dishes come from the Indian Nutrient Databank (Jaacks et al., 2024): home-style recipes with servings like one roti, one idli, one bowl. Recipes where the data counted all the frying oil as one serving were removed.' },
      { title: 'Servings or grams', body: 'Every dish has a usual serving in grams. Log in servings, half servings, or exact grams.' },
      { title: 'Protein, not just calories', body: 'Each entry carries protein, carbs and fat, and the day shows all three. If you train, protein is the number to watch.' },
      { title: 'Your own words', body: 'Ate something not in the list? Write it down. It shows in the meal without numbers, or add the calories yourself if you know them.' },
      { title: 'Photos stay on the phone', body: 'Plate photos are stored on the device only. They are never uploaded and are removed when you delete your account.' },
      { title: 'In your data export', body: 'Food entries are part of “export my data” and are deleted with your account, like everything else.' },
    ],
    limits: [
      'Numbers are estimates for typical home recipes; your oil, ghee and portion will differ.',
      'No barcode scanning or packaged foods yet.',
      'Not medical or dietary advice, and no calorie targets are set for you.',
    ],
    faq: [
      { q: 'Is there a calorie counter app for Indian food?', a: 'SpotAI’s food log searches 672 Indian home-style dishes, from roti and dal to dosa and biryani, with servings as they are usually eaten. It is part of the member app, free for members.' },
      { q: 'How many calories are in one roti?', a: 'About 73 kcal for a plain chapati of around 36 g without ghee, according to the Indian Nutrient Databank. The full table is in our guide to calories in Indian food.' },
      { q: 'Do I have to log every meal?', a: 'No. Logging is optional. The totals are only as complete as what you add.' },
      { q: 'Are my food photos uploaded?', a: 'No. Photos stay on your phone and are deleted with your account.' },
    ],
  },
  'check-in': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Check-in & membership',
    /** <title> and JSON-LD name. */
    title: 'Gym attendance app: QR check-in, membership and UPI dues',
    /** Meta description. */
    description:
      'Gym check-in app with QR, membership days left and UPI dues in the app. The gym sees the arrival and the payment reference live.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Paying dues over WhatsApp screenshots?',
    fix: 'Show a QR at the desk, see your days left, pay with UPI in the app.',
    lead:
      'The home screen is your membership card: check in, see days left and anything due, and pay from the app. The gym sees the arrival and the payment reference the moment it happens.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'Home screen: Not checked in, Ready to train, Check in button with a QR button beside it, day streak and visits this week',
    /** Number, label. */
    facts: [
      ['100 s', 'before the QR refreshes itself'],
      ['4', 'UPI apps: Google Pay, PhonePe, Paytm, BHIM'],
      ['Days left', 'on the home screen'],
      ['Live', 'arrival on the owner’s screen'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Check in from the home screen',
        body: 'Tap Check in, or the QR button beside it to show a code at the desk. The code refreshes itself every 100 seconds, so a screenshot from a friend does not get anyone in. The check-in starts your session, your streak and this week’s visit count.',
        alt: 'Home screen: Ready to train with Check in and Show QR, day streak 0 and visits this week',
      },
      {
        title: 'See your membership without asking',
        body: 'The profile shows the plan, when it ends and the amount to renew. No message to the desk, no “bhaiya kitna baaki hai”. Clips, buddies, alerts and the privacy centre live on the same screen.',
        alt: 'Profile: membership Test plan monthly, ends Nov 21 2026, Renew for ₹1,000, tiles for Connect and My clips',
      },
      {
        title: 'Pay with UPI, in the app',
        body: 'Tap Renew, pick Google Pay, PhonePe, Paytm or BHIM, and pay. The reference lands in the gym’s dues ledger, so there is no screenshot to forward and no “did you get it?”. Reminders only reach you if you turned them on in the privacy centre.',
        alt: 'Profile in light mode with the membership card and Renew button',
      },
      {
        title: 'The gym sees it the same second',
        body: 'Your arrival shows on the owner’s overview with the time and how you checked in. If anything is overdue it is flagged on your name for the front desk, and nobody else; members never see each other’s dues.',
        alt: 'Owner overview: arrivals today, overdue ₹2,000, collected ₹9,000, daily visits and a live arrivals list showing Aarav 9:37 PM via App',
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
    limits: [
      'UPI payments run in demo mode today; no provider is charged.',
      'Face check-in stays in shadow mode until calibrated with consenting members.',
    ],
    faq: [
      { q: 'Is there a face check-in? Is it safe?', a: 'Optional, on a small device at the entrance, never in the cloud. Encrypted templates, a liveness check, and you confirm each check-in on your phone.' },
      { q: 'Can I pay from the app?', a: 'Yes, with UPI. The payment reference is matched in the owner’s dues ledger.' },
      { q: 'What if I forget my phone?', a: 'The front desk can check you in by name.' },
    ],
  },
  'owners': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Gym owners',
    /** <title> and JSON-LD name. */
    title: 'Gym management app: dues, attendance, staff and insights',
    /** Meta description. */
    description:
      'Every screen of the SpotAI gym console: arrivals, dues, members, plans, staff roles, insights, complaints, front desk, trainer tip review and moderation.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Chasing dues on WhatsApp?',
    fix: 'Who came, who owes, when it is busy. One console for you, your trainer and the desk.',
    lead:
      'Most gym software in India is a register with a login. SpotAI gives you a live picture of the floor on your laptop or phone, gives your trainer and front desk their own screens in the same console, and gives members a reason to keep coming, which is what keeps dues paid.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'SpotAI gym console overview: arrivals today 8, active members 8, overdue ₹3,000, collected this month, daily visits for 14 days, busy hours, members owing and in the gym today, live arrivals',
    /** Number, label. */
    facts: [
      ['3', 'roles in one sign-in: owner, trainer, front desk'],
      ['14 days', 'of daily visits; 4 weeks of busy hours'],
      ['< 5', 'members: insight hidden, nobody picked out'],
      ['Live', 'arrivals with dues on the name'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Today at a glance',
        body: 'Arrivals today, active members, what is overdue and what you collected this month against last, each one a link to its page. Daily visits for the last 14 days, a busy-hours strip for the last four weeks with the busiest hour named, and a list of members who walked in today still owing, with the amount and days late. The arrivals feed on the right updates live with how each member checked in.',
        alt: 'Overview: four KPI cards, daily visits bar chart, busy hours strip, owing-and-in-the-gym list, live arrivals feed',
      },
      {
        title: 'Check a member in from anywhere',
        body: 'One button on the overview opens a search box. Type a few letters, tap Check in, and the arrival appears in the feed and on the front desk the same second. Useful when the desk is busy or when you are checking someone in from your phone.',
        alt: 'Check in a member dialog over the overview with a search box and matching members Aarav and Arjun each with a Check in button',
      },
      {
        title: 'Dues in one list',
        body: 'Every overdue member with the amount, how many days late and their last visit. Send reminder is enabled only for members who allowed reminders in their privacy centre, and it respects your quiet hours. UPI payments made in the member app land here with a reference. Only owners and managers see this page; members never see each other’s dues.',
        alt: 'Dues: Sana ₹1,000 25 days overdue, Rohan ₹1,000 10 days with reminder queued, Kabir ₹1,000 2 days, each with last visit and Send reminder',
      },
      {
        title: 'Members: plan, status, how often they come',
        body: 'Every member with their plan, when it ends, a status pill (active, ending soon, overdue), visits in the last 30 days as a bar, and their last visit. Members under 18 are marked so camera and community features stay off for them. Search by name.',
        alt: 'Members table: name, plan, ends date with status pill, visits in 30 days bar, last visit, search box',
      },
      {
        title: 'Plans at your prices',
        body: 'Add a plan with a name, price in rupees and number of days. Stop selling a plan and existing members keep it until it ends; sell it again any time. A price change applies to new purchases only. The table shows how many members are on each plan right now.',
        alt: 'Plans: add-plan form with name, price and days; table with Test plan monthly ₹1,000 30 days 8 members and Stop selling; retired plans folded away',
      },
      {
        title: 'Staff accounts with roles',
        body: 'Add a trainer, front-desk or manager account by name and email. The temporary password is shown once, then they sign in with the gym code, their email and a six-digit code. Remove access with one click.',
        alt: 'Staff: add-staff form with name, email and role; list of Test Owner, Test Trainer and Test Front Desk with Remove buttons',
      },
      {
        title: 'Insights you can act on',
        body: 'Last 30 days: what share of members visited, how many came back from the month before, visits per week per visiting member, how many use the AI coach, how many are in Connect, payments received. Visits by weekday for the last four weeks and the most common form issues. Any figure built from fewer than five members is hidden so nobody can be picked out.',
        alt: 'Insights: members who visited 91%, came back 100%, visits per week 2.8, using the AI coach 36%, in Connect 55%, payments 7, visits by weekday chart, most common form issue Depth',
      },
      {
        title: 'Complaints with a reference number',
        body: 'Members file from the privacy centre and get a reference. Open complaints come first, each with its category, the member, the date and a reply box; reply and the member sees your answer in the app and the complaint closes. Required under India’s DPDP rules, and good manners.',
        alt: 'Complaints: open complaints as cards with Open pill, reference number, category, member and date, the complaint text and a reply box; answered complaints folded below',
      },
      {
        title: 'Front desk: check-in by QR or by name',
        body: 'The desk account sees one screen. Scan the member’s QR with the laptop camera or search by name and tap Check in. Arrivals today list on the right with a check-out button. Dues show on the name so the desk can ask; nothing else about the member is shown.',
        alt: 'Front desk: scan member QR panel with search by name and a list of members with Check in buttons; arrivals today with times and check-out',
      },
      {
        title: 'Trainer: review every AI tip before members see it',
        body: 'Each flagged set waits in the queue with the member, the exercise, the flag and the rep-by-rep numbers for depth, knees and chest. The suggested tip is a template you can edit; approve it or reject it with a reason. Above the queue: how many members said a tip was wrong in the last 30 days, per flag, so you can retire the ones that miss.',
        alt: 'Review queue: 14 waiting, list of flagged sets, Sana forward lean with per-rep depth knees and chest values, suggested tip text box, Reject and Approve',
      },
      {
        title: 'Decided tips, kept',
        body: 'Everything approved, edited or rejected, with who decided and what the member was sent. Open any one to see the set it came from.',
        alt: 'Decided tips: list of sets marked Approved, Edited and approved or Rejected, with the selected one showing the tip sent to the member and who decided',
      },
      {
        title: 'Moderation for Connect',
        body: 'Reports from members about other members, with the reporter never shown: no action, warn, or remove from Connect. Messages held for sharing contact details, which you release or remove. Helper applications from members who want to be matched first.',
        alt: 'Moderation: a spam report about Kabir with No action, Warned and Remove from Connect; a held message with a phone number with Release and Remove; helper applications',
      },
      {
        title: 'Groups your trainer runs',
        body: 'Small trainer-led groups of three to six with a title, a start time and a level. Members join from the app; extra people go on a waitlist. The groups you create are listed beside the form.',
        alt: 'Groups: new group form with title, description, capacity, start time and level; created groups listed beside it',
      },
      {
        title: 'Entrance devices, your call',
        body: 'Face check-in runs on a small device at the door. Add one here and its key is shown once. The list shows when each device was last seen and its last consent snapshot. It stays in shadow mode until calibrated with consenting members, and you can revoke a device any time.',
        alt: 'Entrance devices: add-device field, table of devices with last seen, last consent snapshot, cameras and Revoke',
      },
      {
        title: 'Settings that fit your gym',
        body: 'Time zone, quiet hours so reminders written at night wait until morning, the email that receives complaints, and how many hours after check-in a visit ends on its own.',
        alt: 'Settings: time zone Asia/Kolkata, quiet hours 21:00 to 08:00, grievance contact email, end a visit automatically after 6 hours, Save settings',
      },
      {
        title: 'One sign-in, three roles',
        body: 'Gym code, email, password and a six-digit code. Owners and managers see everything; trainers land on the review queue; the front desk lands on check-in and sees nothing else. Dark or light, your choice.',
        alt: 'Gym console sign-in: left panel with the retention line and preview tiles for arrivals, overdue, collected and busy hours; right panel with gym code, email and password',
      },
    ],
    details: [
      { title: 'Members need no app to start', body: 'The desk checks members in by QR or by name and tracks dues without anyone installing anything. Members install the app when they want the coach, the leaderboard, buddies or in-app payments.' },
      { title: 'Reminders respect consent', body: 'A reminder only goes to a member who turned reminders on, and never during your quiet hours.' },
      { title: 'Nothing leaks between gyms', body: 'Every table is scoped to your gym with PostgreSQL row-level security. The API opens each request inside your gym, so another gym can never read your members, even by mistake.' },
      { title: 'Staff see only what they need', body: 'Trainers see sets, tips and the community. The desk sees who is in and who owes. Only owners and managers see money.' },
      { title: 'Week-long offline demo', body: 'Trial the member app with no server: the whole API answers from the phone, data stays saved, and it behaves over real days.' },
      { title: 'Works on what you have', body: 'A laptop or phone with internet for the console. Any Android phone for members. The face device is optional and comes later.' },
    ],
    limits: [
      'Dues reminders go to a WhatsApp stub in the pilot; nothing is sent until your gym goes live.',
      'UPI payments run in demo mode in the pilot; nothing is charged.',
      'Pilot gyms are onboarded by us today; self-serve sign-up comes later.',
    ],
    faq: [
      { q: 'What do gym owners get?', a: 'Live arrivals with dues flagged, who stopped coming, dues with reminders, members, plans, staff roles, insights, complaints with reference numbers, a front-desk console and a trainer console, all in one sign-in.' },
      { q: 'How do we start?', a: 'Write to us on WhatsApp. We set up your gym, plans and staff, load your register, and run a free pilot with your members.' },
      { q: 'Do my members need the app?', a: 'For check-in by name and dues, no. For the AI coach, leaderboard, buddies and paying in the app, yes.' },
      { q: 'Does it replace my trainer?', a: 'No. Every tip the AI coach gives is a template your trainer approved in the review queue, and trainers see which tips members marked wrong.' },
    ],
  },
  'privacy': {
    /** Short name in the menu, cards and breadcrumb. */
    nav: 'Privacy',
    /** <title> and JSON-LD name. */
    title: 'Private by design: consent per purpose, on-device AI',
    /** Meta description. */
    description:
      'Gym app privacy built for India’s DPDP Act: six separate consents, on-device pose tracking, export or delete from the app, complaints with a reference.',
    /** Page heading: the problem in the member's or owner's words. */
    problem: 'Worried where your camera footage goes?',
    fix: 'Nowhere. It stays on your phone, and every other use of your data is a switch you flip.',
    lead:
      'A gym app sees your camera, your attendance and sometimes your face. SpotAI treats each as a separate decision with the notice version recorded, the way the DPDP Act expects, not a wall of text you tap through once.',
    /** Alt text of the hero screenshot. */
    heroAlt: 'Profile screen with the Privacy tab, membership card, Connect and My clips tiles',
    /** Number, label. */
    facts: [
      ['6', 'separate consents'],
      ['On device', 'pose tracking'],
      ['1 tap', 'to export or delete'],
      ['DPDP', 'shaped, not retrofitted'],
    ],
    /** "How it works", one entry per screenshot in src/features.ts. */
    steps: [
      {
        title: 'Camera coaching stays on the phone',
        body: 'Pose runs on the device with MediaPipe. The server only ever receives a rep count and per-rep flags. There is no video to store, leak or subpoena. “Runs on your phone” is printed on the coach screen because it is the whole point.',
        alt: 'AI coach screen with the Runs on your phone label over the preview',
      },
      {
        title: 'Clips, face, buddies, chat, reminders: one switch each',
        body: 'Saving clips is off by default. Face check-in is off until you turn it on. Buddy matching, chat and dues reminders are separate opt-ins, each stored with the notice version, method and time, so there is a record of exactly what you agreed to and when.',
        alt: 'Connect screen in light mode, which only appears after the matching consent is on',
      },
      {
        title: 'Export or delete, from the app',
        body: 'The privacy centre on your profile has Export my data, which gives you a JSON of everything SpotAI holds, and Delete my account, which removes it including clips. No email to support, no waiting.',
        alt: 'Profile with the Privacy tab where export and delete live',
      },
      {
        title: 'Complaints get a reference the gym must answer',
        body: 'File a complaint from the app and you get a number. The gym sees it in the owner console and has to respond. Camera features and the community are for adults only; the app checks age at sign-up.',
        alt: 'Welcome screen: Train smarter, get stronger, Continue with email',
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
    limits: [
      'SpotAI is built around the DPDP Act’s shape; your gym remains the data fiduciary for its members.',
    ],
    faq: [
      { q: 'Is SpotAI compliant with India’s data protection rules?', a: 'It is built around consent per purpose as the DPDP Act expects, with export, deletion and complaints with reference numbers in the app.' },
      { q: 'Can I turn the camera off entirely?', a: 'Yes. Leave camera coaching off and the app never opens the camera.' },
      { q: 'Does the gym see my clips?', a: 'Only clips you choose to share. Saved clips are private to you by default.' },
    ],
  },
};

export default en;
