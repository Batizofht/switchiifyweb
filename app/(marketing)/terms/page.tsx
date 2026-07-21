import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms & Conditions',
  description: "The terms governing your use of Switchiify's products, including Gamingar, Neuro AI, and OpenSpace.",
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen pt-40 pb-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Terms &amp; Conditions</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: January 1, 2026</p>

        <div className="prose-switchiify">
          <p>
            These Terms govern your use of Switchiify&apos;s products, including Gamingar, Neuro AI, and OpenSpace (together, the &ldquo;Services&rdquo;). By creating an account or using the Services, you agree to these Terms.
          </p>

          <h2>Using Our Services</h2>
          <p>You must be at least 16 years old to use the Services. You&apos;re responsible for maintaining the security of your account and for all activity that happens under it.</p>

          <h2>Subscriptions &amp; Billing</h2>
          <p>Paid plans renew automatically at the end of each billing cycle unless cancelled beforehand. You can manage or cancel your subscription at any time from <a href="/myaccount/billing">Billing</a>. Fees are non-refundable except where required by law.</p>

          <h2>Acceptable Use</h2>
          <ul>
            <li>Don&apos;t attempt to disrupt, reverse-engineer, or gain unauthorized access to our systems</li>
            <li>Don&apos;t use the Services to build a competing product using our data or infrastructure</li>
            <li>Don&apos;t upload content you don&apos;t have the rights to use</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>Switchiify retains all rights to the Services, including the Gamingar engine, Neuro AI models, and OpenSpace platform. You retain ownership of the content you create using our products.</p>

          <h2>Termination</h2>
          <p>You may stop using the Services at any time. We may suspend or terminate accounts that violate these Terms or that pose a security risk to other users.</p>

          <h2>Limitation of Liability</h2>
          <p>The Services are provided &ldquo;as is.&rdquo; To the maximum extent permitted by law, Switchiify is not liable for indirect, incidental, or consequential damages arising from your use of the Services.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We&apos;ll notify you of material changes before they take effect.</p>

          <h2>Contact</h2>
          <p>Questions about these Terms can be sent through our <a href="/contact">contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
