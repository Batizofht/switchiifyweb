'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// ─── Reusable reveal hook ─────────────────────────────────────────────────────
function useReveal(margin: NonNullable<Parameters<typeof useInView>[1]>['margin'] = '-80px') {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Canvas node network (the aesthetic risk) ───────────────────────
// Computed particle physics: nodes drift, edges form when close, mouse repels.
function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = canvas.parentElement?.clientWidth ?? window.innerWidth;
    let H = canvas.parentElement?.clientHeight ?? window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const NODE_COUNT = Math.min(Math.floor((W * H) / 12000), 80);
    const CONNECT_DIST = 160;
    const REPEL_DIST = 120;
    const REPEL_STRENGTH = 0.6;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 1,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions
      if (!prefersReduced) {
        for (const n of nodes) {
          // Mouse repulsion
          const dx = n.x - mx;
          const dy = n.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_DIST && dist > 0) {
            const force = (REPEL_DIST - dist) / REPEL_DIST;
            n.vx += (dx / dist) * force * REPEL_STRENGTH;
            n.vy += (dy / dist) * force * REPEL_STRENGTH;
          }

          // Damping
          n.vx *= 0.96;
          n.vy *= 0.96;

          n.x += n.vx;
          n.y += n.vy;

          // Soft boundary bounce
          if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
          if (n.x > W) { n.x = W; n.vx = -Math.abs(n.vx); }
          if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
          if (n.y > H) { n.y = H; n.vy = -Math.abs(n.vy); }
        }
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`; // cyan-400
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.55)';
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    function onResize() {
      if (!canvas) return;
      W = canvas.parentElement?.clientWidth ?? window.innerWidth;
      H = canvas.parentElement?.clientHeight ?? window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NeuroAIPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">

        {/* Background image — blue gradient checkmarks / tech */}
        <Image
          src="/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png"
          alt="Neuro AI — technology visualization"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Black overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.80)' }}
          aria-hidden="true"
        />

        {/* Animated canvas node network — the distinctive hero moment */}
        <NodeNetwork />

        {/* Bottom gradient to ground the text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.50) 40%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-5"
          >
            Switchiify Neuro AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.0] mb-5 max-w-2xl"
          >
            Neuro AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10 max-w-md"
          >
            The only AI that learns from&nbsp;YOU.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
            >
              Talk to Neuro
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Get Easy Access
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 rotate-90 origin-center mb-3">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>


      {/* ── 2. THE INTELLIGENCE ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: statement copy */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">
                The Intelligence
              </p>
              <blockquote className="text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-10">
                &ldquo;Smarter every second. Dangerous when bored.&rdquo;
              </blockquote>
              <p className="text-zinc-400 text-base leading-relaxed mb-5">
                Most AI systems treat every user as an aggregate — a statistical median derived from millions of conversations that aren&apos;t yours. Neuro AI inverts that model entirely. It starts by observing how you actually think: the cadence of your questions, the vocabulary you reach for, the problems you return to.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Over time, the gap between what you need and what Neuro provides closes to something that feels less like using a tool and more like thinking out loud with someone who already knows the context. That distinction is the entire product.
              </p>
            </Reveal>

            {/* Right: 2 feature cards */}
            <div className="flex flex-col gap-4">
              <Reveal delay={0.1}>
                <article className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-1.5 h-1.5 bg-cyan-400 mb-5" aria-hidden="true" />
                  <h3 className="text-white font-semibold text-base mb-3">
                    Behavioral Adaptation
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Neuro reads the structure of your interactions — not just the words — and continuously recalibrates its responses to match your working style. The more you use it, the sharper it becomes specifically for you.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.2}>
                <article className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-1.5 h-1.5 bg-cyan-400 mb-5" aria-hidden="true" />
                  <h3 className="text-white font-semibold text-base mb-3">
                    Predictive Assistance
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Before you finish asking, Neuro has already modeled likely directions your question might take — and prepared the context that makes the answer immediately useful, not just technically correct.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center gap-4 px-6 py-4 rounded-md border border-white/10">
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(34,211,238,0.10)' }}
                  >
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Live in your workflow</p>
                    <p className="text-zinc-500 text-xs mt-0.5">Integrates with the tools you already use — no switching context.</p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. KNOWLEDGE MANAGEMENT ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="p-8 md:p-12 rounded-md bg-white/[0.03] border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Text */}
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
                    Knowledge Management
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    Your personal knowledge layer.
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    Neuro maintains a persistent, structured memory of everything you&apos;ve worked on, decided, and learned — organized not as a log you have to search, but as a living context that surfaces the right information at the right moment.
                  </p>
                  <p className="text-zinc-400 text-base leading-relaxed mb-10">
                    Unlike session-based AI that forgets everything the moment you close the tab, Neuro&apos;s memory is cumulative. Your second month with Neuro is materially more useful than your first. Your second year is a different category of tool entirely.
                  </p>
                  <Link
                    href="/services/ai-integration"
                    className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                  >
                    View all features
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Stat group */}
                <div className="flex flex-col gap-6">
                  {[
                    { value: '100%', label: 'Private by default', detail: 'Your data is never used to train shared models.' },
                    { value: '∞', label: 'Persistent memory', detail: 'No session limits. No context resets.' },
                    { value: '<200ms', label: 'Response latency', detail: 'Fast enough to disappear into your thinking.' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-start gap-5">
                      <div className="w-px h-12 bg-zinc-700 shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-2xl font-bold text-cyan-400 leading-none mb-1">{stat.value}</p>
                        <p className="text-white text-sm font-medium mb-0.5">{stat.label}</p>
                        <p className="text-zinc-500 text-xs leading-relaxed">{stat.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <Reveal className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.0] max-w-lg">
              Three steps to an AI that knows you.
            </h2>
          </Reveal>

          {/* Horizontal steps — order carries meaning here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">

            {/* Connecting line (desktop only) */}
            <div
              className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-zinc-800"
              aria-hidden="true"
            />

            {[
              {
                num: '01',
                title: 'Connect your data',
                body: 'Link the sources that matter — documents, calendars, notes, or previous conversations. Neuro reads structure, not just content, so it understands how information relates.',
              },
              {
                num: '02',
                title: 'Neuro learns your patterns',
                body: 'Over your first few sessions, Neuro builds a behavioral model specific to you: how you reason, what you deprioritize, which formats you find useful.',
              },
              {
                num: '03',
                title: 'Get personalized intelligence',
                body: 'From the third session forward, responses arrive with context already loaded — fewer follow-up questions, more useful answers, a system that thinks at your speed.',
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15} className="relative">
                <div className="flex flex-col gap-5 px-0 md:px-8 py-8 md:py-0 border-t border-zinc-800 md:border-0">
                  {/* Step number in a circle */}
                  <div
                    className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 relative z-10"
                    aria-hidden="true"
                  >
                    <span className="text-zinc-400 text-xs font-mono tracking-widest">{step.num}</span>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── 5. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">

        {/* Single radial glow — violet, precisely placed */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 60% at 50% 110%, rgba(34,211,238,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
              Get Started
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-2xl mx-auto mb-7">
              Ready to meet your Neuro?
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto mb-10">
              Start free. No credit card. The model begins learning from your first conversation and never stops.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Talk to Neuro first
              </Link>
            </div>
          </Reveal>

          {/* Fine print */}
          <Reveal delay={0.32}>
            <p className="text-zinc-700 text-xs mt-8">
              No credit card required. Available in all regions. Data stays yours — always.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
