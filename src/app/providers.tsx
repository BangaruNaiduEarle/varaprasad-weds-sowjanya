"use client";

import type { ReactNode } from "react";

import { LanguageProvider } from "@/i18n";

export function Providers({ children }: { readonly children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
