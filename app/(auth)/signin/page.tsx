'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempted, setAttempted] = useState(false);

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors text-sm';

  return (
    <div className="min-h-screen flex pt-14">
      {/* Left — branding */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end overflow-hidden">
        <Image
          src="/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png"
          alt="Switchiify"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 p-16">
          <div className="flex items-center gap-3 mb-12">
            <Image src="/officiallogo-mark-white.png" alt="Switchiify" width={30} height={16} className="object-contain" />
            <span className="text-white font-semibold text-sm">Switchiify</span>
          </div>
          <blockquote className="text-3xl font-light text-white leading-[1.3] italic mb-4 max-w-sm">
            &ldquo;Technology should be as human as the people who use it.&rdquo;
          </blockquote>
          <p className="text-zinc-500 text-sm">Switchiify Leadership</p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center px-6 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-zinc-400 text-sm">Sign in to your Switchiify account</p>
          </div>

          {attempted && (
            <div className="mb-5 p-4 rounded-sm border border-white/15 bg-white/[0.03]">
              <p className="text-white text-sm font-medium mb-1">Accounts aren&apos;t available here yet</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                This demo doesn&apos;t support live sign-in. In the meantime, you can try{' '}
                <a
                  href="https://app.stockify.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-zinc-300 transition-colors"
                >
                  app.stockify.rw
                </a>
                .
              </p>
              <a
                href="https://app.stockify.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-sm border border-white/25 text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Try Stockify
              </a>
            </div>
          )}

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setAttempted(true);
            }}
          >
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-zinc-400">Password</label>
                <Link href="/forgot-password" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 mt-1"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-600 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-sm border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-[0.1em] hover:border-zinc-600 hover:text-white transition-colors duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-sm border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-[0.1em] hover:border-zinc-600 hover:text-white transition-colors duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
          </div>

          <p className="text-center text-zinc-500 text-xs mt-8">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-white hover:text-zinc-300 transition-colors">
              Sign up →
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
