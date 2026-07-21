'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

/* ─── Reveal helper ────────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Contact info items ───────────────────────────────────────────────────── */
const contactItems = [
  {
    label: 'Email',
    value: 'hello@switchiify.com',
    href: 'mailto:hello@switchiify.com',
    icon: (
      <svg
        className="w-4 h-4 text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 555 123-4567',
    href: 'tel:+15551234567',
    icon: (
      <svg
        className="w-4 h-4 text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.25 6.338c0-.67.324-1.3.864-1.698l2.052-1.538a1.5 1.5 0 011.845.108l2.25 2.25a1.5 1.5 0 01.182 1.88l-.97 1.456a10.037 10.037 0 004.98 4.98l1.456-.97a1.5 1.5 0 011.88.182l2.25 2.25a1.5 1.5 0 01.108 1.845l-1.538 2.052a2.25 2.25 0 01-1.698.864A17.25 17.25 0 012.25 6.338z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Kigali, Rwanda',
    href: 'https://maps.google.com/?q=Kigali,Rwanda',
    icon: (
      <svg
        className="w-4 h-4 text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg
        className="w-4 h-4 text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const twoColRef = useRef(null);
  const twoColInView = useInView(twoColRef, { once: true, margin: '-80px' });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-black dark:bg-black min-h-screen">

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Single gradient — blue tint from top, fading to pure black */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,58,138,0.22) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-3xl"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 text-zinc-400 text-base leading-relaxed max-w-md"
          >
            We would love to hear from you. Whether you have a question about
            our products, a partnership idea, or just want to say hello — we
            read every message.
          </motion.p>
        </div>
      </section>

      {/* ── 2. TWO-COLUMN ─────────────────────────────────────────────────── */}
      <section
        ref={twoColRef}
        className="py-24 md:py-32 border-t border-zinc-900 dark:border-zinc-900"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 items-start">

            {/* ── Left: contact info ────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={twoColInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">
                Reach us directly
              </p>

              {/*
                Aesthetic risk: a vertical connector line ties the four items
                into a flow — the same quiet geometry used in circuit diagrams
                and Rwanda's own kente-inspired linear patterns. It makes the
                list feel like a path, not a bullet dump.
              */}
              <div className="relative pl-6">
                {/* Connector line */}
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800 dark:bg-zinc-800"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-10">
                  {contactItems.map((item, i) => {
                    const isLast = i === contactItems.length - 1;
                    const inner = (
                      <div className="flex items-start gap-4">
                        {/* Icon badge */}
                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                            {item.label}
                          </p>
                          <p className="text-white font-semibold text-base">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    return (
                      <div key={item.label} className="relative">
                        {/* Dot on the line */}
                        <div
                          className={`absolute -left-6 top-2.5 w-[7px] h-[7px] rounded-full border border-zinc-700 dark:border-zinc-700 ${
                            isLast ? 'bg-white' : 'bg-zinc-900 dark:bg-zinc-900'
                          }`}
                          aria-hidden="true"
                        />
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group block hover:opacity-80 transition-opacity"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div>{inner}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quiet note beneath */}
              <p className="mt-14 text-zinc-500 text-sm leading-relaxed max-w-xs">
                Switchiify is headquartered in Kigali, Rwanda — and we build for
                teams everywhere. Time zones are not a barrier.
              </p>
            </motion.div>

            {/* ── Right: form ───────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={twoColInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="p-8 rounded-md bg-white/[0.03] border border-white/10 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-white font-semibold text-lg mb-3">
                    Message sent
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Thanks for reaching out. Someone from our team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-md bg-white/[0.03] border border-white/10 space-y-5"
                  noValidate
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                    Send a message
                  </p>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-[0.15em] text-zinc-500 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors w-full text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-[0.15em] text-zinc-500 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors w-full text-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs uppercase tracking-[0.15em] text-zinc-500 mb-2"
                    >
                      Company
                      <span className="ml-2 normal-case tracking-normal text-zinc-600">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Where do you work?"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors w-full text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-[0.15em] text-zinc-500 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what you are working on, or what you need."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors w-full text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
                  >
                    Send Message
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>

                  <p className="text-zinc-600 text-xs text-center leading-relaxed pt-1">
                    We read every message and reply within one business day.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. FOOTER CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                Other ways to connect
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-lg">
                Built in Rwanda.<br />Ready for the world.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
                Switchiify powers Gamingar, Neuro AI, and OpenSpace — three
                platforms that started with a single question: why does
                great technology always skip the same markets? We are still
                answering that question, and we would love your perspective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
                >
                  Our story
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  Join the community
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  );
}
