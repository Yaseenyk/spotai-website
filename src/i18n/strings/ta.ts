// தமிழ் site copy. Same shape as en.ts; see the conventions there.
import { SITE } from '../../site';
import type { DeepPartial, Strings } from './index';

const { pilot, demo } = SITE;

interface Food {
  grams: number;
  kcal: number;
  protein: number;
  carbs: number;
}

export default {
  site: {
    tagline: 'இந்திய ஜிம்களுக்கான AI ஜிம் நண்பன்',
    description:
      'இந்தியாவுக்கான AI ஜிம் ஆப்: போனிலேயே squat form check, இன்றைய workout, ஜிம் leaderboard. யார் வந்தார், யார் பாக்கி என்று உரிமையாளர் பார்க்கலாம். இந்தியா முழுவதும் ஜிம்களுக்கு இலவச pilot.',
  },

  common: {
    skip: 'உள்ளடக்கத்துக்குச் செல்லவும்',
    waPilot: 'வணக்கம் SpotAI, என் ஜிம்முக்கான இலவச pilot பற்றி தெரிந்துகொள்ள வேண்டும்.',
    language: 'மொழி',
    waLabel: 'WhatsApp-ல் பேசுங்கள்',
    waShort: 'WhatsApp',
    dlLabel: 'SpotAI டெமோ ஆப்பை டவுன்லோடு செய்யுங்கள்',
    dlShort: 'ஆப் டவுன்லோடு',
    ogImageAlt: 'SpotAI: உங்கள் AI ஜிம் நண்பன், member ஆப் மற்றும் உரிமையாளர் dashboard உடன்',
    breadcrumb: 'Breadcrumb',
    inApp: 'SpotAI ஆப்பில்',
    seeFeature: 'முழு அம்சத்தையும் பாருங்கள்',
    chatWhatsApp: 'WhatsApp-ல் பேசுங்கள்',
    waOwnerPilot: 'வணக்கம் SpotAI, நான் ஒரு ஜிம் நடத்துகிறேன், இலவச pilot வேண்டும். என் ஜிம்மும் நகரமும்: ',
    waAskOwner: (url: string) => `அண்ணா, நம்ம ஜிம்முக்கு SpotAI கொண்டு வரலாமா? இந்தியாவில் எங்கிருக்கும் ஜிம்களுக்கும் ${pilot.days} நாள் இலவச pilot இருக்கு: ${url}`,
    on: 'ஆன்',
    off: 'ஆஃப்',
  },

  faq: [
    {
      q: 'SpotAI என்றால் என்ன?',
      a: 'SpotAI இரண்டு பக்கங்கள் கொண்ட ஒரு ஜிம் ஆப். Members-க்கு: போன் கேமராவில் squat-ஐ சரிபார்க்கும் AI coach, இன்றைய workout, ஜிம் leaderboard மற்றும் buddies. ஜிம் உரிமையாளர்களுக்கு: யார் வருகிறார்கள் என்று live-ஆக, யார் வருவதை நிறுத்தினார்கள், கட்டண பாக்கி, கூட்டமான நேரங்கள் காட்டும் console, கூடவே front-desk console மற்றும் trainer console.',
    },
    {
      q: 'SpotAI-க்கு எவ்வளவு செலவாகும்?',
      a: 'இந்தியாவில் எங்கிருந்தாலும் முதல் 10 ஜிம்களுக்கு 90 நாள் இலவச pilot, video call மற்றும் WhatsApp வழியாக அமைத்துத் தருவோம். Pilot-க்குப் பிறகான விலை முதலில் pilot ஜிம்களுக்கு அறிவிக்கப்படும். ஒவ்வொரு member-க்கும் தனிக் கட்டணம் வைக்கும் திட்டம் இல்லை.',
    },
    {
      q: 'என் members ஆப் install செய்ய வேண்டுமா?',
      a: 'இல்லை. Front desk QR மூலமோ பெயர் மூலமோ members-ஐ check-in செய்து, யாரும் எதையும் install செய்யாமலே கட்டண பாக்கியைக் கண்காணிக்கும். AI coach, leaderboard, buddies அல்லது ஆப்பிலேயே பணம் செலுத்த விரும்பும் members, தயாரானபோது ஆப்பை install செய்யலாம்.',
    },
    {
      q: 'ஜிம்மில் எனக்கு என்ன தேவை?',
      a: 'Console-க்கு இணைய வசதியுள்ள ஒரு laptop அல்லது போன், ஆப் வேண்டும் members-க்கு ஒரு Android போன். Face check-in சாதனம் விருப்பத்துக்குரியது, பின்னர் வரும். Member ஆப்பில் workout பதிவு offline-ல் வேலை செய்து, பிறகு sync ஆகும்.',
    },
    {
      q: 'SpotAI தமிழ், இந்தி மற்றும் பிற இந்திய மொழிகளில் உள்ளதா?',
      a: 'ஆம். Member ஆப் 7 மொழிகளில் உள்ளது: English, இந்தி, தெலுங்கு, தமிழ், கன்னடம், மராத்தி, வங்காளம். முதல் திரையிலேயே உங்கள் மொழியைத் தேர்ந்தெடுக்கலாம், அல்லது எந்தத் திரையிலும் மேலே உள்ள globe-ஐத் தட்டலாம்; முழு ஆப்பும் ஒரே நேரத்தில் மாறி, உங்கள் தேர்வை நினைவில் வைக்கும். உங்கள் போனின் மொழி இந்த ஏழில் ஒன்றாக இருந்தால், ஆப் அந்த மொழியிலேயே திறக்கும். AI coach-இன் form tips இப்போது English-ல் மட்டும்; இந்தி மற்றும் வங்காள பதிப்புகள் தாய்மொழி பேசுபவரின் சரிபார்ப்புக்காகக் காத்திருக்கின்றன.',
    },
    {
      q: 'SpotAI-ஐ எப்போது download செய்யலாம்?',
      a: 'முழு member ஆப்பை இன்றே முயற்சிக்கலாம்: Android-க்கு download செய்யுங்கள், iPhone-ல் install செய்யுங்கள், அல்லது Safari-ல் திறங்கள். இந்தியா முழுவதும் ஜிம்கள் pilot-ல் இணைந்து வருகின்றன; waitlist-ல் சேருங்கள் அல்லது உங்கள் ஜிம்மிடம் இதை ஆன் செய்யச் சொல்லுங்கள்.',
    },
    {
      q: 'AI coach எந்தப் பயிற்சிகளைச் சரிபார்க்கும்?',
      a: 'இப்போது squats மட்டும்: ஒவ்வொரு rep-லும் knee valgus (முழங்கால் உள்ளே மடங்குவது), குறைவான depth, முன்னோக்கி அதிகம் சாய்வது. Deadlift மற்றும் bench press அடுத்ததாக வரும். ஒவ்வொரு பயிற்சிக்கும் ஏற்கனவே செய்முறை விளக்கமும் ஒரு சிறிய வீடியோவும் உள்ளன.',
    },
    {
      q: 'Data யாருக்குச் சொந்தம்?',
      a: 'உங்கள் ஜிம்மின் member பட்டியல் ஜிம்முக்குச் சொந்தம். Members தங்கள் சொந்த data-வுக்கு உரிமையாளர்கள், அதை ஆப்பிலிருந்தே export அல்லது delete செய்யலாம். கேமரா வீடியோ போனை விட்டு வெளியே போவதே இல்லை.',
    },
  ],

  nav: {
    home: 'SpotAI முகப்பு',
    primary: 'முதன்மை',
    mobile: 'மொபைல்',
    features: 'அம்சங்கள்',
    forMembers: 'Members-க்கு',
    forOwners: 'ஜிம் உரிமையாளர்களுக்கு',
    owners: 'ஜிம் உரிமையாளர்கள்',
    pricing: 'விலை',
    guides: 'வழிகாட்டிகள்',
    faq: 'கேள்விகள்',
    cta: 'ஜிம்களுக்கு இலவச pilot',
    openMenu: 'மெனுவைத் திற',
  },

  footer: {
    home: 'SpotAI முகப்பு',
    featuresLabel: 'அம்சங்கள்',
    navLabel: 'Footer',
    languagesLabel: 'மொழிகள்',
    allFeatures: 'அனைத்து அம்சங்கள்',
    forOwners: 'ஜிம் உரிமையாளர்களுக்கு',
    pricing: 'விலை',
    guides: 'வழிகாட்டிகள்',
    faq: 'கேள்விகள்',
    getApp: 'ஆப்பைப் பெறுங்கள்',
    madeBy: (name: string) => `உருவாக்கியவர் ${name}`,
    legal: 'SpotAI · ஹைதராபாத், இந்தியா · இது மருத்துவ ஆலோசனை அல்ல. தகுதியான coach-உடன் பயிற்சி செய்யுங்கள்.',
  },

  home: {
    title: 'SpotAI: AI ஜிம் ட்ரெய்னர் ஆப், ஜிம் மேனேஜ்மென்ட் software',
  },

  hero: {
    title: 'Spotter இல்லை. திட்டம் இல்லை. கட்டணம் WhatsApp-ல்.',
    sub: 'மூன்றையும் SpotAI சரி செய்கிறது.',
    lead: 'இந்திய ஜிம்களுக்கான AI ஜிம் ஆப்: போன் கேமராவில் form check, இன்றைய திட்டம், உங்கள் ஜிம் leaderboard, UPI-ல் கட்டணம்.',
    ctaApk: 'Android demo-வை download செய்யுங்கள்',
    ctaOwner: 'ஜிம் உரிமையாளரா? இலவச pilot',
    kicker: 'இந்தியாவுக்கான AI ஜிம் ட்ரெய்னர் ஆப், ஜிம் மேனேஜ்மென்ட் software',
    owner: `ஜிம் உரிமையாளர்களே: யார் வந்தார், யார் வருவதை நிறுத்தினார், யார் பாக்கி என்று பாருங்கள். இந்தியாவில் எங்கும் ${pilot.days} நாள் இலவச pilot.`,
    note: `Android ${demo.android}+, ${demo.size}, offline-ல் வேலை செய்யும். iPhone-ல் <a href="/${demo.web}">web demo-வைத் திறங்கள்</a>.`,
    repsLabel: 'இந்த set-ல் reps',
    cue: 'முழங்கால்களை கால் விரல்களுக்கு மேல் வெளியே தள்ளுங்கள்',
    tabsLabel: 'Demo-வில் உள்ள பயிற்சிகள்',
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
    title: 'திட்டமே இல்லாமல் ஜிம்முக்குள் நுழைகிறீர்களா? இனி இல்லை.',
    lead: 'போனில் check-in செய்யுங்கள். SpotAI இன்றைய workout-ஐத் தந்து, ஒவ்வொரு set-ஐயும் பதிவு செய்யும், English, இந்தி, தெலுங்கு, தமிழ், கன்னடம், மராத்தி அல்லது வங்காளத்தில்.',
    steps: [
      {
        problem: 'இன்று என்ன பயிற்சி செய்வது என்று தெரியவில்லை',
        fix: 'Check-in செய்தால், கடந்த வாரத்தைப் பார்த்து இன்றைய session-ஐ ஆப் தேர்ந்தெடுக்கும்: அதிகம் ஓய்வு பெற்ற தசைக் குழு, அல்லது cardio, cycling, mobility.',
        alt: 'Session தேர்வு: இன்று என்ன பயிற்சி? காரணத்துடன் Strength பரிந்துரைக்கப்பட்டுள்ளது, அடுத்து Cardio, Cycling, Mobility',
      },
      {
        problem: 'ஒவ்வொரு முறையும் அதே மூன்று பயிற்சிகள்',
        fix: 'வேண்டியவற்றை tick செய்யுங்கள். ஒவ்வொரு பயிற்சியும் இந்த வாரம் எத்தனை முறை செய்தீர்கள் என்று காட்டும், அதனால் விடுபட்டவை உடனே தெரியும்.',
        alt: 'Back and biceps-க்கான பயிற்சிப் பட்டியல்: Lat pulldown, Dumbbell row, Biceps curl, Hammer curl, ஒவ்வொன்றும் இந்த வாரம் எத்தனை முறை செய்யப்பட்டது என்று',
      },
      {
        problem: 'Sets எழுதி வைக்கப்படுவதே இல்லை',
        fix: 'ஒவ்வொரு set-க்கும் reps மற்றும் கிலோ, அசைவு மறந்தால் 30 வினாடி short, அல்லது set-ஐ கேமராவே எண்ணட்டும்.',
        alt: 'Lat pulldown workout திரை: செய்முறை, Watch short மற்றும் Record set பொத்தான்கள், பதிவு செய்ய reps, கிலோ sets',
      },
    ],
  },

  coach: {
    cam: {
      exercise: 'Squat',
      view: 'பக்கவாட்டுப் பார்வை',
      live: 'போனிலேயே',
      depth: 'குறைவான depth',
      valgus: 'Knee valgus',
      lean: 'முன்னோக்கிச் சாய்வு',
      good: 'நல்ல rep',
      repOf: '8 reps-ல்',
      tip: '“எழும்போது முழங்கால்களை கால் விரல்களுக்கு மேல் வெளியே தள்ளிப் பாருங்கள்.”',
      helpful: 'பயனுள்ளது',
      wrong: 'இது தவறு',
    },
    title: 'உங்கள் squat-ஐ யாரும் spot செய்யவில்லையா? AI coach போன் கேமராவில் உங்கள் form-ஐச் சரிபார்க்கும்.',
    lead: 'போனை rack-ல் சாய்த்து வைத்து ஒரு set செய்யுங்கள். Coach reps-ஐ எண்ணி, ஒவ்வொரு rep-ன் form-ஐயும் குறிக்கும், உங்கள் ஜிம் trainer அங்கீகரித்த ஒரு tip-ஐத் தரும்.',
    features: [
      { title: 'ஒவ்வொரு rep-ம் எண்ணப்படும்', body: 'போனை பக்கவாட்டில் அல்லது 45°-ல் வையுங்கள். Counter உடலின் landmarks-ஐ வைத்து ஓடும்; நீங்கள் தூக்குங்கள், ஆப் கணக்கு வைக்கும்.' },
      { title: 'ஒவ்வொரு rep-க்கும் மூன்று form checks', body: 'Knee valgus, குறைவான depth, முன்னோக்கிச் சாய்வு, ஒவ்வொரு rep-லும் குறிக்கப்படும். இப்போது squats மட்டும்; deadlift மற்றும் bench அடுத்து வரும்.' },
      { title: 'ஒரு set-க்கு ஒரு tip', body: 'உங்கள் ஜிம் trainer அங்கீகரித்த templates-லிருந்து தேர்வு செய்யப்படும், இப்போது English-ல் மட்டும். அந்த நேரத்தில் எதுவும் கற்பனையாக உருவாக்கப்படுவதில்லை.' },
      { title: 'வீடியோ போனை விட்டு வெளியே போகாது', body: 'Pose tracking போனிலேயே MediaPipe மூலம் ஓடும். Rep எண்ணிக்கையும் flags-ம் மட்டுமே server-க்குப் போகும், ஒரு frame கூடப் போகாது.' },
      { title: 'தவறான tip-ஐக் குறியுங்கள்', body: '“இது தவறு” என்று தட்டுங்கள்; ஒவ்வொரு template-ம் எத்தனை முறை தவறாக இருந்தது என்று trainers staff console-ல் பார்த்து, மோசமானவற்றை நீக்குவார்கள்.' },
      { title: 'Clips உங்கள் முடிவு', body: 'Clip-ஐ save செய்வது தனி ஒப்புதல், default-ஆக ஆஃப், எப்போது வேண்டுமானாலும் delete செய்யலாம். கேமரா அம்சங்கள் 18 வயதுக்கு மேற்பட்ட members-க்கு மட்டும்.' },
    ],
  },

  gains: {
    title: 'இரண்டாவது வாரத்துக்குப் பிறகு ஆர்வம் குறைகிறதா? உங்கள் ஜிம் உங்களைத் திரும்ப வர வைக்கும்.',
    lead: 'கிலோக்கள் கூடுகின்றன, streak தெரிகிறது, நீங்கள் வருவதை உங்கள் ஜிம் ஆட்கள் பார்க்கிறார்கள்.',
    cards: [
      {
        problem: 'கண்ணுக்குத் தெரியாத முன்னேற்றம்',
        fix: 'மொத்தம் தூக்கிய கிலோ, reps, workouts, personal bests, 1,000 kg முதல் 100,000 வரை badges.',
        alt: 'Gains திரை: மொத்தம் தூக்கிய கிலோ, reps, workouts, personal bests, milestone badges',
      },
      {
        problem: 'நீங்கள் வந்ததை யாரும் கவனிப்பதில்லை',
        fix: 'மூன்று ஜிம் boards: இந்த வாரத்தின் visits, கிலோ, streak. உங்கள் முதல் பெயருடன் சேருங்கள். எப்போது வேண்டுமானாலும் விலகலாம், உங்கள் எண்கள் மீண்டும் private ஆகும்.',
        alt: 'Visits, Kg lifted, Streak tabs கொண்ட ஜிம் leaderboard, Diya, Sana, Arjun உடன் podium, member-ன் சொந்த இடம் highlight செய்யப்பட்டுள்ளது',
      },
      {
        problem: 'தனியாகப் பயிற்சி',
        fix: 'காரணத்துடன் buddy பரிந்துரைகள்: ஒரே நேரத்தில் தொடங்கியவர், ஒரே நேரம், பொதுவான இலக்கு. Chat மற்றும் groups, ஒவ்வொன்றும் தனி ஒப்புதல், பெரியவர்களுக்கு மட்டும்.',
        alt: 'Buddies திரை: பரிந்துரைக்கப்பட்ட பயிற்சித் துணை, ஏன் பொருந்துகிறார், requests, chats, groups',
      },
    ],
  },

  owners: {
    for: 'ஜிம் உரிமையாளர்களுக்கு',
    title: 'இன்று யார் வந்தார் என்று பாருங்கள். யார் வருவதை நிறுத்தினார் என்று பாருங்கள். அவர்கள் கட்டணம் கட்டுவதை நிறுத்தும் முன்.',
    lead: 'இந்தியாவில் பெரும்பாலான ஜிம் software login உள்ள ஒரு register தான். SpotAI யார் வந்தார், யார் பாக்கி வைத்திருக்கிறார், floor எப்போது கூட்டமாக இருக்கிறது என்று காட்டுகிறது, members தொடர்ந்து வர ஒரு காரணமும் தருகிறது.',
    more: 'இந்தியா முழுவதும் ஜிம்களுக்கு இலவச pilot',
    console: 'உரிமையாளர் console, browser-ல்',
    problems: [
      {
        problem: 'WhatsApp-ல் கட்டணத்தைத் துரத்துவது',
        fix: 'பாக்கி வைத்துள்ள members ஒரே பட்டியலில், எத்தனை நாள் தாமதம் என்றுடன். Reminders ஒவ்வொரு member-ன் ஒப்புதலை மதிக்கும். Members ஆப்பிலேயே UPI-ல் செலுத்துவார்கள், reference உங்கள் ledger-ல் வந்து சேரும்.',
        alt: 'Dues திரை: Sana, Rohan தலா ₹1,000, தாமத நாட்கள், கடைசி வருகை, Send reminder பொத்தான்',
      },
      {
        problem: 'இன்று யார் வந்தார் என்று தெரியாது',
        fix: 'நடக்கும்போதே வருகைகள், பெயரிலேயே பாக்கி குறிக்கப்பட்டு; active members, இந்த வாரம் முடியும் memberships, இந்த மாத வசூல் கடந்த மாதத்துடன் ஒப்பிட்டு.',
        alt: 'உரிமையாளர் overview: இன்றைய வருகைகள், active members, ₹2,000 பாக்கி, ₹9,000 வசூல், தினசரி visits bar chart, கூட்ட நேரங்கள், live வருகைப் பட்டியல்',
      },
      {
        problem: 'கூட்ட நேரங்களை ஊகிப்பது',
        fix: 'நான்கு வாரங்களில் வார நாள் மற்றும் மணி வாரியாக visits, கடந்த மாதத்திலிருந்து யார் திரும்ப வந்தார், யார் coach-ஐப் பயன்படுத்துகிறார். ஐந்துக்கும் குறைவான members-லிருந்து வரும் எண்கள் மறைக்கப்படும்.',
        alt: 'Insights: visit செய்த members 82%, முந்தைய மாதத்திலிருந்து திரும்ப வந்தவர்கள் 100%, வாரத்துக்கு visits 3, AI coach பயன்படுத்தும் members 36%, வார நாள் வாரியான visits chart',
      },
    ],
    extras: [
      { title: 'Front desk console', body: 'QR அல்லது பெயர் மூலம் check-in. யார் உள்ளே இருக்கிறார், யார் பாக்கி என்பது மட்டுமே staff-க்குத் தெரியும், வேறு எதுவும் இல்லை.' },
      { title: 'Trainer console', body: 'AI coach-இன் tip templates-ஐ ஒவ்வொரு flag-ன் தவறு விகிதத்துடன் review செய்யுங்கள், helpers-ஐ ஆதரியுங்கள், community-ஐ நெறிப்படுத்துங்கள்.' },
      { title: 'Reference எண்ணுடன் புகார்கள்', body: 'Member ஆப்பிலிருந்து புகார் அளித்து ஒரு எண் பெறுவார், நீங்கள் அதை dashboard-ல் பார்ப்பீர்கள். இந்தியாவின் DPDP விதிகளின்படி இது அவசியம்.' },
      { title: 'Face check-in, உங்கள் முடிவு', body: 'Liveness check மற்றும் encrypted templates கொண்ட, விருப்பத்துக்குரிய நுழைவாயில் சாதனம்; cloud-ல் எதுவும் இல்லை. ஒப்புதல் தந்த members-உடன் calibrate ஆகும் வரை shadow mode-ல் இருக்கும்.' },
    ],
    cta: `இந்தியாவில் எங்காவது ஜிம் நடத்துகிறீர்களா? ${pilot.days} நாள் இலவச pilot, video call-லேயே setup; உங்கள் register-ஐ நாங்களே ஏற்றுவோம்.`,
  },

  privacy: {
    title: 'உங்கள் கேமரா footage எங்கே போகிறது என்று கவலையா? எங்கும் போவதில்லை.',
    lead: 'ஒரு ஜிம் ஆப் உங்கள் கேமரா, வருகை, சில நேரம் உங்கள் முகத்தையும் பார்க்கிறது. ஒவ்வொன்றும் நீங்கள் எடுக்கும் தனி முடிவு, ஒருமுறை தட்டிக் கடந்துபோகும் நீண்ட உரை அல்ல.',
    points: [
      { title: 'Frames போனை விட்டு வெளியேறாது', body: 'Pose tracking சாதனத்திலேயே ஓடும். Server-க்கு rep எண்ணிக்கையும் flags-ம் மட்டுமே கிடைக்கும்.' },
      { title: 'ஒவ்வொரு நோக்கத்துக்கும் ஒரு switch', body: 'கேமரா, clips, முகம், matching, chat, reminders எல்லாம் தனித்தனி opt-ins, ஒவ்வொன்றுக்கும் notice பதிப்பு பதிவு செய்யப்படும்.' },
      { title: 'ஆப்பிலிருந்தே export அல்லது delete', body: 'உங்களிடம் உள்ள அனைத்தின் JSON, அல்லது முழுக் கணக்கையும் நீக்குதல். Support-க்கு email தேவையில்லை.' },
      { title: 'புகாருக்கு reference எண்', body: 'ஆப்பிலிருந்து புகார் அளித்து எண் பெறுங்கள், ஜிம் பதில் சொல்ல வேண்டும். இந்தியாவின் DPDP Act எதிர்பார்ப்பது போல.' },
      { title: 'Language models ஒரு வாசலுக்குப் பின்னால்', body: 'எந்த model அழைப்பும் முதலில் அடையாளத்தை நீக்கி, ஒப்புதலைச் சரிபார்க்கும் gateway வழியாகவே போகும், template fallback உடன்.' },
      { title: 'பெரியவர்களுக்கு மட்டும்', body: '18 வயதுக்குக் குறைவான members-க்கு கேமரா அம்சங்களும் community-யும் ஆஃப் ஆகும்.' },
    ],
    centreLabel: 'ஆப்பில் உள்ள privacy centre',
    centreTitle: 'Privacy centre',
    consents: {
      camera: 'கேமரா coaching',
      clips: 'என் clips-ஐ save செய்',
      face: 'Face check-in',
      matching: 'Buddy matching',
      chat: 'Chat',
      reminders: 'கட்டண reminders',
    },
    exportData: 'என் data-வை export செய்',
    deleteAccount: 'என் கணக்கை delete செய்',
  },

  faqSection: {
    title: 'ஜிம் members, உரிமையாளர்கள் முதலில் கேட்கும் கேள்விகள்',
    lead: 'நேரடியான பதில்கள். உங்கள் கேள்வி இங்கே இல்லையென்றால் எங்களுக்கு எழுதுங்கள்.',
  },

  download: {
    title: 'உங்கள் ஜிம்மில் SpotAI-ஐப் பெறுங்கள்',
    lead: `Android demo-வை இன்றே முயற்சியுங்கள். இந்தியாவில் எங்கிருக்கும் ஜிம் உரிமையாளர்களுக்கும் இலவச pilot. நீங்கள் யார் என்று சொல்லுங்கள், WhatsApp-ல் பதில் தருவோம்.`,
    demo: {
      title: 'Demo-வை இப்போதே முயற்சியுங்கள்',
      body: '7 மொழிகளில் முழு member ஆப், உங்கள் போனில் offline-ல் ஓடும். நீங்கள் பதிவு செய்வது எதுவும் போனை விட்டு வெளியேறாது.',
      android: 'Android-க்கு download செய்யுங்கள்',
      iphone: 'iPhone-ல் திறங்கள்',
      steps: [
        'Download செய்த <code>spotai-demo.apk</code>-ஐத் திறங்கள். Android கேட்டால், உங்கள் browser-லிருந்து install செய்ய அனுமதியுங்கள்.',
        '<strong>Sign up</strong>-ஐத் தட்டி, உங்கள் பெயர், email, password-ஐ உள்ளிட்டு, privacy notice-ஐ tick செய்யுங்கள். உங்கள் கணக்கு உடனே தயார்; demo-வில் email code இல்லை.',
        'Check-in செய்து, ஒரு session-ஐத் தேர்ந்தெடுத்து, sets-ஐப் பதிவு செய்யுங்கள். நீங்கள் save செய்வது அனைத்தும் உங்கள் போனிலேயே இருக்கும், ஆப்பை மீண்டும் திறக்கும்போதும் அப்படியே இருக்கும்.',
        'ஜிம் நடத்துகிறீர்களா? Sign-in திரையில் <strong>Work at this gym? Staff console</strong>-ஐத் தட்டி, <strong>Owner</strong>, <strong>Trainer</strong> அல்லது <strong>Desk</strong>-ஐத் தேர்ந்தெடுத்து ஒரு மாதிரி ஜிம்மில் gym console-ஐ முயற்சி செய்யுங்கள்.',
      ],
      meta: `Version ${demo.version} · Android ${demo.android} அல்லது புதியது · ${demo.size} · SpotAI கையொப்பமிட்டது · சும்மா பார்க்கிறீர்களா? <code>${demo.logins[0]}</code> ஆக sign in செய்யுங்கள், password <code>${demo.password}</code>`,
      iosTitle: 'iPhone-ல்',
      iosGuide: 'iPhone-க்கான படிப்படியான வழிகாட்டி',
      ios: [
        `<strong>விரைவான வழி:</strong> <strong>Safari</strong>-ல் <a href="/${demo.web}">spotai.streamerosai.com/${demo.web}</a>-ஐத் திறந்து, <strong>Share</strong>, பிறகு <strong>Add to Home Screen</strong> தட்டுங்கள். இது முழுத் திரையில் திறக்கும், உங்கள் data போனிலேயே இருக்கும்.`,
        `<strong>Native iOS ஆப்:</strong> <a href="/${demo.ipa}" download>iOS build-ஐ download செய்யுங்கள்</a> (${demo.ipaSize}, iOS ${demo.ios} அல்லது புதியது), உங்கள் Apple ID-யுடன் <a href="https://sideloadly.io/" target="_blank" rel="noopener">Sideloadly</a> அல்லது AltStore மூலம் கணினியிலிருந்து install செய்யுங்கள். இலவச Apple ID-யில் install 7 நாட்கள் நீடிக்கும், பிறகு மீண்டும் install செய்ய வேண்டும். App Store மற்றும் TestFlight launch-ன் போது வரும்.`,
      ],
    },
    owner: {
      title: 'நான் ஜிம் உரிமையாளர்',
      body: `இந்தியாவில் எங்கிருந்தாலும், முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாள் இலவச pilot. உங்கள் register-ஐ அனுப்புங்கள், நாங்களே ஏற்றுவோம்.`,
      cta: 'WhatsApp-ல் பேசுங்கள்',
    },
    member: {
      title: 'நான் ஜிம்மில் பயிற்சி செய்கிறேன்',
      body: 'இதை ஆன் செய்யச் சொல்லி உங்கள் ஜிம் உரிமையாளரிடம் கேளுங்கள். ஒரே தட்டில் pilot link அவருக்குப் போகும்.',
      cta: 'என் ஜிம் உரிமையாளருக்கு அனுப்பு',
    },
    form: {
      label: 'Waitlist-ல் சேருங்கள்',
      subject: 'SpotAI waitlist',
      name: 'உங்கள் பெயர்',
      whatsapp: 'WhatsApp எண்',
      who: 'நான் ஒரு',
      whoOptions: { member: 'ஜிம் member', owner: 'ஜிம் உரிமையாளர்', trainer: 'Trainer' },
      gym: 'ஜிம் பெயர், நகரம்',
      gymPlaceholder: 'உதா. Iron Temple, கோவை',
      submit: 'Waitlist-ல் சேருங்கள்',
      noteForm: 'ஒரு நாளுக்குள் WhatsApp-ல் பதில் தருவோம்.',
      sending: 'அனுப்புகிறோம்…',
      sent: 'நன்றி, எங்களுக்குக் கிடைத்தது. ஒரு நாளுக்குள் WhatsApp-ல் பதில் தருவோம்.',
      error: 'அனுப்ப முடியவில்லை. மீண்டும் முயலுங்கள், அல்லது WhatsApp-ல் மெசேஜ் செய்யுங்கள்.',
      orWrite: 'அல்லது எழுதுங்கள்:',
    },
    welcomeAlt: 'SpotAI welcome திரை: kettlebell, dumbbell, shaker, Train smarter get stronger என்ற வரி, Continue with email',
    homeAlt: 'Light mode-ல் SpotAI முகப்புத் திரை: Ready to train, Check in பொத்தான், day streak, இந்த வார visits',
  },

  pricing: {
    title: 'ஜிம் மேனேஜ்மென்ட் software விலை இந்தியாவில்',
    description: `இந்தியாவின் முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாட்கள் SpotAI இலவசம், தொலைவிலிருந்தே அமைத்துத் தருவோம். Members-க்கும் இலவசம். ஒவ்வொரு member-க்கும் தனிக் கட்டணம் வைக்கும் திட்டம் இல்லை.`,
    crumb: 'விலை',
    h1: 'விலை',
    lead: 'Pilot காலத்தில் எதுவும் செலுத்த வேண்டியதில்லை. அதன் பிறகான விலை முதலில் pilot ஜிம்களுக்கு அறிவிக்கப்படும்.',
    gym: {
      for: 'ஜிம் உரிமையாளர்கள்',
      price: '₹0',
      per: `${pilot.days} நாட்களுக்கு`,
      sub: `முதல் ${pilot.gyms} ஜிம்கள், இந்தியாவில் எங்கும்`,
      items: [
        'உரிமையாளர் console, front-desk console, trainer console',
        'உங்கள் register அல்லது Excel-ஐ தொலைவிலிருந்தே நாங்களே ஏற்றுவோம்',
        'Desk-க்கு QR poster, floor-க்கு ஆப் poster',
        'WhatsApp support, வாரம் ஏழு நாட்களும்',
        'உங்கள் member பட்டியல் உங்களுடையதாகவே இருக்கும்',
        'Pilot-க்குப் பிறகு ஒவ்வொரு member-க்கும் தனிக் கட்டணம் வைக்கும் திட்டம் இல்லை',
      ],
      link: 'Pilot-ல் என்னென்ன உள்ளன',
    },
    member: {
      for: 'Members',
      price: 'இலவசம்',
      sub: 'உங்கள் ஜிம் SpotAI-ல் இருக்கும்போது',
      items: [
        'உங்கள் போன் கேமராவில் AI squat coach',
        'இன்றைய workout, ஒவ்வொரு set-ம் பதிவு',
        'உங்கள் ஜிம் leaderboard மற்றும் buddies',
        'Membership, மீதமுள்ள நாட்கள், UPI கட்டணம் ஆப்பிலேயே',
        'எப்போது வேண்டுமானாலும் உங்கள் data-வை export அல்லது delete செய்யுங்கள்',
      ],
      cta: 'இதை ஆன் செய்யச் சொல்லி உங்கள் ஜிம்மிடம் கேளுங்கள்',
    },
    notes: {
      title: 'Pilot-ல் உள்ளதும் இல்லாததும்',
      items: [
        'Pilot காலத்தில் கட்டண reminders மற்றும் UPI பணம் செலுத்துதல் demo mode-ல் ஓடும்: இந்த flows ஆப்பில் உள்ளன, உங்களுடன் சேர்ந்து உங்கள் ஜிம்மை live-க்கு மாற்றும் வரை எதுவும் அனுப்பப்படாது, எந்தக் கட்டணமும் வசூலிக்கப்படாது.',
        'AI coach இப்போது squats-ஐ மட்டுமே சரிபார்க்கும். Deadlift மற்றும் bench press அடுத்து வரும்.',
        'Face check-in hardware விருப்பத்துக்குரியது, பின்னர் வரும்; QR மற்றும் பெயர் மூலம் check-in முதல் நாளிலிருந்தே வேலை செய்யும்.',
        'இந்தியாவின் DPDP Act-ன் கீழ் உங்கள் ஜிம்தான் அதன் members-க்கான data fiduciary; அதை நிறைவேற்ற தேவையான ஒப்புதல் பதிவுகள், exports, புகார் reference எண்களை SpotAI தருகிறது.',
      ],
    },
  },

  forGymOwners: {
    title: 'ஜிம் மேனேஜ்மென்ட் software: கட்டண reminder, வருகைப் பதிவு',
    description: `இன்று யார் வந்தார், யார் நின்றுவிட்டார், யார் பாக்கி என்று ஒரே திரையில். இந்தியாவில் எங்கிருந்தாலும் முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாள் இலவச pilot, தொலைவிலிருந்தே setup; members-க்கு ஆப் தேவையில்லை.`,
    crumb: 'ஜிம் உரிமையாளர்களுக்கு',
    heroFor: 'இந்தியா முழுவதும் ஜிம் உரிமையாளர்களுக்கு',
    h1: 'யார் வந்தார், யார் வருவதை நிறுத்தினார், யார் பாக்கி என்று காட்டும் ஜிம் மேனேஜ்மென்ட் software.',
    fix: 'அவர்கள் கட்டணம் கட்டுவதை நிறுத்தும் முன்பே பாருங்கள்.',
    lead: 'SpotAI-ன் உரிமையாளர் console உங்கள் laptop அல்லது போனில் உங்கள் ஜிம் floor-ன் live படம். தொடங்க members-க்கு ஆப் தேவையில்லை: front desk அவர்களை QR அல்லது பெயர் மூலம் check-in செய்யும். AI coach, leaderboard, buddies வேண்டும் members தயாரானபோது ஆப்பை install செய்யலாம்.',
    ctaPilot: 'இலவச pilot',
    note: `இந்தியாவில் எங்கிருந்தாலும் முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாள் இலவச pilot. Video call-லேயே setup; உங்கள் register-ஐ நாங்களே ஏற்றுவோம்.`,
    heroAlt: 'SpotAI உரிமையாளர் console: இன்றைய வருகைகள், active members, பாக்கி, இந்த மாத வசூல், தினசரி visits, கூட்ட நேரங்கள், live வருகைகள்',
    today: {
      title: 'ஒரே திரை, ஒவ்வொரு காலையும்',
      items: [
        { title: 'இன்று யார் வந்தார்', body: 'நடக்கும்போதே வருகைகள், நேரம் மற்றும் எப்படி check-in செய்தார்கள் என்றுடன். Front desk-க்காக பாக்கி பெயரிலேயே குறிக்கப்படும்.' },
        { title: 'யார் வருவதை நிறுத்தினார்', body: 'ஒவ்வொரு member-ன் visits, கடைசி வருகை, கூட்ட நேர heatmap. மூன்றாவது வாரத்தில் காணாமல் போன member, மாதம் முடியும் முன்பே தெரிந்துவிடுவார்.' },
        { title: 'யார் பாக்கி', body: 'தொகை மற்றும் தாமத நாட்களுடன் பாக்கிப் பட்டியல். ஒருவரின் பாக்கியை மற்ற members ஒருபோதும் பார்க்க மாட்டார்கள்.' },
        { title: 'Floor எப்படி இருக்கிறது', body: '14 நாட்களின் தினசரி visits, நான்கு வாரக் கூட்ட நேரங்கள், இந்த வாரம் முடியும் memberships, இந்த மாத வசூல் கடந்த மாதத்துடன் ஒப்பிட்டு.' },
      ],
    },
    vs: {
      title: 'Register, Excel, WhatsApp group-உடன் ஒப்பீடு',
      today: 'இன்று',
      withSpotai: 'SpotAI உடன்',
      rows: [
        ['இன்று யார் வந்தார்', 'Desk-ல் கேட்க வேண்டும்', 'Live பட்டியல்'],
        ['யார் வருவதை நிறுத்தினார்', 'Renewal-ன் போது தெரியும்', '7 நாளில் குறிக்கும்'],
        ['கட்டண பாக்கி', 'WhatsApp-ல் screenshot', 'தாமத நாட்களுடன், ஆப்பில் UPI'],
        ['Member பட்டியல்', 'ஒரு register, ஒரே copy', 'Console-ல், எப்போதும் உங்களது'],
        ['கூட்ட நேரங்கள்', 'ஊகம்', 'நான்கு வார heatmap'],
        ['Trainer tips', 'வாய்மொழியாக', 'அங்கீகரித்த templates, தவறு % உடன்'],
      ],
    },
    console: {
      title: 'Console',
      shots: [
        { alt: 'Dues: பாக்கி வைத்துள்ள members, தொகை, தாமத நாட்கள், கடைசி வருகை, Send reminder', caption: 'தாமத நாட்களுடன் பாக்கி, ஒவ்வொரு member-ன் ஒப்புதலை மதிக்கும் reminder பொத்தான்.' },
        { alt: 'Insights: visit செய்த members, திரும்ப வந்தவர்கள், வாரத்துக்கு visits, AI coach பயன்படுத்தும் members, வார நாள் வாரியான visits', caption: 'கடந்த 30 நாட்களுக்கான insights. ஐந்துக்கும் குறைவான members-லிருந்து வரும் எதுவும் மறைக்கப்படும்.' },
        { alt: 'Plan மற்றும் நிலையுடன் members பட்டியல்', caption: 'Members, plans, check-in வரலாறு, reference எண்ணுடன் புகார்கள்.' },
      ],
      more: 'ஒவ்வொரு உரிமையாளர் அம்சமும், விரிவாக',
    },
    members: {
      title: 'உங்கள் members தயாரானபோது அவர்களுக்கு என்ன கிடைக்கும்',
      lead: 'தொடர்ந்து வர ஒரு காரணம், அதுதான் கட்டணத்தையும் தொடர வைக்கிறது.',
      items: [
        'அவர்களின் சொந்த போன் கேமராவில் <strong>AI squat coach</strong>. ஒவ்வொரு tip-ம் உங்கள் trainer அங்கீகரித்த template.',
        '<strong>இன்றைய workout</strong>, ஒவ்வொரு set-ம் பதிவு, ஒவ்வொரு பயிற்சிக்கும் ஒரு short.',
        '<strong>உங்கள் ஜிம் leaderboard</strong>: visits, கிலோ, streak. விருப்பப்பட்டால் மட்டும், முதல் பெயர்கள் மட்டும்.',
        'ஒரே நேரத்தில் பயிற்சி செய்யும் <strong>buddies</strong>. பெரியவர்களுக்கு மட்டும், trainer நெறிப்படுத்துவார்.',
        'முகப்புத் திரையில் <strong>membership மற்றும் பாக்கி</strong>, ஆப்பில் UPI.',
      ],
      more: 'அனைத்து member அம்சங்கள்',
      alt: 'Workout நடக்கும்போது SpotAI member ஆப் முகப்புத் திரை',
    },
    pilot: {
      for: 'இலவச pilot',
      title: `இந்தியாவின் முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாட்கள் இலவசம்`,
      get: 'உங்களுக்குக் கிடைப்பது',
      getItems: [
        'உரிமையாளர் console, front-desk console, trainer console.',
        'Video call மற்றும் WhatsApp வழியாக setup: உங்கள் register அல்லது Excel-ஐ அனுப்புங்கள், நாங்களே ஏற்றுவோம். ஹைதராபாத் பகுதியில் இருந்தால், உங்கள் ஜிம்முக்கே நேரில் வர முடியும்.',
        'Desk-க்கு ஒரு QR poster, floor-க்கு ஒரு member-ஆப் poster.',
        'WhatsApp support, வாரம் ஏழு நாட்களும்.',
        'Pilot இருந்தாலும் இல்லாவிட்டாலும், உங்கள் member பட்டியல் உங்களுடையதே.',
      ],
      ask: 'நாங்கள் கேட்பது',
      askItems: [
        'ஒவ்வொரு வாரமும் உங்களுடன் முப்பது நிமிடங்கள்.',
        'உங்களிடமிருந்து, உங்கள் trainer மற்றும் desk-லிருந்து நேர்மையான கருத்து.',
        'நீங்கள் திருப்தியடைந்த பிறகு, நீங்கள் ஒரு pilot ஜிம் என்று சொல்ல அனுமதி.',
      ],
      leave: 'உங்கள் எண்ணைத் தாருங்கள்',
      note: 'தேவையானது: இணைய வசதியுள்ள laptop அல்லது போன். Face check-in hardware விருப்பத்துக்குரியது, பின்னர் வரும். Pilot காலத்தில் கட்டண reminders மற்றும் UPI demo mode-ல் ஓடும்.',
    },
    faqTitle: 'ஜிம் உரிமையாளர்கள் கேட்கும் கேள்விகள்',
    faq: [
      { q: 'இதற்கு எவ்வளவு செலவாகும்?', a: `இந்தியாவில் எங்கிருந்தாலும் முதல் ${pilot.gyms} ஜிம்களுக்கு ${pilot.days} நாட்கள் இலவசம். Pilot-க்குப் பிறகான விலை முதலில் pilot ஜிம்களுக்கு அறிவிக்கப்படும்; ஒவ்வொரு member-க்கும் தனிக் கட்டணம் வைக்கும் திட்டம் இல்லை.` },
      { q: 'என் members ஆப் install செய்ய வேண்டுமா?', a: 'இல்லை. Front desk QR அல்லது பெயர் மூலம் members-ஐ check-in செய்து, யாரும் எதையும் install செய்யாமலே பாக்கியைக் கண்காணிக்கும். AI coach, leaderboard, buddies அல்லது ஆப்பில் பணம் செலுத்த வேண்டும்போது members ஆப்பை install செய்வார்கள்.' },
      { q: 'ஜிம்மில் எனக்கு என்ன தேவை?', a: 'Console-க்கு இணைய வசதியுள்ள laptop அல்லது போன். ஆப் வேண்டும் members-க்கு எந்த Android போனும். Face check-in சாதனம் விருப்பத்துக்குரியது, பின்னர் வரும்.' },
      { q: 'என் register அல்லது Excel என்ன ஆகும்?', a: 'WhatsApp-ல் file-ஆகவோ photos-ஆகவோ அனுப்புங்கள், நாங்களே ஏற்றுவோம்: பெயர்கள், plans, முடியும் தேதிகள், பாக்கி. முதல் நாளிலிருந்தே console-ல் வேலை செய்யலாம்.' },
      { q: 'இது என் trainer-க்குப் பதிலாக வருமா?', a: 'இல்லை. AI coach தரும் ஒவ்வொரு tip-ம் உங்கள் trainer, trainer console-ல் அங்கீகரித்த template; members எந்த tips-ஐ தவறு என்று குறித்தார்கள் என்றும் trainers பார்ப்பார்கள்.' },
      { q: 'Data யாருக்குச் சொந்தம்?', a: 'உங்கள் member பட்டியல் உங்களுக்குச் சொந்தம். Members தங்கள் சொந்த data-வுக்கு உரிமையாளர்கள், அதை ஆப்பிலிருந்தே export அல்லது delete செய்யலாம். கேமரா வீடியோ அவர்கள் போனை விட்டு வெளியேறாது.' },
      { q: 'கட்டண reminders மற்றும் UPI இன்று வேலை செய்யுமா?', a: 'Pilot-ல் reminders மற்றும் UPI demo mode-ல் ஓடும்: flows ஆப்பில் உள்ளன, உங்களுடன் சேர்ந்து உங்கள் ஜிம்மை live-க்கு மாற்றும் வரை எதுவும் அனுப்பப்படாது, எந்தக் கட்டணமும் வசூலிக்கப்படாது.' },
    ],
  },

  featuresIndex: {
    title: 'அம்சங்கள் · SpotAI ஜிம் ஆப்',
    name: 'SpotAI அம்சங்கள்',
    description: 'இந்தியாவில் ஜிம் members, உரிமையாளர்களுக்கு SpotAI செய்யும் அனைத்தும்: AI squat form check, workouts, leaderboard, QR check-in, UPI கட்டணம், ஜிம் console.',
    h1: 'SpotAI செய்யும் அனைத்தும்',
    lead: 'Members-க்கு ஒரு ஆப், ஜிம்முக்கு ஒரு console. கீழே ஒவ்வொரு பக்கமும் பிரச்சனையைச் சொல்லி, அதைத் தீர்க்கும் திரையைக் காட்டுகிறது.',
    members: 'Members-க்கு',
    owners: 'ஜிம் உரிமையாளர்களுக்கு',
  },

  featurePage: {
    crumb: 'அம்சங்கள்',
    who: { members: 'Members-க்கு', owners: 'ஜிம் உரிமையாளர்களுக்கு', everyone: 'Members மற்றும் ஜிம் உரிமையாளர்களுக்கு' },
    cta: 'முன்கூட்டியே அணுகல் பெறுங்கள்',
    how: 'இது எப்படி வேலை செய்கிறது',
    factsLabel: 'முக்கியத் தகவல்கள்',
    howTitle: 'இது எப்படி வேலை செய்கிறது',
    getTitle: 'உங்களுக்குக் கிடைப்பது',
    limits: 'இன்றைய வரம்புகள்',
    faqTitle: 'கேள்விகள்',
    moreTitle: 'SpotAI-ல் மேலும்',
    moreCta: { kicker: 'ஆப்பைப் பெறுங்கள்', title: 'Waitlist-ல் சேருங்கள்', text: 'Launch நாளில் Play Store, App Store links.' },
  },

  guidesIndex: {
    title: 'ஜிம் வழிகாட்டிகள்: members, உரிமையாளர்களுக்கு · SpotAI',
    name: 'SpotAI வழிகாட்டிகள்',
    description: 'இந்தியாவில் ஜிம் members, ஜிம் உரிமையாளர்களுக்கான நடைமுறை வழிகாட்டிகள்: இந்திய உணவின் கலோரி, தொடக்க workout plan, கட்டண reminder messages, வருகைப் பதிவேடு.',
    h1: 'வழிகாட்டிகள்',
    lead: 'இந்தியாவில் பயிற்சி செய்பவர்களுக்கும் ஜிம் நடத்துபவர்களுக்கும் சுருக்கமான, நடைமுறையான பதில்கள்.',
    members: 'Members',
    owners: 'ஜிம் உரிமையாளர்கள்',
    pages: {
      'calories-in-indian-food': { title: 'சப்பாத்தி, சாதம், பருப்பு: இந்திய உணவின் கலோரி', blurb: 'ஒரு சப்பாத்தி, ஒரு இட்லி, ஒரு கிண்ணம் பருப்பு: அன்றாட இந்திய உணவுகளின் ஒரு serving-க்கு கலோரி, புரதம்.' },
      'gym-workout-plan-for-beginners': { title: 'புதியவர்களுக்கான ஜிம் workout plan', blurb: '3 நாள் full body plan, 4 நாள் upper/lower split, sets, reps மற்றும் எப்படி முன்னேறுவது என்றுடன்.' },
      'gym-fee-reminder-message': { title: 'ஜிம் கட்டண reminder message templates', blurb: 'English மற்றும் இந்தியில் அனுப்பத் தயாரான WhatsApp reminders: due date-க்கு முன், அன்று, பின்.' },
      'gym-attendance-register': { title: 'ஜிம் வருகைப் பதிவேடு: இலவச sheet', blurb: 'Excel அல்லது Google Sheets-க்கு இலவச attendance sheet, members-ஐ renew செய்ய வைக்கும் மூன்று சோதனைகள்.' },
    },
  },

  guide: {
    crumb: 'வழிகாட்டிகள்',
    updated: 'புதுப்பிக்கப்பட்டது',
    questions: 'கேள்விகள்',
  },

  installIphone: {
    title: 'iPhone-ல் SpotAI நிறுவுவது எப்படி: படிப்படியான வழிகாட்டி',
    description: 'Safari மூலம் ஒரு நிமிடத்தில் SpotAI-ஐ iPhone home screen-ல் வையுங்கள், அல்லது Windows/Mac கணினியிலிருந்து native iOS ஆப்பை நிறுவுங்கள். இரண்டும் இலவசம்.',
    crumb: 'iPhone-ல் நிறுவுதல்',
    h1: 'உங்கள் iPhone-ல் SpotAI நிறுவுங்கள்',
    lead: 'இரண்டு வழிகள்: ஒரு நிமிடத்தில் ஆப்பை home screen-ல் வையுங்கள், அல்லது கணினியிலிருந்து native ஆப்பை நிறுவுங்கள். இரண்டும் இலவசம், நீங்கள் பதிவு செய்வது உங்கள் போனிலேயே இருக்கும்.',
    quick: {
      title: 'வழி 1: Home screen ஆப் (1 நிமிடம், எளிது)',
      steps: [
        `iPhone-ல் <strong>Safari</strong> திறந்து <a href="/${demo.web}">spotai.streamerosai.com/${demo.web}</a>-க்குச் செல்லுங்கள்.`,
        `கீழே உள்ள <strong>Share</strong> பட்டனைத் தட்டுங்கள்: மேல் நோக்கிய அம்புடன் உள்ள சதுரம்.`,
        `கீழே scroll செய்து <strong>Add to Home Screen</strong>, பிறகு <strong>Add</strong> தட்டுங்கள்.`,
        `Home screen-லிருந்து <strong>SpotAI</strong> திறங்கள். மற்ற ஆப்களைப் போல full screen-ல் திறக்கும்.`,
        `<strong>Sign up</strong> செய்யுங்கள், அல்லது பார்க்க மட்டும் <code>${demo.logins[0]}</code>, password <code>${demo.password}</code> பயன்படுத்துங்கள்.`,
      ],
      cta: 'Safari-ல் ஆப்பைத் திறங்கள்',
    },
    native: {
      title: 'வழி 2: கணினியிலிருந்து native ஆப் (சுமார் 15 நிமிடம்)',
      need: 'தேவை: Windows அல்லது Mac கணினி, iPhone கேபிள், உங்கள் Apple ID.',
      steps: [
        `கணினியில் <a href="/${demo.ipa}" download>SpotAI iOS கோப்பை</a> download செய்யுங்கள் (${demo.ipaSize}, iOS ${demo.ios} அல்லது புதியது).`,
        `<a href="https://sideloadly.io/" target="_blank" rel="noopener">Sideloadly</a> நிறுவுங்கள். Windows-ல் iTunes, iCloud-ஐயும் Apple இணையதளத்திலிருந்து நிறுவுங்கள், Microsoft Store-லிருந்து அல்ல.`,
        `கேபிள் மூலம் iPhone-ஐ இணைத்து, போனை unlock செய்து, கேட்கும்போது <strong>Trust</strong> தட்டுங்கள்.`,
        `Sideloadly திறந்து, SpotAI கோப்பை அதில் இழுத்துப் போட்டு, Apple ID கொடுத்து <strong>Start</strong> அழுத்துங்கள்.`,
        `iPhone-ல் <strong>Settings → General → VPN &amp; Device Management</strong> திறந்து, உங்கள் Apple ID-ஐத் தேர்ந்தெடுத்து <strong>Trust</strong> தட்டுங்கள்.`,
        `iOS 16 அல்லது புதியதில் <strong>Settings → Privacy &amp; Security → Developer Mode</strong> on செய்து, கேட்கும்போது restart செய்யுங்கள்.`,
        `Home screen-லிருந்து SpotAI திறங்கள்.`,
      ],
      note: 'இலவச Apple ID-யுடன் ஆப் 7 நாட்கள் வேலை செய்யும். பிறகு iPhone-ஐ இணைத்து Sideloadly-ல் மீண்டும் Start அழுத்துங்கள்; உங்கள் தரவு போனிலேயே இருக்கும்.',
    },
    faqTitle: 'கேள்விகள்',
    faq: [
      { q: 'SpotAI ஏன் இன்னும் App Store-ல் இல்லை?', a: 'Launch-ல் வரும். அதுவரை iPhone-ல் முயற்சிக்க home screen ஆப்பும் iOS கோப்பும்தான் வழிகள்.' },
      { q: 'Sideloadly-க்கு என் Apple ID கொடுக்க வேண்டுமா?', a: 'வழி 2-க்கு ஆம்: உங்கள் iPhone-க்காக ஆப்பில் கையொப்பமிட Apple-க்கு இது தேவை. கொடுக்க விரும்பாவிட்டால் வழி 1-ஐப் பயன்படுத்துங்கள், அதற்கு Apple ID தேவையில்லை.' },
      { q: 'நான் பதிவு செய்வது போனை விட்டு வெளியே போகுமா?', a: 'இல்லை. Demo-வில் நீங்கள் பதிவு செய்யும் அனைத்தும் இரண்டு வழிகளிலும் உங்கள் போனிலேயே இருக்கும்.' },
    ],
  },

  notFound: {
    title: 'பக்கம் கிடைக்கவில்லை · SpotAI',
    description: 'அந்தப் பக்கம் இங்கே இல்லை. SpotAI அம்சம், ஜிம் உரிமையாளர் pilot அல்லது விலைப் பக்கத்துக்குச் செல்லுங்கள்.',
    h1: 'அந்தப் பக்கம் இங்கே இல்லை.',
    lead: 'இவற்றில் ஒன்றை முயற்சியுங்கள்.',
    home: 'முகப்பு',
    forOwners: 'ஜிம் உரிமையாளர்களுக்கு',
    pricing: 'விலை',
  },

  guideCalories: {
    title: 'சப்பாத்தி, சாதம், பருப்பு கலோரி: இந்திய உணவு அட்டவணை · SpotAI',
    description: (roti: Food) => `ஒரு சப்பாத்தியில் (${roti.kcal} kcal), ஒரு தட்டு சாதம், ஒரு கிண்ணம் பருப்பு, இட்லி, தோசை, போஹா, பரோட்டாவில் எவ்வளவு கலோரி, ஒரு serving-க்கு புரதத்துடன்.`,
    h1: 'சப்பாத்தி, சாதம், பருப்பு மற்றும் பிற இந்திய உணவுகளின் கலோரி',
    answer: (v: { roti: Food; rice: Food; dal: Food; idli: Food; count: number }) =>
      `ஒரு சாதா சப்பாத்தியில் (${v.roti.grams} g) சுமார் ${v.roti.kcal} kcal உள்ளது. ஒரு தட்டு வேகவைத்த சாதத்தில் (${v.rice.grams} g) சுமார் ${v.rice.kcal} kcal, ஒரு கிண்ணம் கலவைப் பருப்பில் சுமார் ${v.dal.kcal} kcal, ஒரு இட்லியில் சுமார் ${v.idli.kcal} kcal. கீழே உள்ள அட்டவணைகள் ${v.count} அன்றாட உணவுகளை ஒரு serving-க்கு, புரதம், கார்போஹைட்ரேட், கொழுப்புடன் பட்டியலிடுகின்றன.`,
    faq: (v: { roti: Food; rice: Food; dal: Food }) => [
      {
        q: 'ஒரு சப்பாத்தியில் எவ்வளவு கலோரி?',
        a: `நெய் இல்லாமல் செய்த சுமார் ${v.roti.grams} g சாதா சப்பாத்தியில் சுமார் ${v.roti.kcal} kcal, ${v.roti.protein} g புரதம், ${v.roti.carbs} g கார்போஹைட்ரேட் உள்ளது. மேலே நெய் அல்லது எண்ணெய் சேர்த்தால் அது கூடும்.`,
      },
      {
        q: 'சப்பாத்தியா சாதமா: எதில் கலோரி குறைவு?',
        a: `ஒரு serving-க்கு, நீங்கள் எவ்வளவு சாப்பிடுகிறீர்கள் என்பதைப் பொறுத்தது. ஒரு ${v.roti.grams} g சப்பாத்தி சுமார் ${v.roti.kcal} kcal; ஒரு ${v.rice.grams} g தட்டு வேகவைத்த சாதம் சுமார் ${v.rice.kcal} kcal, கிட்டத்தட்ட ${Math.round(v.rice.kcal / v.roti.kcal)} சப்பாத்திகளுக்குச் சமம்.`,
      },
      {
        q: 'ஒரு கிண்ணம் பருப்பில் எவ்வளவு கலோரி?',
        a: `ஒரு கிண்ணம் கலவைப் பருப்பு (சமைத்தது சுமார் ${v.dal.grams} g) சுமார் ${v.dal.kcal} kcal, ${v.dal.protein} g புரதத்துடன். வெண்ணெய் அல்லது க்ரீம் சேர்த்த dal makhani போன்ற கெட்டியான பருப்புகளில் அதிகம்.`,
      },
      {
        q: 'இந்த எண்கள் எங்கிருந்து வருகின்றன?',
        a: 'வீட்டு முறை இந்திய சமையல் குறிப்புகளுக்கு ஊட்டச்சத்தைக் கணக்கிடும் Indian Nutrient Databank-லிருந்து (Jaacks et al., 2024). உங்கள் சொந்த சமையல், எண்ணெய், அளவு மாறுபடும், எனவே இவற்றை மதிப்பீடுகளாகக் கொள்ளுங்கள்.',
      },
    ],
    cta: { label: 'SpotAI-ல் உணவைப் பதிவு செய்யுங்கள்', text: 'இதே அட்டவணையைக் கொண்டு நீங்கள் ஒவ்வொரு நாளும் மாதமும் சாப்பிடுவதை SpotAI கூட்டித் தரும். பதிவு செய்வது விருப்பத்துக்குரியது.' },
    intro: 'இந்தியாவில் ஜிம் செல்பவர்கள் பெரும்பாலும் வீட்டு உணவையே சாப்பிடுகிறார்கள், பொதுவான calorie ஆப்களுக்கு ஒரு கிண்ணம் ராஜ்மாவுக்கும் ஒரு கப் chilli-க்கும் வித்தியாசம் தெரிவதில்லை. கீழே உள்ள எண்கள் <strong>வழக்கமாகச் சாப்பிடும் ஒரு serving</strong>-க்கு: ஒரு சப்பாத்தி, ஒரு இட்லி, ஒரு கிண்ணம் பருப்பு, ஒரு தட்டு சாதம்.',
    groupTitle: (group: string) => `${group}: ஒரு serving-க்கு கலோரி`,
    table: { dish: 'உணவு, ஒரு serving', kcal: 'kcal', protein: 'புரதம்', carbs: 'கார்ப்ஸ்', fat: 'கொழுப்பு' },
    serving: (unit: string, grams: number) => `1 ${unit}, சுமார் ${grams} g`,
    howTitle: 'இந்த எண்களை எப்படிப் பயன்படுத்துவது',
    how: [
      '<strong>தட்டுகளை அல்ல, துண்டுகளை எண்ணுங்கள்.</strong> இரண்டு சப்பாத்தி, ஒரு கிண்ணம் பருப்பு, ஒரு சிறிய கிண்ணம் சாதம் என்று பதிவு செய்வது, ஊகித்த "ஒரு thali"-ஐ விட எளிது.',
      '<strong>கூடுதல்களைச் சேருங்கள்.</strong> சப்பாத்தி மேல் நெய், தோசை மேல் வெண்ணெய், ஒரு ஸ்பூன் ஊறுகாய் அடிப்படை எண்களில் இல்லை.',
      '<strong>பயிற்சி செய்தால், கலோரி அளவுக்கே புரதமும் முக்கியம்.</strong> பருப்பு, பனீர், தயிர், முட்டை ஆகியவற்றிலிருந்தே வீட்டு உணவின் பெரும்பாலான புரதம் வருகிறது.',
      '<strong>ஒருமுறை எடை போடுங்கள்.</strong> உங்கள் வழக்கமான கிண்ணத்தையும் சப்பாத்தியையும் ஒருமுறை எடை போடுங்கள்; அதன் பிறகு மேலே உள்ள servings போதுமான அளவு நெருக்கமானவை.',
    ],
    source: 'ஆதாரம்: Indian Nutrient Databank (Jaacks LM et al., Current Developments in Nutrition, 2024). பொரிக்கும் எண்ணெய் முழுவதையும் அல்லது ஒரு முழு tray-ஐயும் ஒரு serving-ஆக databank கணக்கிடும் சமையல் குறிப்புகள் விடப்பட்டுள்ளன. வழக்கமான வீட்டுச் சமையலுக்கான மதிப்பீடுகள், மருத்துவ அல்லது உணவு ஆலோசனை அல்ல.',
  },

  guideAttendance: {
    title: 'ஜிம் வருகைப் பதிவேடு: இலவச Excel sheet · SpotAI',
    description: 'Excel அல்லது Google Sheets-க்கான இலவச ஜிம் attendance register sheet: முக்கியமான columns, வருவதை நிறுத்திய members-ஐ எப்படிக் கண்டுபிடிப்பது.',
    h1: 'ஜிம் வருகைப் பதிவேடு: இலவச sheet, அதை எப்படிப் பயன்படுத்துவது',
    answer: 'ஜிம் வருகைப் பதிவேட்டில் தேதி, member பெயர், check-in நேரம், membership முடியும் தேதி இருக்க வேண்டும். கீழே உள்ள இலவச sheet-ஐ download செய்யுங்கள் (Excel, Google Sheets இரண்டிலும் வேலை செய்யும்). இதன் உண்மையான பயன் தலைகளை எண்ணுவது அல்ல: கட்டணம் கட்டுவதை நிறுத்தும் முன்பே யார் வருவதை நிறுத்தினார் என்று காட்டுவதுதான்.',
    faq: [
      {
        q: 'ஜிம் வருகைப் பதிவேட்டில் என்ன இருக்க வேண்டும்?',
        a: 'தேதி, member பெயர் அல்லது ID, check-in நேரம், முடிந்தால் check-out நேரம் மற்றும் membership முடியும் தேதி. இவை இருந்தால், யார் வருகிறார்கள், ஜிம் எப்போது கூட்டமாக இருக்கிறது, membership முடியும் முன்பே யார் வருவதை நிறுத்தினார் என்று பார்க்கலாம்.',
      },
      {
        q: 'Excel-ல் இலவச ஜிம் attendance sheet உள்ளதா?',
        a: 'ஆம், இந்தப் பக்கத்தில் link செய்யப்பட்டுள்ள sheet இலவசம். அது Excel அல்லது Google Sheets-ல் திறக்கும், மேலே சொன்ன columns உள்ளன.',
      },
      {
        q: 'காகிதப் பதிவேடு, Excel அல்லது ஆப்: எது சிறந்தது?',
        a: 'தினம் சில members மட்டும் என்றால் காகிதம் போதும். மொத்தக் கணக்கு வேண்டும்போது Excel உதவும். ஒரு ஆப் check-ins-ஐ தானாகவே பதிவு செய்யும் (QR மூலம் அல்லது desk-ல்), யாரும் sheet-ஐப் படிக்காமலே பாக்கி வைத்தவர்களையும் வருவதை நிறுத்தியவர்களையும் குறிக்கும்.',
      },
      {
        q: 'SpotAI வருகையை எப்படிப் பதிவு செய்கிறது?',
        a: 'Members ஆப்பிலிருந்து ஒரு QR-ஐ desk-ல் காட்டுவார்கள், அல்லது desk அவர்களைப் பெயர் மூலம் check-in செய்யும். ஒவ்வொரு check-in-ம் நேரத்துடன் உரிமையாளர் console-ல் live-ஆகத் தெரியும், வருவதை நிறுத்திய members அவர்களின் membership முடியும் முன்பே தெரிந்துவிடுவார்கள்.',
      },
    ],
    cta: { label: 'SpotAI-ல் live வருகையைப் பாருங்கள்', text: 'SpotAI QR அல்லது பெயர் மூலம் check-ins-ஐப் பதிவு செய்து, இன்று யார் வந்தார், யார் வருவதை நிறுத்தினார் என்று காட்டும்.' },
    download: 'இலவச attendance sheet-ஐ download செய்யுங்கள் (CSV)',
    columnsTitle: 'வைத்திருக்க வேண்டிய columns',
    columns: [
      '<strong>தேதி</strong> மற்றும் <strong>check-in நேரம்</strong>: கூட்ட நேரங்கள் இவற்றிலிருந்துதான் வருகின்றன.',
      '<strong>Member பெயர்</strong> மற்றும் <strong>போன் அல்லது member ID</strong>: ராகுல் என்று இரண்டு members இருப்பது சகஜம்.',
      '<strong>Check-out நேரம்</strong>: விருப்பத்துக்குரியது, கூட்டத்தைப் புரிந்துகொள்ள உதவும்.',
      '<strong>Membership முடியும் தேதி</strong>: renewals வருவதை desk பார்க்க.',
      '<strong>பாக்கி</strong>: desk-ல் ஆம்/இல்லை போதும்; தொகைகளை private-ஆக வையுங்கள்.',
    ],
    checksTitle: 'ஒவ்வொரு வாரமும் சரிபார்க்க வேண்டிய மூன்று விஷயங்கள்',
    checks: [
      '<strong>7 நாட்களாக யார் வரவில்லை.</strong> renew செய்யாமல் போகிறவர்கள் இவர்கள்தான். இப்போதே அழையுங்கள் அல்லது message அனுப்புங்கள்.',
      '<strong>கூட்ட நேரங்கள்.</strong> மணி வாரியாக check-ins-ஐ எண்ணுங்கள். கூட்டம் இருக்கும் நேரத்தில் trainers-ஐ வையுங்கள்.',
      '<strong>அடுத்த 7 நாட்களில் renewals.</strong> தேதிக்குப் பின் அல்ல, முன்பே நினைவூட்டுங்கள்.',
    ],
    enoughTitle: 'பதிவேடு போதாமல் போகும் நேரம்',
    enough: 'Desk தினம் சில டஜன் பெயர்களுக்கு மேல் எழுதத் தொடங்கியதும், பதிவேடு தாமதமாக நிரப்பப்படுகிறது, பெயர்கள் தவறாக எழுதப்படுகின்றன, மேலே சொன்ன மூன்று சோதனைகளுக்காக அதைப் படிக்க யாருக்கும் நேரம் இருப்பதில்லை. அந்த நிலையில்தான் QR check-in-ம் உங்களுக்காகப் படித்துச் சொல்லும் ஒரு console-ம் பயன் தரும்.',
  },

  guideFeeReminder: {
    title: 'ஜிம் கட்டண reminder message: WhatsApp templates · SpotAI',
    description: 'English, இந்தியில் copy-paste செய்யக்கூடிய ஜிம் கட்டண reminder WhatsApp messages: due date-க்கு முன், அன்று, பின், தொகை மற்றும் செலுத்தும் வழியுடன்.',
    h1: 'ஜிம் கட்டண reminder message templates',
    answer: 'நல்ல ஜிம் கட்டண reminder சுருக்கமாக, தனிப்பட்டதாக, தெளிவாக இருக்கும்: member-ன் பெயர், தொகை, due date, எப்படிச் செலுத்துவது, அந்த member-க்கு மட்டும் அனுப்பப்படும், ஒருபோதும் group-க்கு அல்ல. Due date-க்கு முன், அன்று, பின் அனுப்பத் தயாரான messages கீழே உள்ளன, English மற்றும் இந்தியில்.',
    faq: [
      {
        q: 'ஜிம் எப்போது கட்டண reminder அனுப்ப வேண்டும்?',
        a: 'வழக்கமான முறை: membership முடிவதற்குச் சில நாட்கள் முன் ஒரு நட்பான குறிப்பு, due date அன்று ஒன்று, சில நாட்களுக்குப் பின் மென்மையான ஒரு follow-up. அதற்கு மேல் போனால் துரத்துவது போல் தோன்றும்.',
      },
      {
        q: 'ஜிம் கட்டண reminders-ஐ WhatsApp-ல் அனுப்பலாமா?',
        a: 'ஆம், ஜிம்மிடமிருந்து messages பெற member ஒப்புக்கொண்டிருந்தால். ஒரு member-க்கு ஒரு message அனுப்புங்கள், group-க்கு அல்ல: பாக்கி என்பது தனிப்பட்ட விஷயம். ஒரே நேரத்தில் பல members-க்கு என்றால், WhatsApp Business ஆப் அல்லது WhatsApp Business API வழக்கமான வழி.',
      },
      {
        q: 'Reminder-ல் தொகையைச் சொல்ல வேண்டுமா?',
        a: 'ஆம். தொகை, தேதி, எப்படிச் செலுத்துவது மூன்றும் ஒரே message-ல் இருந்தால் பதில் பரிமாற்றம் மிச்சம். மற்ற members பார்க்கக்கூடிய group chat-ல் தொகைகளைப் போடாதீர்கள்.',
      },
      {
        q: 'SpotAI கட்டண reminders-ஐ எப்படிக் கையாள்கிறது?',
        a: 'உரிமையாளர் console பாக்கி வைத்துள்ள ஒவ்வொரு member-ஐயும் தொகை, தாமத நாட்களுடன் பட்டியலிடும், reminders-ஐ அனுமதித்த members-க்கு மட்டுமே reminder பொத்தான் வேலை செய்யும். Members தாங்கள் செலுத்த வேண்டியதைப் பார்த்து ஆப்பில் UPI-ல் செலுத்துவார்கள். Pilot-ல் reminders மற்றும் UPI demo mode-ல் ஓடும்.',
      },
    ],
    cta: { label: 'பாக்கிப் பட்டியலைப் பாருங்கள்', text: 'யார் பாக்கி, எத்தனை நாள் தாமதம் என்று SpotAI காட்டும், members ஆப்பில் UPI-ல் செலுத்தலாம். இந்தியா முழுவதும் ஜிம்களுக்கு இலவச pilot.' },
    sections: [
      {
        title: 'Due date-க்கு 3 நாள் முன்',
        messages: [
          'Hi {name}, a quick heads-up from {gym}: your membership renews on {date}. The amount is ₹{amount}. You can pay at the desk or by UPI to {upi id}. See you at the gym!',
          'नमस्ते {name}, {gym} की तरफ़ से याद दिलाना था: आपकी मेंबरशिप {date} को रिन्यू होनी है। राशि ₹{amount} है। डेस्क पर या UPI {upi id} पर भुगतान कर सकते हैं। जिम में मिलते हैं!',
        ],
      },
      {
        title: 'Due date அன்று',
        messages: [
          'Hi {name}, your {gym} membership is due today, ₹{amount}. Pay at the desk or UPI {upi id} and share the payment reference here. Thank you!',
          'नमस्ते {name}, आज आपकी {gym} मेंबरशिप की फ़ीस ₹{amount} देय है। डेस्क पर या UPI {upi id} पर भुगतान करें और रेफ़रेंस यहाँ भेज दें। धन्यवाद!',
        ],
      },
      {
        title: 'சில நாட்களுக்குப் பின்',
        messages: [
          'Hi {name}, we noticed the {gym} fee of ₹{amount} from {date} is still open. If you have already paid, please send the reference and we will update it. If anything changed, just reply and we can sort it out.',
          'नमस्ते {name}, {date} की ₹{amount} फ़ीस अभी बाकी दिख रही है। अगर आपने भुगतान कर दिया है तो रेफ़रेंस भेज दें, हम अपडेट कर देंगे। कुछ बदला हो तो बताइए, मिलकर हल निकाल लेंगे।',
        ],
      },
      {
        title: 'வருவதை நிறுத்திய member-க்கு',
        messages: [
          "Hi {name}, we haven't seen you at {gym} for a while. All good? Your membership ends on {date}. If timings are the problem, tell us; mornings before 7 are quiet this month.",
        ],
      },
    ],
    rulesTitle: 'Reminders எரிச்சலூட்டாமல் இருக்க விதிகள்',
    rules: [
      '<strong>ஒரு member, ஒரு message.</strong> பாக்கியை ஒருபோதும் group-ல் போடாதீர்கள். அது மக்களைச் சங்கடப்படுத்தும், அவர்களின் data-வையும் பகிரும்.',
      '<strong>ஒப்புக்கொண்டிருந்தால் மட்டும்.</strong> சேரும்போதே WhatsApp-ல் reminders வேண்டுமா என்று கேளுங்கள், வேண்டாம் என்றால் நிறுத்துங்கள்.',
      '<strong>இரவில் வேண்டாம்.</strong> Reminders-ஐ காலை முதல் மாலை வரை மட்டும் அனுப்புங்கள்.',
      '<strong>எப்படிச் செலுத்துவது என்று சொல்லுங்கள்.</strong> Message-ல் UPI ID அல்லது link இருந்தால், "please clear your dues" என்பதை விட வேகமாகப் பணம் வரும்.',
      '<strong>யார் வருவதை நிறுத்தினார் என்று கவனியுங்கள்.</strong> இரண்டு வாரமாக வராத member renew செய்யாமல் போகவிருக்கிறார்; due date-க்கு முன்பே அவருடன் பேசுங்கள்.',
    ],
    note: (phone: string) => `கேள்விகள் உள்ளதா? ${phone} என்ற எண்ணில் WhatsApp-ல் எங்களுக்கு message அனுப்புங்கள்.`,
  },

  guideWorkoutPlan: {
    title: 'தொடக்கநிலை ஜிம் workout plan: 3 நாள், 4 நாள் split · SpotAI',
    description: 'புதியவர்களுக்கான ஜிம் workout plan: 3 நாள் full body plan, 4 நாள் upper/lower split, sets, reps மற்றும் எப்படி முன்னேறுவது என்றுடன்.',
    h1: 'புதியவர்களுக்கான ஜிம் workout plan',
    answer: 'வாரத்துக்கு மூன்று full-body நாட்களுடன் தொடங்குங்கள் (உதாரணமாக திங்கள், புதன், வெள்ளி), ஒவ்வொரு பயிற்சிக்கும் 8 முதல் 12 reps கொண்ட 2 முதல் 3 sets. இரண்டு மாதங்களுக்குப் பின், 4 நாள் upper/lower split-க்கு மாறுங்கள். இரண்டுமே ஒவ்வொரு தசையையும் வாரத்துக்குச் சுமார் இரண்டு முறை பயிற்றுவிக்கின்றன, இது தொடக்கநிலையாளர்களுக்கு நாளுக்கு ஒரு தசை என்பதை விடச் சிறப்பாக வேலை செய்யும்.',
    faq: [
      {
        q: 'தொடக்கநிலையாளர் வாரத்துக்கு எத்தனை நாள் ஜிம் போக வேண்டும்?',
        a: 'தொடங்க வாரத்துக்கு மூன்று நாள் போதும், sessions-க்கு இடையே ஒரு ஓய்வு நாளுடன். மூன்று நாள் எளிதாகத் தோன்றும்போது, upper/lower split உடன் நான்கு நாட்களுக்கு மாறுவது நன்றாக வேலை செய்யும்.',
      },
      {
        q: 'Bro split (நாளுக்கு ஒரு தசை) தொடக்கநிலையாளர்களுக்கு நல்லதா?',
        a: 'அது வேலை செய்யும், ஆனால் ஒவ்வொரு தசையையும் வாரத்துக்கு ஒருமுறை மட்டுமே பயிற்றுவிக்கும். Full body அல்லது upper/lower ஒவ்வொரு தசையையும் வாரத்துக்குச் சுமார் இரண்டு முறை பயிற்றுவிக்கும், தசை வளர்ப்புக்கு இதுவே பொதுவான பரிந்துரை.',
      },
      {
        q: 'தொடக்கநிலையாளர் எத்தனை sets, reps செய்ய வேண்டும்?',
        a: 'ஒவ்வொரு பயிற்சிக்கும் 8 முதல் 12 reps கொண்ட இரண்டு முதல் மூன்று sets, இன்னும் ஒன்றிரண்டு நல்ல reps மீதம் இருக்கும்போது நிறுத்துங்கள். சுத்தமான form-உடன் ஒவ்வொரு set-லும் range-ன் உச்சத்தைச் செய்ய முடிந்ததும் எடையைக் கூட்டுங்கள்.',
      },
      {
        q: 'ஒரு ஆப் என் ஜிம் workout-ஐத் திட்டமிட முடியுமா?',
        a: 'கடந்த வாரம் நீங்கள் செய்த பயிற்சியை வைத்து SpotAI இன்றைய session-ஐப் பரிந்துரைக்கும், அதனால் ஒவ்வொரு தசையும் வாரத்துக்குச் சுமார் இரண்டு முறை வரும், ஒவ்வொரு set-ம் பதிவாகும். நீங்கள் எப்போதும் வேறு ஒன்றைத் தேர்ந்தெடுக்கலாம்.',
      },
    ],
    cta: { label: 'SpotAI உங்கள் நாளை எப்படித் திட்டமிடுகிறது', text: 'SpotAI கடந்த வாரத்தை வைத்து இன்றைய session-ஐத் தேர்ந்தெடுத்து ஒவ்வொரு set-ஐயும் பதிவு செய்யும், ஒவ்வொரு பயிற்சிக்கும் ஒரு சிறிய வீடியோவுடன்.' },
    table: { day: 'நாள்', exercises: 'பயிற்சிகள்' },
    fullBody: {
      title: '3 நாள் full body plan',
      intro: 'தொடர்ச்சியாக இல்லாத மூன்று நாட்களில் பயிற்சி செய்யுங்கள். Sessions-க்கு இடையே குறைந்தது ஒரு நாள் ஓய்வு.',
      rows: [
        ['நாள் 1', 'Goblet squat 3×10 · Push-up 3×8 · Dumbbell row 3×10 · Plank 3×30 s'],
        ['நாள் 2', 'Romanian deadlift 3×10 · Dumbbell shoulder press 3×10 · Lat pulldown 3×10 · Glute bridge 3×12'],
        ['நாள் 3', 'Leg press 3×12 · Dumbbell bench press 3×10 · Seated cable row 3×10 · Dead bug 3×10'],
      ],
    },
    upperLower: {
      title: '4 நாள் upper/lower split',
      intro: 'மூன்று நாள் எளிதாகத் தோன்றும்போது, உடலை இரண்டாகப் பிரித்து ஒவ்வொரு பாதியையும் இரண்டு முறை பயிற்றுவியுங்கள்: உதாரணமாக திங்கள், செவ்வாய், வியாழன், வெள்ளி. 8 முதல் 12 reps கொண்ட 3 sets செய்யுங்கள்.',
      rows: [
        ['திங்கள்: Upper', 'Dumbbell bench press · Lat pulldown · Shoulder press · Dumbbell row · Biceps curl'],
        ['செவ்வாய்: Lower', 'Goblet squat · Romanian deadlift · Walking lunge · Calf raise · Plank'],
        ['வியாழன்: Upper', 'Incline push-up · Seated cable row · Lateral raise · Face pull · Triceps pushdown'],
        ['வெள்ளி: Lower', 'Leg press · Hip thrust · Leg curl · Step-up · Side plank'],
      ],
    },
    progressTitle: 'எப்படி முன்னேறுவது',
    progress: [
      '<strong>ஒவ்வொரு set-ஐயும் எழுதி வையுங்கள்.</strong> Reps மற்றும் கிலோ. பதிவு இல்லாமல் நீங்கள் வலிமையாகிறீர்களா என்று சொல்ல முடியாது.',
      '<strong>எடையை மெதுவாகக் கூட்டுங்கள்.</strong> ஒவ்வொரு set-ம் 12 சுத்தமான reps-ஐ எட்டும்போது, ஜிம்மில் உள்ள மிகச் சிறிய அளவில் கூட்டுங்கள்.',
      '<strong>முதலில் form.</strong> Squats-ல் முழங்கால்கள் உள்ளே மடங்கினால் அல்லது deadlifts-ல் முதுகு வளைந்தால், எடையைக் குறையுங்கள். Trainer-இடம் கேளுங்கள், அல்லது போன் கேமராவில் SpotAI coach உங்கள் squat-ஐச் சரிபார்க்கட்டும்.',
      '<strong>ஓய்வு நாட்களும் முக்கியம்.</strong> தூக்கமும் உணவும்தான் பயிற்சியைத் தசையாக மாற்றுகின்றன.',
    ],
    note: 'ஆரோக்கியமான பெரியவர்களுக்கான பொது வழிகாட்டல், மருத்துவ ஆலோசனை அல்ல. காயம் அல்லது உடல்நலப் பிரச்சனை இருந்தால் தொடங்கும் முன் மருத்துவரிடமும், உங்கள் சொந்தத் திட்டத்துக்கு உங்கள் ஜிம் trainer-இடமும் கேளுங்கள்.',
  },
} satisfies DeepPartial<Strings>;
