import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Press & Media',
  description: "Switchiify in the news — media resources, brand assets, and coverage of Switchiify's products and research.",
  path: '/press',
});

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
