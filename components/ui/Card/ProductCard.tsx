'use client';

import Link from 'next/link';
import { ProductCardProps } from '@/types';

export default function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 backdrop-blur-sm transition-all duration-300 hover:bg-white/8"
    >
      <div className="flex-1 min-w-0 pr-4">
        <p className="text-white font-semibold text-base mb-1 truncate">{title}</p>
        <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
