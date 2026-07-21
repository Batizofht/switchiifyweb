import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sign Up',
  description: 'Create a free Switchiify account and get access to Gamingar, Neuro AI, OpenSpace, and everything Switchiify builds.',
  path: '/signup',
});

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
