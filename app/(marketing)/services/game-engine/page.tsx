import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Game Engine Systems',
  description: "We build and extend real-time engines — the same discipline behind Gamingar's Adaptive Input Resolution and rendering pipeline.",
  path: '/services/game-engine',
});

export default function GameEnginePage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Engine Systems"
      title="Game Engine Systems"
      tagline="Custom engine development and graphics pipeline engineering."
      description="We build and extend real-time engines — the same discipline behind Gamingar's Adaptive Input Resolution and rendering pipeline."
      accentText="text-zinc-400"
      stats={[
        { value: '4000Hz', label: 'Input Sampling' },
        { value: '60fps', label: 'Render Target' },
        { value: '6', label: 'Custom Engines Built' }
      ]}
      features={[
        { title: 'Rendering Pipelines', desc: "Custom graphics pipelines tuned for your platform and visual target." },
        { title: 'Engine Tooling', desc: "Editor and pipeline tools that make your team faster, not slower." },
        { title: 'Performance Engineering', desc: "Deep profiling and optimization across CPU, GPU, and memory." }
      ]}
    />
  );
}
