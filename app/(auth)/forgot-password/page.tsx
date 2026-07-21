'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

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
          {sent ? (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Check your email</h1>
                <p className="text-zinc-400 text-sm">
                  If an account exists for <span className="text-white">{email}</span>, we&apos;ve sent a link to reset your password.
                </p>
              </div>
              <Link
                href="/signin"
                className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Back to Sign In
              </Link>
            </>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Reset your password</h1>
                <p className="text-zinc-400 text-sm">
                  Enter the email associated with your account and we&apos;ll send you a reset link.
                </p>
              </div>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 mt-1"
                >
                  Send Reset Link
                </button>
              </form>

              <p className="text-center text-zinc-500 text-xs mt-8">
                Remembered your password?{' '}
                <Link href="/signin" className="text-white hover:text-zinc-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
