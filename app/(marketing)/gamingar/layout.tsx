import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Gamingar',
  description: "Gamingar is Switchiify's vision of the next-generation gaming interface — where input becomes instinctive and immersion feels natural.",
  path: '/gamingar',
});

export default function GamingarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
