"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MandalaBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.14) 0%, rgba(255,248,240,0) 58%)",
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 240,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src="/images/illustrations/mandala.jpg"
          alt=""
          width={1400}
          height={1400}
          loading="eager"
          priority
          className="h-[92vh] w-auto object-contain opacity-[0.07] blur-[0.5px] contrast-[1.08] saturate-[1.15]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{
          duration: 180,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src="/images/illustrations/mandala.jpg"
          alt=""
          width={1000}
          height={1000}
          loading="lazy"
          className="h-[74vh] w-auto object-contain opacity-[0.045] blur-px contrast-[1.05]"
        />
      </motion.div>

      <div
        className="absolute left-1/2 top-1/2 h-[min(520px,72vw)] w-[min(520px,72vw)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(250,214,196,0.12) 42%, transparent 72%)",
        }}
      />
    </div>
  );
}
