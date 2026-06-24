import type { IllustrationId } from "./illustrations";

export interface PersonWithTelugu {
  readonly title: string;
  readonly titleTelugu: string;
  readonly name: string;
  readonly nameTelugu: string;
  readonly qualification: string;
}

export interface ParentPair {
  readonly father: string;
  readonly mother: string;
  readonly fatherTelugu: string;
  readonly motherTelugu: string;
}

export interface MuhurthamDetails {
  readonly title: string;
  readonly dateDisplay: string;
  readonly dateShort: string;
  readonly iso: string;
  readonly day: string;
  readonly dayTelugu: string;
  readonly time: string;
  readonly timeTelugu: string;
  readonly samvatsara: string;
  readonly samvatsaraTelugu: string;
  readonly tithi: string;
  readonly tithiTelugu: string;
  readonly nakshatram: string;
  readonly nakshatramTelugu: string;
  readonly lagnam: string;
  readonly lagnamTelugu: string;
  readonly venue: string;
  readonly blessingIntro: string;
  readonly quote: string;
}

export interface VenueDetails {
  readonly name: string;
  readonly nameTelugu: string;
  readonly address: string;
  readonly addressTelugu: string;
  readonly city: string;
  readonly district: string;
  readonly state: string;
  readonly mapsUrl: string;
  readonly mapsQuery: string;
}

export interface CeremonyDetails {
  readonly id: string;
  readonly title: string;
  readonly titleTelugu: string;
  readonly subtitle: string;
  readonly date: string;
  readonly day: string;
  readonly time: string;
  readonly timeTelugu: string;
  readonly venue: string;
  readonly illustration: IllustrationId;
  readonly image?: string;
}

export interface InvitationData {
  readonly auspiciousGreeting: {
    readonly telugu: string;
    readonly english: string;
  };
  readonly groom: PersonWithTelugu & {
    readonly hometown: string;
    readonly hometownTelugu: string;
  };
  readonly bride: PersonWithTelugu & {
    readonly hometown: string;
    readonly hometownTelugu: string;
  };
  readonly family: {
    readonly name: string;
    readonly nameTelugu: string;
  };
  readonly parents: {
    readonly groom: ParentPair;
    readonly bride: ParentPair;
    readonly brideGrandparents: {
      readonly grandfather: string;
      readonly grandmother: string;
      readonly grandfatherTelugu: string;
      readonly grandmotherTelugu: string;
    };
    readonly elderBlessings: {
      readonly names: string;
      readonly namesTelugu: string;
    };
  };
  readonly muhurtham: MuhurthamDetails;
  readonly venue: VenueDetails;
  readonly ceremonies: {
    readonly kalyanam: CeremonyDetails;
    readonly reception: CeremonyDetails;
  };
  readonly hero: {
    readonly subtitle: string;
    readonly exploreTargetId: string;
    readonly ctaLabel: string;
  };
  readonly blessings: {
    readonly opening: string;
    readonly invitation: string;
    readonly coupleQuote: string;
    readonly wishesSection: string;
    readonly locationFooter: string;
    readonly closing: string;
    readonly closingTelugu: string;
  };
  readonly sections: {
    readonly celebrations: { readonly subtitle: string };
    readonly location: { readonly subtitle: string };
    readonly couple: {
      readonly label: string;
      readonly title: string;
      readonly unionQuote: string;
    };
  };
  readonly footer: {
    readonly blessings: string;
    readonly emotionalNote: string;
    readonly copyright: string;
  };
  readonly contact: readonly {
    readonly id: "phone" | "email";
    readonly label: string;
    readonly value: string;
    readonly href: string;
  }[];
  readonly illustrations: {
    readonly mandala: string;
    readonly groomPortrait: IllustrationId;
    readonly bridePortrait: IllustrationId;
    readonly sacredCeremony: IllustrationId;
    readonly reception: IllustrationId;
  };
  readonly design: {
    readonly invitationPink: string;
  };
}
