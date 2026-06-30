"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useLanguage } from "@/i18n";
import { colors } from "@/styles/theme";

import { VIDEO_CONFIG } from "./video.config";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function VideoExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { t } = useLanguage();

  const play = useCallback(async (): Promise<void> => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback((): void => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback((): void => {
    if (isPlaying) {
      pause();
      return;
    }

    void play();
  }, [isPlaying, pause, play]);

  const toggleMute = useCallback((): void => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleSeek = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      const time = Number(event.target.value);

      video.currentTime = time;
      setCurrentTime(time);
    },
    [],
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const onTimeUpdate = (): void => {
      setCurrentTime(video.currentTime);
    };

    const onLoadedMetadata = (): void => {
      setDuration(video.duration);
    };

    const onEnded = (): void => {
      setIsPlaying(false);
    };

    const onPlay = (): void => {
      setIsPlaying(true);
    };

    const onPause = (): void => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id="video"
      aria-label={t.video.ariaLabel}
      className="relative flex min-h-dvh snap-start flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-16 sm:pb-36"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, color-mix(in srgb, ${colors.maroon} 15%, ${colors.navy}) 0%, ${colors.navy} 60%),
            ${colors.navy}
          `,
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-8 text-center sm:mb-10"
      >
        <p className="font-section text-[10px] uppercase tracking-[0.3em] text-gold opacity-80">
          {t.video.label}
        </p>
        <h2 className="font-script mt-2 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-ivory">
          {t.video.title}
        </h2>
        <p className="font-body mt-3 text-sm font-light text-champagne opacity-90">
          {t.video.subtitle}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div
          className="absolute -inset-4 rounded-theme-2xl opacity-40 blur-2xl"
          style={{
            background: `radial-gradient(ellipse, color-mix(in srgb, ${colors.gold} 30%, transparent) 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div
          className="relative overflow-hidden rounded-theme-xl"
          style={{
            border: `2px solid color-mix(in srgb, ${colors.gold} 50%, transparent)`,
            boxShadow: `0 0 48px color-mix(in srgb, ${colors.gold} 20%, transparent), inset 0 0 0 1px color-mix(in srgb, ${colors.yellow} 15%, transparent)`,
          }}
        >
          <div className="group relative aspect-video w-full bg-navy">
            <video
              ref={videoRef}
              src={VIDEO_CONFIG.videoUrl}
              title={t.video.title}
              playsInline
              preload="metadata"
              className="absolute inset-0 size-full object-cover"
            />

            <AnimatePresence>
              {!isPlaying ? (
                <>
                  <motion.div
                    key="video-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, color-mix(in srgb, ${colors.navy} 80%, transparent) 0%, color-mix(in srgb, ${colors.navy} 30%, transparent) 50%, transparent 100%)`,
                    }}
                  />
                  <motion.button
                    key="video-play"
                    type="button"
                    data-cursor="button"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => {
                      void play();
                    }}
                    className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-20"
                    style={{
                      background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
                      boxShadow: `0 0 32px color-mix(in srgb, ${colors.gold} 50%, transparent)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t.video.playLabel}
                  >
                    <Play
                      size={28}
                      fill={colors.maroon}
                      stroke={colors.maroon}
                      className="ml-1"
                    />
                  </motion.button>
                </>
              ) : null}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: isPlaying ? 1 : 0,
                y: isPlaying ? 0 : 12,
              }}
              transition={{ duration: 0.25 }}
              className={`absolute inset-x-0 bottom-0 px-3 pb-3 pt-8 sm:px-4 sm:pb-4 ${
                isPlaying ? "pointer-events-auto" : "pointer-events-none"
              }`}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="flex items-center gap-2 px-2 py-2 sm:gap-3 sm:px-3">
                <motion.button
                  type="button"
                  data-cursor="button"
                  onClick={togglePlay}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-10"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
                    boxShadow: `0 0 16px color-mix(in srgb, ${colors.gold} 35%, transparent)`,
                  }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={isPlaying ? "Pause video" : t.video.playLabel}
                >
                  {isPlaying ? (
                    <Pause size={16} fill={colors.maroon} stroke={colors.maroon} />
                  ) : (
                    <Play
                      size={16}
                      fill={colors.maroon}
                      stroke={colors.maroon}
                      className="ml-0.5"
                    />
                  )}
                </motion.button>

                <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                  <span className="hidden shrink-0 font-body text-[10px] tabular-nums text-champagne sm:inline">
                    {formatTime(currentTime)}
                  </span>

                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    aria-label="Seek video"
                    className="video-progress h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full outline-none"
                    style={{
                      background: `linear-gradient(to right, ${colors.gold} ${progress}%, color-mix(in srgb, ${colors.ivory} 18%, transparent) ${progress}%)`,
                    }}
                  />

                  <span className="hidden shrink-0 font-body text-[10px] tabular-nums text-champagne opacity-70 sm:inline">
                    {formatTime(duration)}
                  </span>
                </div>

                <motion.button
                  type="button"
                  data-cursor="button"
                  onClick={toggleMute}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-9"
                  style={{
                    color: colors.champagne,
                  }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
