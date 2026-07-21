'use client';

const invoices = [
  { id: 'INV-2026-0007', date: 'Jul 1, 2026', amount: '$49.00', status: 'Paid' },
  { id: 'INV-2026-0006', date: 'Jun 1, 2026', amount: '$49.00', status: 'Paid' },
  { id: 'INV-2026-0005', date: 'May 1, 2026', amount: '$49.00', status: 'Paid' },
];

export default function BillingPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">Account</p>
      <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Billing</h1>
      <p className="text-zinc-400 text-sm mb-10">
        Manage your subscription, payment method, and invoice history.
      </p>

      {/* Current plan */}
      <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1.5">Current Plan</p>
          <p className="text-white font-semibold text-lg mb-1">OpenSpace Pro — $49/mo</p>
          <p className="text-zinc-500 text-xs">Renews on August 1, 2026</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Change Plan
          </a>
        </div>
      </div>

      {/* Payment method */}
      <div className="p-6 rounded-md bg-white/[0.03] border border-white/10 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-8 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400 font-semibold shrink-0">
            VISA
          </div>
          <div>
            <p className="text-white text-sm font-medium">•••• •••• •••• 4242</p>
            <p className="text-zinc-500 text-xs">Expires 08/28</p>
          </div>
        </div>
        <button className="inline-flex items-center px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300">
          Update
        </button>
      </div>

      {/* Invoices */}
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Invoice History</p>
      <div className="rounded-md bg-white/[0.03] border border-white/10 overflow-hidden">
        {invoices.map((inv, i) => (
          <div
            key={inv.id}
            className={`flex items-center justify-between px-6 py-4 ${i !== invoices.length - 1 ? 'border-b border-zinc-800' : ''}`}
          >
            <div>
              <p className="text-white text-sm font-medium">{inv.id}</p>
              <p className="text-zinc-500 text-xs">{inv.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-wider text-green-400 bg-green-400/10 px-2.5 py-1 rounded-sm font-semibold">
                {inv.status}
              </span>
              <span className="text-zinc-300 text-sm w-16 text-right">{inv.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
