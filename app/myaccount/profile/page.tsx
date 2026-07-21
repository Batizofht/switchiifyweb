'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [name, setName] = useState('Jean Baptiste');
  const [email, setEmail] = useState('mubaptiste2005@gmail.com');

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors text-sm';

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">Account</p>
      <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Profile</h1>
      <p className="text-zinc-400 text-sm mb-10">
        Manage your personal information and how it appears across Switchiify.
      </p>

      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-zinc-300 text-xl font-semibold">{name[0]}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-base">{name}</p>
          <p className="text-zinc-500 text-sm">{email}</p>
        </div>
      </div>

      <form
        className="flex flex-col gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>

      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
        <h2 className="text-white font-semibold text-base mb-1">Password</h2>
        <p className="text-zinc-500 text-xs mb-5">Change the password used to sign in to your account.</p>
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <input type="password" placeholder="Current password" className={inputClass} />
          <input type="password" placeholder="New password" className={inputClass} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
