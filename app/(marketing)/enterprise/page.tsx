'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

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
  const ref = useRef<HTMLDivElement>(null);
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

// ─── Wireframe Globe — the aesthetic risk ────────────────────────────────────
// A slowly rotating lat/lon wireframe sphere rendered in Canvas.
// Earns its place: the headline is "16+ countries" — geography is the brand claim.
// No other section has kinetic animation; this is the single orchestrated moment.
function WireframeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = canvas.parentElement?.clientWidth ?? 600;
    let H = canvas.parentElement?.clientHeight ?? 600;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(dpr, dpr);

    let angle = 0;

    function project3d(
      lat: number,
      lon: number,
      tilt: number,
      R: number,
      cx: number,
      cy: number
    ): { x: number; y: number; z: number } {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + angle) * (Math.PI / 180);
      let x = R * Math.sin(phi) * Math.cos(theta);
      let y = R * Math.cos(phi);
      let z = R * Math.sin(phi) * Math.sin(theta);
      // Apply Y-axis tilt (axial tilt of globe)
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);
      const y2 = y * cosT - z * sinT;
      const z2 = y * sinT + z * cosT;
      return { x: cx + x, y: cy + y2, z: z2 };
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.38;
      const TILT = 0.38; // radians — slight axial tilt for realism
      const LAT_LINES = 9;
      const LON_LINES = 16;
      const SEGMENTS = 80;

      // Draw latitude lines
      for (let i = 0; i <= LAT_LINES; i++) {
        const lat = -90 + (180 / LAT_LINES) * i;
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= SEGMENTS; s++) {
          const lon = -180 + (360 / SEGMENTS) * s;
          const p = project3d(lat, lon, TILT, R, cx, cy);
          const alpha = p.z > 0 ? 0.28 : 0.07;
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        }
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < LON_LINES; i++) {
        const lon = (360 / LON_LINES) * i;
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= SEGMENTS; s++) {
          const lat = -90 + (180 / SEGMENTS) * s;
          const p = project3d(lat, lon, TILT, R, cx, cy);
          const alpha = p.z > 0 ? 0.24 : 0.06;
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        }
        ctx.stroke();
      }

      // Glowing center dot
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.15);
      grad.addColorStop(0, 'rgba(255,255,255,0.18)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      if (!prefersReduced) {
        angle += 0.09;
      }
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    function onResize() {
      if (!canvas || !canvas.parentElement || !ctx) return;
      W = canvas.parentElement.clientWidth;
      H = canvas.parentElement.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ─── Check icon ───────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowRight({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const premiumSolutions = [
  {
    id: 'bank-ai',
    eyebrow: 'Financial Infrastructure',
    title: 'Global Bank AI Engine',
    description:
      'Custom Neuro AI models trained on financial compliance data, fraud pattern libraries, and real-time transaction flows. Deployed on-premise or in isolated cloud tenancies. Meets SWIFT, PCI-DSS, and regional central bank requirements out of the box.',
    stat: '140ms',
    statLabel: 'avg. fraud-signal latency',
    href: '/contact',
    cta: 'View Case',
  },
  {
    id: 'defense',
    eyebrow: 'Defense & Government',
    title: 'Defense Simulations',
    description:
      'Gamingar\'s GPU-accelerated 3D engine repurposed for mission rehearsal and terrain simulation. Air-gapped deployment option. Custom physics pipelines for ballistic modeling, urban planning, and disaster-response scenario training.',
    stat: '16+',
    statLabel: 'sovereign operators',
    href: '/contact',
    cta: 'View Case',
  },
  {
    id: 'metaverse',
    eyebrow: 'Enterprise Collaboration',
    title: 'Enterprise Metaverse HQ',
    description:
      'Persistent OpenSpace environments provisioned for corporate campuses, global all-hands, and 3D product reviews. SSO, audit logs, and zero-trust access controls built in. Multi-region edge nodes keep latency below 60ms for teams on six continents.',
    stat: '60ms',
    statLabel: 'cross-continent latency',
    href: '/contact',
    cta: 'View Case',
  },
];

const checklistItems = [
  { id: 'deploy', label: 'Faster AI deployment', detail: 'Production-ready models in weeks, not quarters.' },
  { id: 'auto', label: 'Smart system automation', detail: 'Workflow triggers that act on model output, not just keywords.' },
  { id: 'engine', label: 'Custom engine architectures', detail: 'Tailored rendering and AI pipelines for your exact use case.' },
  { id: 'integration', label: 'Seamless platform integration', detail: 'REST, GraphQL, and native SDK for every major enterprise stack.' },
  { id: 'sim', label: 'High-accuracy simulation', detail: 'GPU-native physics that runs at real-time rates on commodity hardware.' },
  { id: 'multi', label: 'Multi-region deployment', detail: 'Sovereign data residency with active-active global redundancy.' },
];

const howItWorks = [
  {
    num: '01',
    title: 'Set your challenge',
    body: 'Tell us what you are building — the environment, the constraints, the scale. We assign a dedicated solutions architect within 24 hours of your first call.',
  },
  {
    num: '02',
    title: 'Get a custom architecture',
    body: 'Our team designs a stack combining Neuro AI, Gamingar 3D, and OpenSpace that fits your infrastructure. You receive a detailed technical proposal, not a slide deck.',
  },
  {
    num: '03',
    title: 'Deploy and scale',
    body: 'Implementation is handled by Switchiify engineers. Post-launch, a dedicated TAM monitors performance and manages upgrades so your team stays focused on your product.',
  },
];

const techHighlights = [
  {
    title: 'Ultra-low latency AI core',
    detail: 'Sub-200ms inference on commodity hardware via quantized model serving.',
  },
  {
    title: 'GPU-accelerated simulations',
    detail: 'Real-time physics at 120fps for environments up to 256km².',
  },
  {
    title: 'Military-tier encryption',
    detail: 'AES-256 at rest, TLS 1.3 in transit, FIPS 140-2 validated modules.',
  },
  {
    title: 'Global dual & multi-device OpenSpace',
    detail: 'One persistent environment. Any device. Any continent. Under 60ms.',
  },
  {
    title: 'Air-gapped deployment',
    detail: 'Full stack runs completely offline with no external dependencies.',
  },
];

const contactLinks = [
  { label: 'Enterprise Sales', href: '/contact', sub: 'Custom pricing and architecture scoping' },
  { label: 'Support', href: '/contact', sub: '24/7 priority support for active deployments' },
  { label: 'Partnerships', href: '/contact', sub: 'OEM licensing, reseller, and co-build programs' },
  { label: 'Media & Press', href: '/contact', sub: 'Press kit, briefings, and analyst relations' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EnterprisePage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        <Image
          src="/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png"
          alt="Enterprise mission-critical infrastructure"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.70)' }}
          aria-hidden="true"
        />

        {/* Aesthetic risk: wireframe globe — geography as the brand claim */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <WireframeGlobe />
        </div>

        {/* Subtle blue glow from below */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Bottom fade to black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.55) 40%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 pb-24 md:pb-32 w-full">

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-6"
          >
            Switchiify Enterprise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.0] mb-6 max-w-3xl"
          >
            Powering mission-critical systems across 16+ countries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Custom Neuro AI models&nbsp;&middot;&nbsp;Gaming-scale 3D engines&nbsp;&middot;&nbsp;Secure OpenSpace deployments
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
              Book Enterprise Demo
            </Link>
            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 rotate-90 origin-center mb-3">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>

      {/* ── 2. PREMIUM SOLUTIONS ────────────────────────────────────────────── */}
      <section id="solutions" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Explore Our Premium
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.0] max-w-lg">
                Enterprise-grade systems built for critical environments.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs md:text-right">
                Each deployment is engineered from scratch. No shared tenants. No off-the-shelf limits.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {premiumSolutions.map((sol, i) => (
              <Reveal key={sol.id} delay={i * 0.12}>
                <article className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors flex flex-col h-full">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">{sol.eyebrow}</p>
                  <h3 className="text-white font-semibold text-lg mb-3">{sol.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{sol.description}</p>
                  {/* Inline stat */}
                  <div className="flex items-center gap-4 mb-6 pt-4 border-t border-zinc-800">
                    <span className="text-2xl font-bold text-white leading-none">{sol.stat}</span>
                    <span className="text-zinc-500 text-xs leading-tight">{sol.statLabel}</span>
                  </div>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-zinc-300 transition-colors group"
                  >
                    {sol.cta}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY COMPANIES CHOOSE SWITCHIIFY ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
                The Case
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.0] mb-6 max-w-sm">
                Why Companies Choose Switchiify
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Most enterprise software vendors sell you a platform built for everyone and configured for no one. Switchiify starts from the opposite position: we build for the exact system you need to run, on the exact infrastructure you control.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Book Enterprise Demo
                <ArrowRight />
              </Link>
            </Reveal>

            {/* Right — checklist */}
            <div className="flex flex-col gap-5">
              {checklistItems.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                    <CheckIcon />
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.label}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <Reveal className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.0] max-w-md">
              From first call to full deployment.
            </h2>
          </Reveal>

          {/* Steps — ordered because the content is genuinely sequential */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">

            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-7 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-zinc-800"
              aria-hidden="true"
            />

            {howItWorks.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15}>
                <div className="flex flex-col gap-5 md:px-8 py-8 md:py-0 border-t border-zinc-800 md:border-0">
                  <div
                    className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0 relative z-10"
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

      {/* ── 5. TECH HIGHLIGHTS ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <Reveal className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Under the Hood
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.0]">
              Built different at every layer.
            </h2>
          </Reveal>

          {/* Horizontal scroll on mobile, wrap on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible">
            {techHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="p-5 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors min-w-[220px] md:min-w-0 flex flex-col gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug">{item.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GET IN TOUCH ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">

        {/* Single, precisely placed blue glow — the second and final gradient on this page */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 55% at 50% 105%, rgba(255,255,255,0.08) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.0] max-w-md">
              Get in touch quickly.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="group flex items-start justify-between p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div>
                    <p className="text-white font-semibold text-base mb-1">{item.label}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors mt-0.5 shrink-0" />
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Fine print */}
          <Reveal delay={0.4}>
            <p className="text-zinc-700 text-xs mt-10">
              All enterprise inquiries receive a response from a Switchiify solutions architect within one business day.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
