import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Community',
  description: 'Switchiify was built in Rwanda for the world — join a global community of builders, creators, and visionaries shaping Gamingar, Neuro AI, and OpenSpace.',
  path: '/community',
});

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
