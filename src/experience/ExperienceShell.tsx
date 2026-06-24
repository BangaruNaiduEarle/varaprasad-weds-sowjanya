"use client";

import { GlobalAmbient } from "@/components/ambient";
import { Dock } from "@/components/dock";

import { CinematicCurtain } from "./CinematicCurtain";
import {
  CHAPTER_AMBIENT_INTENSITY,
  EXPERIENCE_CHAPTERS,
  EXPERIENCE_SCROLL_ID,
} from "./experience.config";
import { ExperienceProvider, useExperience } from "./ExperienceProvider";
import { SceneChapter } from "./SceneChapter";
import { StoryProgress } from "./StoryProgress";
import { useLanguage } from "@/i18n";

function ExperienceChrome({ children }: { readonly children: React.ReactNode }) {
  const { activeChapterIndex, chapterProgress, scrollToChapter } =
    useExperience();
  const { localeClass } = useLanguage();
  const ambient =
    CHAPTER_AMBIENT_INTENSITY[activeChapterIndex] ??
    CHAPTER_AMBIENT_INTENSITY[0];

  return (
    <>
      {/* <GlobalAmbient intensity={ambient} /> */}
      <StoryProgress
        activeIndex={activeChapterIndex}
        progress={chapterProgress}
        total={EXPERIENCE_CHAPTERS.length}
      />
      <CinematicCurtain chapterIndex={activeChapterIndex} />

      <div
        id={EXPERIENCE_SCROLL_ID}
        className={`experience-scroll fixed inset-0 overflow-x-hidden overflow-y-auto snap-y snap-mandatory ${localeClass}`}
      >
        {children}
      </div>

      <Dock
        activeId={EXPERIENCE_CHAPTERS[activeChapterIndex]?.dockId}
        onNavigate={(item) => {
          scrollToChapter(item.id);
        }}
      />
    </>
  );
}

export function ExperienceShell({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ExperienceProvider>
      <ExperienceChrome>{children}</ExperienceChrome>
    </ExperienceProvider>
  );
}

export { SceneChapter };
