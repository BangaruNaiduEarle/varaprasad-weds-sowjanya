"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { colors } from "@/styles/theme";

import { MEMORY_ASPECT_CLASS } from "./memories.types";
import type { MemoryPhotoCardProps } from "./memories.types";
import { memoryPhotoGradient, polaroidShadow } from "./memories.utils";
import type { MemoryItem } from "./memories.types";

export function MemoryPhotoCard({ memory, index, onOpen }: MemoryPhotoCardProps) {
  const aspectClass = MEMORY_ASPECT_CLASS[memory.aspect];

  return (
    <motion.article
      data-cursor="card"
      className="mb-5 break-inside-avoid sm:mb-6"
      style={{ rotate: `${memory.rotate}deg` }}
      initial={{ opacity: 0, y: 40, scale: 0.94, rotate: memory.rotate - 4 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: memory.rotate,
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -10,
        rotate: memory.rotate * 0.4,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(memory)}
        className="group relative w-full cursor-pointer overflow-hidden rounded-theme-lg p-2.5 pb-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-3 sm:pb-6"
        style={{
          backgroundColor: colors.ivory,
          boxShadow: polaroidShadow(),
          border: `1px solid color-mix(in srgb, ${colors.gold} 20%, transparent)`,
        }}
        whileHover={{ boxShadow: polaroidShadow(true) }}
        aria-label={`View photo ${memory.id}`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-theme-md ${aspectClass}`}
          style={{ background: memoryPhotoGradient(memory.gradient) }}
        >
          <Image
            src={memory.src}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover"
            priority={index < 2}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, color-mix(in srgb, ${colors.maroon} 20%, transparent) 0%, transparent 45%)`,
            }}
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-opacity duration-300 group-hover:bg-navy/20 group-hover:opacity-100">
            <ZoomIn size={28} stroke={colors.gold} className="drop-shadow-lg" />
          </div>
        </div>
      </motion.button>
    </motion.article>
  );
}

function LightboxModal({
  memory,
  onClose,
}: {
  readonly memory: MemoryItem;
  readonly onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const aspectClass = MEMORY_ASPECT_CLASS[memory.aspect];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "color-mix(in srgb, var(--color-navy) 85%, transparent)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${memory.id}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-h-[90dvh] w-full max-w-lg overflow-hidden rounded-theme-xl"
        style={{
          background: colors.ivory,
          border: `2px solid color-mix(in srgb, ${colors.gold} 45%, transparent)`,
          boxShadow: `0 24px 64px color-mix(in srgb, ${colors.gold} 20%, transparent)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
          style={{ background: `color-mix(in srgb, ${colors.navy} 60%, transparent)` }}
          aria-label="Close"
        >
          <X size={20} stroke={colors.ivory} />
        </button>

        <div className={`relative w-full ${aspectClass}`}>
          <Image
            src={memory.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function useGalleryLightbox() {
  const [selected, setSelected] = useState<MemoryItem | null>(null);

  const open = useCallback((memory: MemoryItem) => setSelected(memory), []);
  const close = useCallback(() => setSelected(null), []);

  const modal = (
    <AnimatePresence>
      {selected ? (
        <LightboxModal memory={selected} onClose={close} />
      ) : null}
    </AnimatePresence>
  );

  return { open, modal };
}
