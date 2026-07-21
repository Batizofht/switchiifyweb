import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Where Every Product Starts',
  description: 'Our laboratory is where early prototypes across every Switchiify platform get tested against real conditions before anything ships — from load testing to human trials.',
  path: '/research/laboratory',
});

export default function LaboratoryResearchPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Research — Laboratory"
      title="Where every product starts."
      tagline="A shared testing ground for Gamingar, Neuro AI, and OpenSpace."
      description="Our laboratory is where early prototypes across every Switchiify platform get tested against real conditions before anything ships — from load testing to human trials."
      accentText="text-zinc-400"
      stats={[
        { value: '4', label: 'Active Labs' },
        { value: '200+', label: 'Prototypes Tested' },
        { value: '2026', label: 'Kigali Facility Opened' },
      ]}
      features={[
        { title: 'Human Trials', desc: 'Structured user testing across every product before public release.' },
        { title: 'Load & Stress Testing', desc: 'Infrastructure and hardware pushed to their limits before customers ever see them.' },
        { title: 'Cross-Team Collaboration', desc: 'A shared space where Gamingar, Neuro AI, and OpenSpace teams test together.' },
      ]}
    />
  );
}
