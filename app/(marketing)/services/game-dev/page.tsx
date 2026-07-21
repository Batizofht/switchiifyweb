import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Game Development',
  description: 'From prototype to launch, our studio builds games on the same engine and tooling that powers Gamingar — cinematic, adaptive, and built to scale.',
  path: '/services/game-dev',
});

export default function GameDevPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Game Development"
      title="Game Development"
      tagline="End-to-end development powered by the Gamingar engine."
      description="From prototype to launch, our studio builds games on the same engine and tooling that powers Gamingar — cinematic, adaptive, and built to scale."
      accentText="text-zinc-400"
      stats={[
        { value: '60fps', label: 'Target Performance' },
        { value: '3D', label: 'Native Pipeline' },
        { value: '12', label: 'Titles Shipped' }
      ]}
      features={[
        { title: 'Full Production Pipeline', desc: "Concept, prototyping, production, and live-ops under one roof." },
        { title: 'Gamingar Engine Access', desc: "Build directly on the same adaptive-input engine that powers Gamingar." },
        { title: 'Cross-Platform Ship', desc: "One codebase, deployed across console, PC, and mobile." }
      ]}
    />
  );
}
