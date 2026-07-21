import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';

export default function ThreeDDesignPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — 3D Design"
      title="3D World Design"
      tagline="Custom 3D world creation from concept to final asset."
      description="Our world design team builds environments, props, and lighting systems that hold up under Gamingar's cinematic rendering pipeline."
      accentText="text-zinc-400"
      accentBg="bg-white"
      stats={[
        { value: '4K', label: 'Texture Standard' },
        { value: '200+', label: 'Environments Shipped' },
        { value: '15', label: 'World Artists' }
      ]}
      features={[
        { title: 'Environment Art', desc: "Full-scale world-building from blockout to final lighting pass." },
        { title: 'Procedural Tooling', desc: "Custom tools that let small teams build large, detailed worlds." },
        { title: 'Optimization Pipeline', desc: "Assets built to hold visual fidelity at real-time frame rates." }
      ]}
    />
  );
}
