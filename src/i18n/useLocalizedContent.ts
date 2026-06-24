"use client";

import { useMemo } from "react";

import { INVITATION_DATA } from "@/content/invitation.data";

import { useLanguage } from "./LanguageContext";

/** Pick English or Telugu field from invitation data objects. */
export function pickLocalized<T extends string>(
  english: T,
  telugu: T,
  isTelugu: boolean,
): T {
  return isTelugu ? telugu : english;
}

export function useLocalizedInvitation() {
  const { isTelugu } = useLanguage();

  return useMemo(() => {
    const data = INVITATION_DATA;
    return {
      auspiciousGreeting: pickLocalized(
        data.auspiciousGreeting.english,
        data.auspiciousGreeting.telugu,
        isTelugu,
      ),
      groomTitle: pickLocalized(data.groom.title, data.groom.titleTelugu, isTelugu),
      brideTitle: pickLocalized(data.bride.title, data.bride.titleTelugu, isTelugu),
      groomName: pickLocalized(data.groom.name, data.groom.nameTelugu, isTelugu),
      brideName: pickLocalized(data.bride.name, data.bride.nameTelugu, isTelugu),
      groomQualification: data.groom.qualification,
      brideQualification: data.bride.qualification,
      brideHometown: pickLocalized(data.bride.hometown, data.bride.hometownTelugu, isTelugu),
      groomHometown: pickLocalized(data.groom.hometown, data.groom.hometownTelugu, isTelugu),
      groomParents: {
        father: pickLocalized(
          data.parents.groom.father,
          data.parents.groom.fatherTelugu,
          isTelugu,
        ),
        mother: pickLocalized(
          data.parents.groom.mother,
          data.parents.groom.motherTelugu,
          isTelugu,
        ),
      },
      brideParents: {
        father: pickLocalized(
          data.parents.bride.father,
          data.parents.bride.fatherTelugu,
          isTelugu,
        ),
        mother: pickLocalized(
          data.parents.bride.mother,
          data.parents.bride.motherTelugu,
          isTelugu,
        ),
      },
      elderBlessings: pickLocalized(
        data.parents.elderBlessings.names,
        data.parents.elderBlessings.namesTelugu,
        isTelugu,
      ),
      muhurthamDay: pickLocalized(data.muhurtham.day, data.muhurtham.dayTelugu, isTelugu),
      muhurthamTime: pickLocalized(data.muhurtham.time, data.muhurtham.timeTelugu, isTelugu),
      samvatsara: pickLocalized(
        data.muhurtham.samvatsara,
        data.muhurtham.samvatsaraTelugu,
        isTelugu,
      ),
      tithi: pickLocalized(data.muhurtham.tithi, data.muhurtham.tithiTelugu, isTelugu),
      nakshatram: pickLocalized(
        data.muhurtham.nakshatram,
        data.muhurtham.nakshatramTelugu,
        isTelugu,
      ),
      lagnam: pickLocalized(data.muhurtham.lagnam, data.muhurtham.lagnamTelugu, isTelugu),
      venueName: pickLocalized(data.venue.name, data.venue.nameTelugu, isTelugu),
      venueAddress: pickLocalized(data.venue.address, data.venue.addressTelugu, isTelugu),
      venueCityLine: isTelugu
        ? `${data.venue.city}, ${data.venue.district}, ${data.venue.state}`
        : `${data.venue.city}, ${data.venue.district}, ${data.venue.state}`,
      weddingDateDisplay: data.muhurtham.dateDisplay,
      weddingDateIso: data.muhurtham.iso,
    };
  }, [isTelugu]);
}

export function useLocalizedMuhurtham() {
  const { t, isTelugu } = useLanguage();
  const inv = useLocalizedInvitation();

  return useMemo(
    () => ({
      title: t.muhurtham.title,
      date: inv.weddingDateDisplay,
      day: inv.muhurthamDay,
      time: inv.muhurthamTime,
      samvatsara: inv.samvatsara,
      tithi: inv.tithi,
      nakshatram: inv.nakshatram,
      lagnam: inv.lagnam,
      venue: isTelugu
        ? `${inv.venueName}, ${inv.venueAddress}`
        : INVITATION_DATA.muhurtham.venue,
      blessingIntro: t.muhurtham.blessingIntro,
      quote: t.muhurtham.quote,
    }),
    [t, inv, isTelugu],
  );
}

export function useLocalizedCelebrationEvents() {
  const { t, isTelugu } = useLanguage();
  const inv = useLocalizedInvitation();
  const { kalyanam, reception } = INVITATION_DATA.ceremonies;

  return useMemo(
    () => [
      {
        id: "kalyanam" as const,
        title: t.celebrations.kalyanam.title,
        subtitle: t.celebrations.kalyanam.subtitle,
        date: kalyanam.date,
        time: inv.muhurthamTime,
        venue: isTelugu ? `${inv.venueName}, ${inv.venueAddress}` : kalyanam.venue,
        gradient: { from: "maroon" as const, via: "gold" as const, to: "navy" as const },
        accent: "maroon" as const,
        illustration: kalyanam.illustration,
      },
      {
        id: "reception" as const,
        title: t.celebrations.reception.title,
        subtitle: t.celebrations.reception.subtitle,
        date: reception.date,
        time: pickLocalized(reception.time, reception.timeTelugu, isTelugu),
        venue: t.celebrations.reception.venue,
        gradient: { from: "gold" as const, via: "champagne" as const, to: "maroon" as const },
        accent: "gold" as const,
        illustration: reception.illustration,
        image: reception.image,
      },
    ],
    [t, inv, isTelugu],
  );
}

export function useLocalizedLocationDetails() {
  const { t, isTelugu } = useLanguage();
  const inv = useLocalizedInvitation();
  const { muhurtham, ceremonies } = INVITATION_DATA;

  return useMemo(
    () => [
      {
        label: t.location.kalyanamLabel,
        value: `${inv.muhurthamDay}, ${muhurtham.dateDisplay} — ${inv.muhurthamTime}`,
      },
      {
        label: t.location.vinduLabel,
        value: `${ceremonies.reception.day}, ${ceremonies.reception.date} — ${pickLocalized(ceremonies.reception.time, ceremonies.reception.timeTelugu, isTelugu)}`,
      },
      {
        label: t.common.venue,
        value: inv.venueName,
      },
    ],
    [t, inv, isTelugu],
  );
}

export function useLocalizedCouple() {
  const { t } = useLanguage();
  const inv = useLocalizedInvitation();
  const { illustrations } = INVITATION_DATA;

  return useMemo(
    () => ({
      groom: {
        id: "groom" as const,
        name: inv.groomName,
        title: inv.groomTitle,
        qualification: inv.groomQualification,
        role: t.couple.groomRole,
        tagline: `${inv.groomQualification} ·  ${inv.groomHometown.split(",")[0]?.trim() ?? inv.groomHometown}`,
        illustration: illustrations.groomPortrait,
      },
      bride: {
        id: "bride" as const,
        name: inv.brideName,
        title: inv.brideTitle,
        qualification: inv.brideQualification,
        role: t.couple.brideRole,
        tagline: `${inv.brideQualification} · ${inv.brideHometown.split(",")[0]?.trim() ?? inv.brideHometown}`,
        illustration: illustrations.bridePortrait,
      },
      sectionLabel: t.couple.label,
      sectionTitle: t.couple.title,
      unionQuote: t.couple.unionQuote,
      coupleQuote: t.couple.coupleQuote,
      parents: {
        groom: {
          label: t.couple.groomParentsLabel,
          father: inv.groomParents.father,
          mother: inv.groomParents.mother,
        },
        bride: {
          label: t.couple.brideParentsLabel,
          father: inv.brideParents.father,
          mother: inv.brideParents.mother,
        },
        elderBlessings: inv.elderBlessings,
      },
    }),
    [t, inv],
  );
}
