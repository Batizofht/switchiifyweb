import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Switchiify",
    short_name: "Switchiify",

    description: "Switchiify Platforms Inc. is a technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#000000",

    orientation: "portrait",

    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
