// One entry per feature page: the language-independent data. The words for each page (titles, steps,
// alt text, questions) are in src/i18n/features/<code>.ts; featuresFor(code) joins the two.
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
export interface FeatureData {
  slug: string;
  audience: Feature['audience'];
  hero: Omit<Shot, 'alt'>;
  /** Screenshot for each "How it works" step, in order. */
  steps: Omit<Shot, 'alt'>[];
  related: string[];
}

const phone = (src: string): Omit<Shot, 'alt'> => ({ src, kind: 'phone' });
const browser = (src: string): Omit<Shot, 'alt'> => ({ src, kind: 'browser' });

export const FEATURES: FeatureData[] = [
  {
    slug: 'ai-coach',
    audience: 'members',
    hero: phone('m-dark-coach.webp'),
    steps: [
      phone('m-light-coach.webp'),
      phone('m-dark-coach.webp'),
      phone('m-dark-home.webp'),
      phone('m-dark-workout.webp'),
    ],
    related: ['workouts', 'privacy'],
  },
  {
    slug: 'workouts',
    audience: 'members',
    hero: phone('m-dark-home-train.webp'),
    steps: [
      phone('m-dark-picker.webp'),
      phone('m-dark-splits.webp'),
      phone('m-dark-exercises.webp'),
      phone('m-dark-workout.webp'),
      phone('m-dark-workouts.webp'),
    ],
    related: ['ai-coach', 'leaderboard'],
  },
  {
    slug: 'leaderboard',
    audience: 'members',
    hero: phone('m-dark-leaderboard.webp'),
    steps: [
      phone('m-dark-gains.webp'),
      phone('m-light-gains.webp'),
      phone('m-dark-leaderboard.webp'),
      phone('m-dark-connect.webp'),
    ],
    related: ['workouts', 'privacy'],
  },
  {
    slug: 'food-log',
    audience: 'members',
    hero: phone('m-dark-diet-filled.webp'),
    steps: [
      phone('m-dark-diet-search.webp'),
      phone('m-dark-diet-amount.webp'),
      phone('m-dark-diet-day.webp'),
      phone('m-dark-diet-month.webp'),
      phone('m-dark-dietplan-numbers.webp'),
      phone('m-dark-dietplan-meals.webp'),
    ],
    related: ['workouts', 'leaderboard'],
  },
  {
    slug: 'check-in',
    audience: 'everyone',
    hero: phone('m-dark-home.webp'),
    steps: [
      phone('m-dark-home.webp'),
      phone('m-dark-profile.webp'),
      phone('m-light-profile.webp'),
      browser('o-overview.webp'),
    ],
    related: ['owners', 'privacy'],
  },
  {
    slug: 'owners',
    audience: 'owners',
    hero: browser('o-overview.webp'),
    steps: [
      browser('o-overview.webp'),
      browser('o-checkin.webp'),
      browser('o-dues.webp'),
      browser('o-members.webp'),
      browser('o-plans.webp'),
      browser('o-staff.webp'),
      browser('o-insights.webp'),
      browser('o-complaints.webp'),
      browser('o-desk.webp'),
      browser('o-review.webp'),
      browser('o-decided.webp'),
      browser('o-moderation.webp'),
      browser('o-groups.webp'),
      browser('o-devices.webp'),
      browser('o-settings.webp'),
      browser('o-login.webp'),
    ],
    related: ['check-in', 'privacy'],
  },
  {
    slug: 'privacy',
    audience: 'everyone',
    hero: phone('m-dark-profile.webp'),
    steps: [
      phone('m-dark-coach.webp'),
      phone('m-light-connect.webp'),
      phone('m-dark-profile.webp'),
      phone('m-dark-welcome.webp'),
    ],
    related: ['ai-coach', 'owners'],
  },
];
