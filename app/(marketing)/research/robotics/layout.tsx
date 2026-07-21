import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Machines That Move Like They Understand',
  description: 'Our robotics division builds control systems that adapt to the physical world instead of demanding the world adapt to them.',
  path: '/research/robotics',
});

export default function RoboticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
