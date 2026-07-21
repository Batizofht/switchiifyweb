'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 'Free', annual: 'Free' },
    tagline: 'For individuals and small projects',
    features: [
      '1 workspace',
      '5 collaborators',
      'Basic Neuro AI',
      '5GB storage',
      'Community support',
      'Gamingar Beta access',
    ],
    cta: { label: 'Get Started Free', href: '/signup' },
    highlight: false,
  },
  {
    name: 'Pro',
    price: { monthly: '$49', annual: '$39' },
    tagline: 'For growing teams',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Unlimited workspaces',
      '50 collaborators',
      'Advanced Neuro AI',
      '100GB storage',
      'Priority support',
      'Early product access',
    ],
    cta: { label: 'Start Pro Trial', href: '/signup' },
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    tagline: 'For organizations at scale',
    features: [
      'Everything in Pro',
      'Custom AI models',
      'Unlimited storage',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
      'Custom integrations',
    ],
    cta: { label: 'Contact Sales', href: '/contact' },
    highlight: false,
  },
];

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes — upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
  { q: 'Is there a free trial for Pro?', a: 'Every Pro plan starts with a 14-day free trial. No credit card required.' },
  { q: 'What happens when I hit my storage limit?', a: 'We\'ll notify you before you run out. You can upgrade your plan or purchase additional storage.' },
  { q: 'Does the price change for larger teams?', a: 'Pro pricing is flat per team, not per seat. Enterprise pricing is custom-quoted based on your usage.' },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-10 text-center max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
        >
          Pricing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] max-w-3xl mx-auto mb-5"
        >
          Simple, Transparent Pricing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Start free. Scale as you grow. Enterprise plans for teams that demand more.
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-sm p-1.5"
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${!isAnnual ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
          >
            Annual
            <span className="text-[10px] bg-green-400 text-black px-2 py-0.5 rounded-sm font-semibold normal-case tracking-normal">Save 20%</span>
          </button>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-2xl flex flex-col border ${
                plan.highlight
                  ? 'bg-zinc-900 border-zinc-600 ring-1 ring-zinc-600'
                  : 'bg-zinc-950 border-zinc-800'
              }`}
            >
              {plan.badge && (
                <span className="text-[10px] font-semibold uppercase tracking-widest text-green-400 bg-green-400/10 px-3 py-1 rounded-full self-start mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{plan.tagline}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                {plan.price.monthly !== 'Free' && plan.price.monthly !== 'Custom' && (
                  <span className="text-zinc-500 text-sm">/mo</span>
                )}
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.cta.href}
                className={`w-full text-center py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {plan.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4 text-center">FAQ</p>
          <h2 className="text-4xl font-bold tracking-tight text-white text-center mb-14">Common Questions</h2>
          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h3 className="text-white font-medium text-base mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Still have questions?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
        >
          Talk to our team
        </Link>
      </section>
    </div>
  );
}
