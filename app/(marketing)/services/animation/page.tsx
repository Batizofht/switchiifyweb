import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';

export default function AnimationPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Switchiify Services — Animation"
      title="Motion, Animation & Simulation"
      tagline="Cinematic animation, simulation, and motion graphics."
      description="From character motion capture to physics-driven simulation, our animation team brings Gamingar-grade motion fidelity to any production."
      accentText="text-zinc-400"
      stats={[
        { value: '120fps', label: 'Mocap Capture Rate' },
        { value: '300+', label: 'Rigs Built' },
        { value: '18', label: 'Animators' }
      ]}
      features={[
        { title: 'Motion Capture', desc: "Full-body and facial mocap pipelines tuned for cinematic realism." },
        { title: 'Physics Simulation', desc: "Cloth, hair, and rigid-body systems that react believably in real time." },
        { title: 'Procedural Animation', desc: "Adaptive motion systems that respond to gameplay, not just triggers." }
      ]}
    />
  );
}
