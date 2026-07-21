import type { Metadata } from 'next';

export const SITE_URL = 'https://www.switchiify.com';
export const SITE_NAME = 'Switchiify';

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}): Metadata {
  const canonical = path === '/' ? '/' : path;
  const url = `${SITE_URL}${canonical}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ogImage = image ?? { url: `${SITE_URL}/opengraph-image.png`, alt: fullTitle };
  const twitterImage = image ? image.url : `${SITE_URL}/twitter-image.png`;

  return {
    // Resolved as an absolute string (bypassing the root layout's title
    // template) since Next's template inheritance only reaches one layout
    // level deep, and several pages here sit two levels below root
    // (e.g. research/robotics under research/).
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: ogImage.url, width: 1200, height: 630, alt: ogImage.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [twitterImage],
    },
  };
}
