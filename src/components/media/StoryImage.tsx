import Image from "next/image";

import type { IllustrationId } from "@/content/illustrations";
import { getIllustration } from "@/content/illustrations";

export interface StoryImageProps {
  readonly illustrationId: IllustrationId;
  readonly priority?: boolean;
  readonly className?: string;
}

export function StoryImage({
  illustrationId,
  priority = false,
  className = "",
}: StoryImageProps) {
  const { src, alt } = getIllustration(illustrationId);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 640px) 90vw, 480px"
      className={`object-cover ${className}`}
    />
  );
}
