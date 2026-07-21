import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';

export default function AiIntegrationPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — AI Integration"
      title="AI Device Integration"
      tagline="Connect any device to the Switchiify AI ecosystem."
      description="From sensors to enterprise hardware fleets, we build the integration layer that lets your devices talk to Neuro AI and act on what it learns."
      accentText="text-violet-400"
      accentBg="bg-violet-400"
      stats={[
        { value: '500+', label: 'Device Types Supported' },
        { value: '12', label: 'Protocol Standards' },
        { value: '16+', label: 'Countries Deployed' }
      ]}
      features={[
        { title: 'Universal Device SDK', desc: "A single integration layer across sensors, wearables, and enterprise hardware." },
        { title: 'Edge Inference', desc: "Run Neuro AI models directly on-device for near-zero latency." },
        { title: 'Fleet Management', desc: "Monitor, update, and secure every connected device from one place." }
      ]}
    />
  );
}
