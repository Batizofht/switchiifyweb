import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Neuro AI',
  description: 'The only AI that learns from YOU — Neuro AI learns from context, not just data, making interactions feel collaborative rather than transactional.',
  path: '/neuroai',
});

export default function NeuroAiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
