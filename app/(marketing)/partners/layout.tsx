import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Partnership Program',
  description: 'Grow with Switchiify — become a Technology, Solutions, or Reseller partner and build with Gamingar, Neuro AI, and OpenSpace.',
  path: '/partners',
});

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
