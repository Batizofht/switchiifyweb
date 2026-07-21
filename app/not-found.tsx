import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Page not found</h1>

      <p className="mt-4 text-zinc-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Go Home
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
