import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';

export default function EmergencyPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Emergency Response"
      title="Emergency Response AI"
      tagline="Systems built for the moments that can't wait."
      description="Mission-critical AI systems engineered for emergency response scenarios — designed to perform under load, under pressure, and under scrutiny."
      accentText="text-zinc-400"
      stats={[
        { value: '<200ms', label: 'Response Time' },
        { value: '99.999%', label: 'Reliability Target' },
        { value: '16+', label: 'Regions Deployed' }
      ]}
      features={[
        { title: 'Rapid Triage Models', desc: "AI classification systems that prioritize the most urgent cases first." },
        { title: 'Redundant Infrastructure', desc: "Multi-region failover so the system never goes dark when it matters most." },
        { title: 'Human-in-the-Loop', desc: "Every automated decision stays reviewable and overridable by a person." }
      ]}
    />
  );
}
