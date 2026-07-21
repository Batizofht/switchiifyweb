'use client';

import { useState } from 'react';

const toggles = [
  { key: 'product', label: 'Product updates', desc: 'New features and improvements across Switchiify products.' },
  { key: 'security', label: 'Security alerts', desc: 'Sign-in activity and account security notifications.' },
  { key: 'marketing', label: 'Marketing emails', desc: 'Occasional news, offers, and event invitations.' },
];

export default function SettingsPage() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    product: true,
    security: true,
    marketing: false,
  });

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">Account</p>
      <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Settings</h1>
      <p className="text-zinc-400 text-sm mb-10">
        Control notifications and manage your account.
      </p>

      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Notifications</p>
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden mb-10">
        {toggles.map((t, i) => (
          <div
            key={t.key}
            className={`flex items-center justify-between px-6 py-5 ${i !== toggles.length - 1 ? 'border-b border-zinc-800' : ''}`}
          >
            <div className="pr-6">
              <p className="text-white text-sm font-medium mb-0.5">{t.label}</p>
              <p className="text-zinc-500 text-xs">{t.desc}</p>
            </div>
            <button
              onClick={() => setEnabled((prev) => ({ ...prev, [t.key]: !prev[t.key] }))}
              aria-pressed={enabled[t.key]}
              className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                enabled[t.key] ? 'bg-white' : 'bg-zinc-700'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-black transition-transform ${
                  enabled[t.key] ? 'translate-x-[22px]' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-red-400/70 mb-4">Danger Zone</p>
      <div className="p-6 rounded-2xl bg-red-400/5 border border-red-400/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-white text-sm font-medium mb-0.5">Delete Account</p>
          <p className="text-zinc-500 text-xs">Permanently remove your account and all associated data.</p>
        </div>
        <button className="inline-flex items-center px-6 py-2.5 rounded-sm border border-red-400/40 text-red-400 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-red-400/10 hover:border-red-400/60 transition-all duration-300 shrink-0">
          Delete Account
        </button>
      </div>
    </div>
  );
}
