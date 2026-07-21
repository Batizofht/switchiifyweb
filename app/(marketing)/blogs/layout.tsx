import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog',
  description: 'Product, engineering, design, and research updates from the team building Gamingar, Neuro AI, and OpenSpace.',
  path: '/blogs',
});

const blogNavLinks = [
  { label: 'All Posts', href: '/blogs' },
  { label: 'Product', href: '/blogs?category=Product' },
  { label: 'Engineering', href: '/blogs?category=Engineering' },
  { label: 'Design', href: '/blogs?category=Design' },
  { label: 'Research', href: '/blogs?category=Research' },
  { label: 'Company', href: '/blogs?category=Company' },
];

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Blog sub-nav */}
      <div className="sticky top-14 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 h-11 overflow-x-auto scrollbar-hide">
            <div className="border-l-2 border-white/40 pl-3 shrink-0">
              <span className="text-xs font-semibold text-white tracking-tight">Switchiify Blog</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {blogNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-zinc-500 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
