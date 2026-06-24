import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import {
  Cinzel,
  Cormorant_Garamond,
  Great_Vibes,
  Noto_Sans_Telugu,
  Noto_Serif_Telugu,
  Poppins,
} from "next/font/google";

import { Cursor } from "@/components/cursor";
import {
  APPLE_WEB_APP_TITLE,
  FAVICON_PATH,
  OG_DESCRIPTION,
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  OG_SITE_NAME,
  OG_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_URL,
  THEME_COLOR,
  TWITTER_DESCRIPTION,
  TWITTER_TITLE,
} from "@/config/seo";
import { rootCssVariables } from "@/styles/theme";
import "@/styles/globals.css";

import { Providers } from "./providers";

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const section = Cinzel({
  variable: "--font-section",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const teluguHeading = Noto_Serif_Telugu({
  variable: "--font-telugu-heading",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

const teluguBody = Noto_Sans_Telugu({
  variable: "--font-telugu-body",
  subsets: ["telugu"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: OG_SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: OG_SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE_PATH,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: TWITTER_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APPLE_WEB_APP_TITLE,
  },
  icons: {
    icon: FAVICON_PATH,
    apple: FAVICON_PATH,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: THEME_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${script.variable} ${heading.variable} ${section.variable} ${body.variable} ${teluguHeading.variable} ${teluguBody.variable} h-full`}
      style={rootCssVariables as CSSProperties}
    >
      <body className="experience-body min-h-dvh overflow-hidden">
        <Cursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
