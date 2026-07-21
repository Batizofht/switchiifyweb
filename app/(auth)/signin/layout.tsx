import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sign In',
  description: 'Sign in to your Switchiify account to access OpenSpace, Gamingar, and Neuro AI.',
  path: '/signin',
});

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
