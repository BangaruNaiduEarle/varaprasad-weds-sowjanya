"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/i18n";

import type { MuhurthamData } from "../muhurtham.config";

import { BorderGlow, LotusDivider, MandalaLayers } from "./InvitationDecor";

import "./muhurtham-invitation.css";

export interface MuhurthamInvitationCardProps {
  readonly data: MuhurthamData;
}

function SacredHeader({ label }: { readonly label: string }) {
  return (
    <p className="muhurtham-invitation__sacred-header font-section">
      ॐ &nbsp; {label} &nbsp; ॐ
    </p>
  );
}

function TitleBlock({ title }: { readonly title: string }) {
  return <h2 className="muhurtham-invitation__title font-section">{title}</h2>;
}

function DateBlock({ day, date }: { readonly day: string; readonly date: string }) {
  return (
    <div className="muhurtham-invitation__date-block">
      <p className="muhurtham-invitation__date-day font-body">{day}</p>
      <p className="muhurtham-invitation__date-value font-heading">{date}</p>
    </div>
  );
}

function TimeHero({
  time,
  muhurthamLabel,
  auspiciousHour,
  className = "",
}: {
  readonly time: string;
  readonly muhurthamLabel: string;
  readonly auspiciousHour: string;
  readonly className?: string;
}) {
  return (
    <div className={`muhurtham-invitation__time-hero ${className}`.trim()}>
      <p className="muhurtham-invitation__time-label font-section">{muhurthamLabel}</p>
      <p className="muhurtham-invitation__time-value font-heading">{time}</p>
      <p className="muhurtham-invitation__time-sub font-body">{auspiciousHour}</p>
    </div>
  );
}

function DetailRow({
  label,
  value,
  emphasis = "default",
}: {
  readonly label: string;
  readonly value: string;
  readonly emphasis?: "default" | "highlight" | "venue";
}) {
  return (
    <div
      className={`muhurtham-invitation__detail-block muhurtham-invitation__detail-block--${emphasis}`}
    >
      <p className="muhurtham-invitation__detail-label font-section">{label}</p>
      <p className="muhurtham-invitation__detail-value font-heading">{value}</p>
    </div>
  );
}

function BlessingFooter({
  intro,
  quote,
}: {
  readonly intro: string;
  readonly quote: string;
}) {
  return (
    <div className="muhurtham-invitation__blessing">
      <LotusDivider className="muhurtham-invitation__blessing-divider" />
      <p className="muhurtham-invitation__blessing-intro font-heading">{intro}</p>
      <p className="muhurtham-invitation__blessing-quote font-body">{quote}</p>
    </div>
  );
}

function PortraitLayout({
  data,
  labels,
}: {
  readonly data: MuhurthamData;
  readonly labels: DetailLabels;
}) {
  return (
    <div className="muhurtham-invitation__portrait-body">
      <SacredHeader label={labels.sacredHeader} />
      <TitleBlock title={data.title} />
      <LotusDivider />
      <DateBlock day={data.day} date={data.date} />
      <TimeHero
        time={data.time}
        muhurthamLabel={labels.muhurthamLabel}
        auspiciousHour={labels.auspiciousHour}
      />
      <LotusDivider />
      <DetailRow label={labels.samvatsaram} value={data.samvatsara} />
      <DetailRow label={labels.tithi} value={data.tithi} />
      <DetailRow label={labels.nakshatram} value={data.nakshatram} emphasis="highlight" />
      <DetailRow label={labels.lagnam} value={data.lagnam} emphasis="highlight" />
      <LotusDivider className="muhurtham-invitation__venue-divider" />
      <DetailRow label={labels.venue} value={data.venue} emphasis="venue" />
      <BlessingFooter intro={data.blessingIntro} quote={data.quote} />
    </div>
  );
}

function LandscapeLayout({
  data,
  labels,
}: {
  readonly data: MuhurthamData;
  readonly labels: DetailLabels;
}) {
  return (
    <div className="muhurtham-invitation__landscape-body">
      <div className="muhurtham-invitation__landscape-left">
        <SacredHeader label={labels.sacredHeader} />
        <TitleBlock title={data.title} />
        <DateBlock day={data.day} date={data.date} />
        <TimeHero
          time={data.time}
          muhurthamLabel={labels.muhurthamLabel}
          auspiciousHour={labels.auspiciousHour}
          className="muhurtham-invitation__time-hero--landscape"
        />
      </div>

      <div className="muhurtham-invitation__landscape-right">
        <DetailRow label={labels.samvatsaram} value={data.samvatsara} />
        <DetailRow label={labels.tithi} value={data.tithi} />
        <DetailRow label={labels.nakshatram} value={data.nakshatram} emphasis="highlight" />
        <DetailRow label={labels.lagnam} value={data.lagnam} emphasis="highlight" />
        <LotusDivider className="muhurtham-invitation__venue-divider" />
        <DetailRow label={labels.venue} value={data.venue} emphasis="venue" />
        <BlessingFooter intro={data.blessingIntro} quote={data.quote} />
      </div>
    </div>
  );
}

interface DetailLabels {
  readonly sacredHeader: string;
  readonly muhurthamLabel: string;
  readonly auspiciousHour: string;
  readonly samvatsaram: string;
  readonly tithi: string;
  readonly nakshatram: string;
  readonly lagnam: string;
  readonly venue: string;
}

/**
 * Experimental premium Muhurtham invitation card.
 * Content-first hierarchy — time as hero, minimal decorative noise.
 */
export function MuhurthamInvitationCard({ data }: MuhurthamInvitationCardProps) {
  const { t } = useLanguage();
  const labels: DetailLabels = {
    sacredHeader: t.muhurtham.sacredHeader,
    muhurthamLabel: t.muhurtham.muhurthamLabel,
    auspiciousHour: t.muhurtham.auspiciousHour,
    samvatsaram: t.muhurtham.samvatsaram,
    tithi: t.muhurtham.tithi,
    nakshatram: t.muhurtham.nakshatram,
    lagnam: t.muhurtham.lagnam,
    venue: t.muhurtham.venue,
  };

  return (
    <article className="muhurtham-invitation">
      <div className="muhurtham-invitation__shell">
        <BorderGlow />

        <motion.div
          className="muhurtham-invitation__card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="muhurtham-invitation__inner-frame" aria-hidden="true" />
          <MandalaLayers />

          <PortraitLayout data={data} labels={labels} />
          <LandscapeLayout data={data} labels={labels} />
        </motion.div>
      </div>
    </article>
  );
}
