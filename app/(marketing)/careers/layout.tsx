import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Careers',
  description: "Build the future with us. We're a team of builders, dreamers, and engineers working across gaming, AI, and business infrastructure — from Kigali to the world.",
  path: '/careers',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
