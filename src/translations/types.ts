export type Locale = "en" | "te";

export interface Translations {
  readonly common: {
    readonly scene: string;
    readonly sceneFinal: string;
    readonly togetherForever: string;
    readonly withLoveGratitude: string;
    readonly days: string;
    readonly hours: string;
    readonly mins: string;
    readonly secs: string;
    readonly theDayIsHere: string;
    readonly swipeWishes: string;
    readonly venue: string;
    readonly callUs: string;
    readonly email: string;
    readonly languageLabel: string;
    readonly english: string;
    readonly telugu: string;
  };
  readonly nav: {
    readonly heart: string;
    readonly story: string;
    readonly events: string;
    readonly gallery: string;
    readonly blessings: string;
    readonly location: string;
  };
  readonly hero: {
    readonly subtitle: string;
    readonly cta: string;
    readonly countdownComplete: string;
  };
  readonly couple: {
    readonly ariaLabel: string;
    readonly label: string;
    readonly title: string;
    readonly unionQuote: string;
    readonly groomRole: string;
    readonly brideRole: string;
    readonly groomParentsLabel: string;
    readonly brideParentsLabel: string;
    readonly coupleQuote: string;
  };
  readonly story: {
    readonly ariaLabel: string;
    readonly scene: string;
    readonly title: string;
    readonly subtitle: string;
    readonly swipeHint: string;
  };
  readonly muhurtham: {
    readonly ariaLabel: string;
    readonly sacredHeader: string;
    readonly title: string;
    readonly muhurthamLabel: string;
    readonly auspiciousHour: string;
    readonly samvatsaram: string;
    readonly tithi: string;
    readonly nakshatram: string;
    readonly lagnam: string;
    readonly venue: string;
    readonly blessingIntro: string;
    readonly quote: string;
  };
  readonly celebrations: {
    readonly ariaLabel: string;
    readonly scene: string;
    readonly title: string;
    readonly subtitle: string;
    readonly kalyanam: {
      readonly title: string;
      readonly subtitle: string;
    };
    readonly reception: {
      readonly title: string;
      readonly subtitle: string;
      readonly venue: string;
    };
  };
  readonly gallery: {
    readonly ariaLabel: string;
    readonly scene: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly video: {
    readonly ariaLabel: string;
    readonly label: string;
    readonly title: string;
    readonly subtitle: string;
    readonly playLabel: string;
  };
  readonly wishes: {
    readonly ariaLabel: string;
    readonly scene: string;
    readonly title: string;
    readonly subtitle: string;
    readonly leaveWish: string;
  };
  readonly location: {
    readonly ariaLabel: string;
    readonly scene: string;
    readonly title: string;
    readonly subtitle: string;
    readonly venueLabel: string;
    readonly kalyanamLabel: string;
    readonly vinduLabel: string;
    readonly directionsCta: string;
    readonly footerMessage: string;
  };
  readonly footer: {
    readonly ariaLabel: string;
    readonly blessings: string;
    readonly emotionalNote: string;
    readonly copyright: string;
  };
}
