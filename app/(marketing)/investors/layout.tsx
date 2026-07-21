import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Investors',
  description: "Building the future of technology — Switchiify's investment thesis, products, and why Gamingar, Neuro AI, and OpenSpace are built for global scale.",
  path: '/investors',
});

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
