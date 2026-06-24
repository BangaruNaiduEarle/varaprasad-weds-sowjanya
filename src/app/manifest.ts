import type { MetadataRoute } from "next";

import {
  FAVICON_PATH,
  MANIFEST_DESCRIPTION,
  MANIFEST_NAME,
  MANIFEST_SHORT_NAME,
  THEME_COLOR,
} from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: MANIFEST_NAME,
    short_name: MANIFEST_SHORT_NAME,
    description: MANIFEST_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8F0",
    theme_color: THEME_COLOR,
    icons: [
      {
        src: FAVICON_PATH,
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
