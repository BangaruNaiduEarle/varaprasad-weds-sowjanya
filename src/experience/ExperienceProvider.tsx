"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { DockItemId } from "@/components/dock/dock.types";

import {
  EXPERIENCE_CHAPTERS,
  EXPERIENCE_SCROLL_ID,
} from "./experience.config";
import type { ExperienceContextValue } from "./experience.types";

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience(): ExperienceContextValue {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }

  return context;
}

export function useExperienceOptional(): ExperienceContextValue | null {
  return useContext(ExperienceContext);
}

export function ExperienceProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [chapterProgress, setChapterProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToChapter = useCallback((dockId: DockItemId): void => {
    const chapter = EXPERIENCE_CHAPTERS.find((item) => item.dockId === dockId);

    if (!chapter) {
      return;
    }

    document.getElementById(chapter.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const setupObserver = (): void => {
      const root = document.getElementById(EXPERIENCE_SCROLL_ID);

      if (!root) {
        return;
      }

      observerRef.current?.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length === 0) {
            return;
          }

          const index = Number(
            visible[0].target.getAttribute("data-scene-chapter"),
          );

          if (!Number.isNaN(index)) {
            setActiveChapterIndex(index);
          }
        },
        {
          root,
          threshold: [0.35, 0.55, 0.75],
          rootMargin: "-8% 0px -8% 0px",
        },
      );

      EXPERIENCE_CHAPTERS.forEach((chapter) => {
        const element = document.getElementById(chapter.id);

        if (element) {
          observerRef.current?.observe(element);
        }
      });
    };

    setupObserver();
    const timerId = window.setTimeout(setupObserver, 150);

    return () => {
      window.clearTimeout(timerId);
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById(EXPERIENCE_SCROLL_ID);

    if (!container) {
      return;
    }

    const handleScroll = (): void => {
      const activeChapter = EXPERIENCE_CHAPTERS[activeChapterIndex];

      if (!activeChapter) {
        return;
      }

      const element = document.getElementById(activeChapter.id);

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const visibleTop = containerRect.top;
      const traveled = Math.min(
        Math.max(visibleTop - rect.top, 0),
        rect.height,
      );
      const progress = rect.height > 0 ? traveled / rect.height : 0;

      setChapterProgress(Math.min(Math.max(progress, 0), 1));
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeChapterIndex]);

  const value = useMemo<ExperienceContextValue>(
    () => ({
      activeChapterIndex,
      chapterProgress,
      chapters: EXPERIENCE_CHAPTERS,
      scrollToChapter,
    }),
    [activeChapterIndex, chapterProgress, scrollToChapter],
  );

  return (
    <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>
  );
}
