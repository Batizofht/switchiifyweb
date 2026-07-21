import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'AAA Open-World Games',
  description: 'We partner with studios and publishers to deliver open-world titles at AAA scale — from world systems to live-service infrastructure.',
  path: '/services/aaa-games',
});

export default function AaaGamesPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — AAA Production"
      title="AAA Open-World Games"
      tagline="Full production services for large-scale open-world titles."
      description="We partner with studios and publishers to deliver open-world titles at AAA scale — from world systems to live-service infrastructure."
      accentText="text-zinc-400"
      stats={[
        { value: '100km²', label: 'Largest World Built' },
        { value: '40+', label: 'Engineers Available' },
        { value: '5', label: 'Live-Service Titles' }
      ]}
      features={[
        { title: 'Open-World Systems', desc: "Streaming, LOD, and world-state architecture built for massive scale." },
        { title: 'Live-Service Infrastructure', desc: "Backend systems for seasons, economies, and always-on content." },
        { title: 'Co-Development', desc: "Embedded teams that plug directly into your existing studio pipeline." }
      ]}
    />
  );
}
