import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";

export const dynamic = "force-static";

const BASE_URL = "https://www.switchiify.com";

const staticPages: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/about", priority: 0.9, changeFrequency: "monthly" },
  { url: "/gamingar", priority: 0.9, changeFrequency: "weekly" },
  { url: "/openspace", priority: 0.9, changeFrequency: "weekly" },
  { url: "/neuroai", priority: 0.9, changeFrequency: "weekly" },
  { url: "/services", priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/3d-design", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/aaa-games", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/ai-integration", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/animation", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/automation", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/emergency", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/game-dev", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/game-engine", priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/monitoring", priority: 0.7, changeFrequency: "monthly" },
  { url: "/research", priority: 0.7, changeFrequency: "monthly" },
  { url: "/research/electronics", priority: 0.6, changeFrequency: "monthly" },
  { url: "/research/laboratory", priority: 0.6, changeFrequency: "monthly" },
  { url: "/research/robotics", priority: 0.6, changeFrequency: "monthly" },
  { url: "/enterprise", priority: 0.8, changeFrequency: "monthly" },
  { url: "/community", priority: 0.8, changeFrequency: "weekly" },
  { url: "/blogs", priority: 0.8, changeFrequency: "daily" },
  { url: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { url: "/leadership", priority: 0.5, changeFrequency: "monthly" },
  { url: "/partners", priority: 0.6, changeFrequency: "monthly" },
  { url: "/press", priority: 0.6, changeFrequency: "weekly" },
  { url: "/investors", priority: 0.6, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { url: "/help", priority: 0.6, changeFrequency: "monthly" },
  { url: "/security", priority: 0.5, changeFrequency: "monthly" },
  { url: "/legal", priority: 0.3, changeFrequency: "yearly" },
  { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { url: "/signin", priority: 0.3, changeFrequency: "yearly" },
  { url: "/signup", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
