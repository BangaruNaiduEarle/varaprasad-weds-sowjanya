import type { CountdownValues } from "./invitation.types";

export function computeCountdown(targetIso: string): CountdownValues {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const distance = target - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

export function scrollToSection(sectionId: string): void {
  const target = document.getElementById(sectionId);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function padCountdownUnit(value: number): string {
  return String(value).padStart(2, "0");
}
