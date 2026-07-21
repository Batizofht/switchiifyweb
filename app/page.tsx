import {
  HeroSection,
  GamingarSection,
  NeuroAISection,
  OpenSpaceSection,
  CommunitySection,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <GamingarSection />
      <NeuroAISection />
      <OpenSpaceSection />
      <CommunitySection />
    </div>
  );
}
