import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Research',
  description: 'The work behind what we ship — three research divisions building the hardware, systems, and testing infrastructure behind Gamingar, Neuro AI, and OpenSpace.',
  path: '/research',
});

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
