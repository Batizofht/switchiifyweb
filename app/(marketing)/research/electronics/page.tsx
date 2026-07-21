import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Hardware Built for What's Next",
  description: 'Our electronics division designs the sensor arrays, control boards, and low-power systems that give Switchiify hardware its edge — from Gamingar peripherals to OpenSpace devices.',
  path: '/research/electronics',
});

export default function ElectronicsResearchPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Research — Electronics"
      title="Hardware built for what's next."
      tagline="Custom silicon and circuit design for adaptive devices."
      description="Our electronics division designs the sensor arrays, control boards, and low-power systems that give Switchiify hardware its edge — from Gamingar peripherals to OpenSpace devices."
      accentText="text-zinc-400"
      stats={[
        { value: '8', label: 'Custom PCBs Shipped' },
        { value: '<5W', label: 'Typical Power Draw' },
        { value: '3', label: 'Fabrication Partners' },
      ]}
      features={[
        { title: 'Sensor Design', desc: 'Custom sensor arrays tuned for adaptive input and tactile feedback.' },
        { title: 'Low-Power Systems', desc: 'Circuit design optimized for battery life without sacrificing responsiveness.' },
        { title: 'Rapid Prototyping', desc: 'In-house fabrication that takes designs from schematic to working board in days.' },
      ]}
    />
  );
}
