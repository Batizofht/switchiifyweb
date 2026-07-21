import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'OpenSpace',
  description: 'OpenSpace is a business collaboration platform built for the way modern teams actually work — enterprise security, mobile-first design, and a global CDN.',
  path: '/openspace',
});

export default function OpenSpaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
