import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Leadership',
  description: 'Meet the team behind Switchiify — the leaders guiding Gamingar, Neuro AI, OpenSpace, and Spandbox.',
  path: '/leadership',
});

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
