import type { Metadata } from "next";
import { OG_IMAGE_ALT, SITE_NAME } from "./site";

/**
 * Shared metadata for a route. The root layout supplies the title template;
 * pass a short page title here and it becomes "Title — Atik Hasan Anik".
 */
export const pageMetadata = (
  title: string,
  description: string,
  path: string,
): Metadata => {
  const fullTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@atikhasananik06",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
  };
};
