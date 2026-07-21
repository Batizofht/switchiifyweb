import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Smart Monitoring Solutions',
  description: 'Neuro AI-powered monitoring that watches infrastructure, applications, and business metrics in real time, and tells you what actually matters.',
  path: '/services/monitoring',
});

export default function MonitoringPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Monitoring"
      title="Smart Monitoring Solutions"
      tagline="Know about problems before your customers do."
      description="Neuro AI-powered monitoring that watches infrastructure, applications, and business metrics in real time, and tells you what actually matters."
      accentText="text-zinc-400"
      stats={[
        { value: '<1min', label: 'Alert Latency' },
        { value: '99.99%', label: 'Detection Accuracy' },
        { value: '50+', label: 'Deployments Monitored' }
      ]}
      features={[
        { title: 'Real-Time Dashboards', desc: "Live visibility into every system that matters to your business." },
        { title: 'Anomaly Detection', desc: "Neuro AI models trained to spot the signal in the noise." },
        { title: 'Smart Alerting', desc: "Notifications routed to the right person, only when it matters." }
      ]}
    />
  );
}
