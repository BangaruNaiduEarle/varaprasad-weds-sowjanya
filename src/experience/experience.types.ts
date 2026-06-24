import type { ReactNode } from "react";

import type { DockItemId } from "@/components/dock/dock.types";

export interface ExperienceChapter {
  readonly id: string;
  readonly dockId: DockItemId;
  readonly title: string;
  readonly label: string;
}

export interface ExperienceContextValue {
  readonly activeChapterIndex: number;
  readonly chapterProgress: number;
  readonly chapters: readonly ExperienceChapter[];
  readonly scrollToChapter: (dockId: DockItemId) => void;
}

export interface SceneChapterProps {
  readonly chapterIndex: number;
  readonly children: ReactNode;
}

export interface StoryProgressProps {
  readonly activeIndex: number;
  readonly progress: number;
  readonly total: number;
}

export interface CinematicCurtainProps {
  readonly chapterIndex: number;
}
