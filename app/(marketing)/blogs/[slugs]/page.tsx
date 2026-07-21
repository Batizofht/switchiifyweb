import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slugs: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugs: string }>;
}): Promise<Metadata> {
  const { slugs } = await params;
  const post = blogPosts.find((p) => p.slug === slugs);

  if (!post) {
    return buildPageMetadata({
      title: 'Blog',
      description: 'Product, engineering, design, and research updates from Switchiify.',
      path: `/blogs/${slugs}`,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    image: { url: `${SITE_URL}${post.image}`, alt: post.title },
  });
}

const CATEGORY_CHIP_CLASS = 'text-zinc-300 bg-white/10';

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  const post = blogPosts.find((p) => p.slug === slugs);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const colorClass = CATEGORY_CHIP_CLASS;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 md:px-10 pb-16 pt-40">
          <Link href="/blogs" className="text-zinc-400 hover:text-white text-xs transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-5 ${colorClass}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-20">
        <article
          className="prose-switchiify max-w-3xl mx-auto px-6 md:px-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">More in {post.category}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-zinc-300 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Want more from Switchiify?</p>
        <Link
          href="/blogs"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Read More Articles
        </Link>
      </section>
    </div>
  );
}
