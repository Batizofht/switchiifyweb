import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About',
  description: 'Three platforms, one direction — Switchiify builds Gamingar, Neuro AI, and OpenSpace, led by people who build, not just manage.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
