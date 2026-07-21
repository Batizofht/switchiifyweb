import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'How Switchiify Platforms Inc. collects, uses, and protects your information across Gamingar, Neuro AI, and OpenSpace.',
  path: '/legal',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen pt-40 pb-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: January 1, 2026</p>

        <div className="prose-switchiify">
          <p>
            Switchiify Platforms Inc. (&ldquo;Switchiify,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) builds Gamingar, Neuro AI, and OpenSpace. This policy explains what information we collect across those products, why we collect it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and billing details when you create an account. We also collect usage data — how you interact with our products — to improve reliability and performance.</p>

          <h2>How Neuro AI Handles Behavioral Data</h2>
          <p>Neuro AI is designed around data minimization. Rather than storing the content of your conversations or actions, it learns from the structure and timing of your behavior — building a model of how you work without retaining what you said or did.</p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To provide, maintain, and improve our products</li>
            <li>To communicate with you about your account or changes to our services</li>
            <li>To detect, prevent, and respond to fraud or security incidents</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We share data only with service providers who help us operate our products, under contractual confidentiality obligations, or when required by law.</p>

          <h2>Your Rights</h2>
          <p>Depending on where you live, you may have the right to access, correct, export, or delete your personal data. You can manage most of this directly from your <a href="/myaccount/profile">account settings</a>, or contact us for assistance.</p>

          <h2>Data Retention</h2>
          <p>We retain personal information for as long as your account is active or as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

          <h2>Contact Us</h2>
          <p>Questions about this policy can be directed to our team via the <a href="/contact">contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
