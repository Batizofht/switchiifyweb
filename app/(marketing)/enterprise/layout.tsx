import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Enterprise',
  description: 'Enterprise-grade systems built for critical environments — security, mobile-first design, and a global CDN across OpenSpace, Gamingar, and Neuro AI.',
  path: '/enterprise',
});

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
