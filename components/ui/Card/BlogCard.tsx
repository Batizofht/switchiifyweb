import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  Product: 'text-blue-400 bg-blue-400/10',
  Engineering: 'text-green-400 bg-green-400/10',
  Design: 'text-purple-400 bg-purple-400/10',
  Research: 'text-cyan-400 bg-cyan-400/10',
  Company: 'text-orange-400 bg-orange-400/10',
};

export function BlogCard({ slug, title, excerpt, category, date, readTime, image }: BlogCardProps) {
  const colorClass = categoryColors[category] ?? 'text-zinc-400 bg-zinc-400/10';

  return (
    <Link
      href={`/blogs/${slug}`}
      className="group flex flex-col rounded-2xl bg-zinc-900 dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      {!image && (
        <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-zinc-700" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colorClass}`}>
            {category}
          </span>
        </div>
        <h3 className="text-zinc-900 dark:text-white font-semibold text-base leading-snug mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors flex-1">
          {title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-600">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
