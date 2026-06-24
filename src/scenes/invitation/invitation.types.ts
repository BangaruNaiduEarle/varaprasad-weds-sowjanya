export interface InvitationConfig {
  readonly groomName: string;
  readonly brideName: string;
  readonly weddingDateIso: string;
  readonly weddingDateDisplay: string;
  readonly heroSubtitle: string;
  readonly auspiciousGreeting: string;
  readonly exploreTargetId: string;
  readonly ctaLabel: string;
}

export interface CountdownValues {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly isComplete: boolean;
}

export interface AmbientParticle {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly size: number;
  readonly duration: number;
  readonly delay: number;
}

export interface FloatingPetal {
  readonly id: number;
  readonly x: number;
  readonly startY: number;
  readonly size: number;
  readonly duration: number;
  readonly delay: number;
  readonly rotation: number;
}

export interface MarigoldPlacement {
  readonly id: number;
  readonly x: string;
  readonly y: string;
  readonly scale: number;
  readonly rotation: number;
  readonly delay: number;
}

export interface TextRevealVariant {
  readonly hidden: {
    readonly opacity: number;
    readonly y: number;
    readonly filter: string;
  };
  readonly visible: {
    readonly opacity: number;
    readonly y: number;
    readonly filter: string;
    readonly transition: {
      readonly duration: number;
      readonly ease: readonly [number, number, number, number];
    };
  };
}
