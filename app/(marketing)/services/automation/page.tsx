import type { Metadata } from 'next';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Business Automation',
  description: 'We design and deploy automation pipelines that connect your existing tools, remove repetitive manual work, and scale with your operations — without a rebuild.',
  path: '/services/automation',
});

export default function AutomationPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Automation"
      title="Business Automation"
      tagline="Automate the work that shouldn't need a human."
      description="We design and deploy automation pipelines that connect your existing tools, remove repetitive manual work, and scale with your operations — without a rebuild."
      accentText="text-zinc-400"
      stats={[
        { value: '40%', label: 'Avg. Time Saved' },
        { value: '120+', label: 'Workflows Automated' },
        { value: '24/7', label: 'Uptime Monitoring' }
      ]}
      features={[
        { title: 'Workflow Mapping', desc: "We audit your existing processes to find where automation saves the most time." },
        { title: 'Custom Integrations', desc: "Direct connections between the tools your team already uses daily." },
        { title: 'Error Recovery', desc: "Automations that detect failures and recover without waking anyone up." }
      ]}
    />
  );
}
