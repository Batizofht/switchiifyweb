'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'Edit Profile', desc: 'Update your name, email, and password.', href: '/myaccount/profile' },
  { label: 'Billing & Plan', desc: 'Manage your subscription and payment method.', href: '/myaccount/billing' },
  { label: 'Settings', desc: 'Notification preferences and account controls.', href: '/myaccount/settings' },
];

export default function AccountDashboardPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">Account</p>
      <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back.</h1>
      <p className="text-zinc-400 text-sm mb-10">
        Here&apos;s an overview of your Switchiify account.
      </p>

      {/* Plan summary */}
      <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1.5">Current Plan</p>
          <p className="text-white font-semibold text-lg">OpenSpace Pro</p>
        </div>
        <Link
          href="/myaccount/billing"
          className="inline-flex items-center px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
        >
          Manage Plan
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 text-center">
          <p className="text-3xl font-bold text-white mb-1">3</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Active Projects</p>
        </div>
        <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 text-center">
          <p className="text-3xl font-bold text-white mb-1">12</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Team Members</p>
        </div>
        <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 text-center">
          <p className="text-3xl font-bold text-white mb-1">68%</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Storage Used</p>
        </div>
      </div>

      {/* Quick links */}
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Quick Actions</p>
      <div className="flex flex-col gap-3">
        {quickLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between p-5 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
          >
            <div>
              <p className="text-white font-medium text-sm mb-0.5">{item.label}</p>
              <p className="text-zinc-500 text-xs">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
