import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Reset Your Password',
  description: 'Reset the password for your Switchiify account.',
  path: '/forgot-password',
});

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
