import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Security',
  description: "Security isn't a feature we add at the end — encryption everywhere, least-privilege access, continuous monitoring, and independent audits across every Switchiify product.",
  path: '/security',
});

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
