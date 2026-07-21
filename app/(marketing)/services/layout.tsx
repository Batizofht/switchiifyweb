import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Services',
  description: 'What we build for the world — from enterprise AI systems to AAA game engines, Switchiify builds technology that scales.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
