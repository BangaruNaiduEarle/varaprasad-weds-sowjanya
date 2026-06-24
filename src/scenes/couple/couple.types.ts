import type { IllustrationId } from "@/content/illustrations";

export interface CoupleMember {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly qualification: string;
  readonly role: string;
  readonly tagline: string;
  readonly illustration: IllustrationId;
}

export interface ParentDisplay {
  readonly label: string;
  readonly father: string;
  readonly mother: string;
}

export interface CoupleConfig {
  readonly groom: CoupleMember;
  readonly bride: CoupleMember;
  readonly unionQuote: string;
  readonly sectionLabel: string;
  readonly sectionTitle: string;
  readonly coupleQuote: string;
  readonly parents: {
    readonly groom: ParentDisplay;
    readonly bride: ParentDisplay;
    readonly elderBlessings: string;
  };
}
