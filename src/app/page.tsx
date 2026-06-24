"use client";

import { ExperienceShell, SceneChapter } from "@/experience";
import { SiteFooter } from "@/components/footer";
import { CelebrationsExperience } from "@/scenes/celebrations";
import { CoupleExperience } from "@/scenes/couple";
import { InvitationExperience } from "@/scenes/invitation";
import { JourneyExperience } from "@/scenes/journey";
import { LocationExperience } from "@/scenes/location";
import { MemoriesExperience } from "@/scenes/memories";
import { MuhurthamExperience } from "@/scenes/muhurtham";
import { VideoExperience } from "@/scenes/video";
import { WishesExperience } from "@/scenes/wishes";

export default function Home() {
  return (
    <ExperienceShell>
      <SceneChapter chapterIndex={0}>
        <InvitationExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={0}>
        <CoupleExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={1}>
        <JourneyExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={1}>
        <MuhurthamExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={2}>
        <CelebrationsExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={3}>
        <MemoriesExperience />
      </SceneChapter>
      {/* <SceneChapter chapterIndex={3}>
        <VideoExperience />
      </SceneChapter> */}
      {/* <SceneChapter chapterIndex={4}>
        <WishesExperience />
      </SceneChapter> */}
      <SceneChapter chapterIndex={5}>
        <LocationExperience />
      </SceneChapter>
      <SiteFooter />
    </ExperienceShell>
  );
}
