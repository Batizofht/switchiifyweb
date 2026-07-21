import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Help Center',
  description: 'Answers, guides, and account support across every Switchiify product — Getting Started, OpenSpace, Gamingar, Neuro AI, Billing, and Account & Security.',
  path: '/help',
});

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
