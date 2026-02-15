import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Kiến Thức Cưới Hỏi & Áo Dài",
  description:
    "Cập nhật kiến thức về cưới hỏi truyền thống, hướng dẫn chọn áo dài, xu hướng thời trang cưới và văn hóa bưng quả Việt Nam.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <h1 className="font-heading text-h1 text-neutral-900">
          Blog
        </h1>
        <p className="mt-4 font-body text-neutral-500 max-w-lg mx-auto">
          Kiến thức về cưới hỏi, áo dài và văn hóa truyền thống Việt Nam.
        </p>
      </div>

      {/* Featured Post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group grid gap-10 lg:grid-cols-2 items-center mb-20 lg:mb-24"
      >
        {/* White frame */}
        <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center transition-all duration-500 group-hover:bg-neutral-150">
          <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body">
            {featured.category}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-body uppercase tracking-wider mb-4">
            <span>{featured.category}</span>
            <span className="w-4 h-px bg-neutral-300" />
            <span>{featured.date}</span>
            <span className="w-4 h-px bg-neutral-300" />
            <span>{featured.readTime}</span>
          </div>
          <h2 className="font-heading text-h2 text-neutral-900 group-hover:text-secondary-600 transition-colors">
            {featured.title}
          </h2>
          <p className="mt-4 font-body text-neutral-500 leading-relaxed">
            {featured.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-body text-neutral-900 group-hover:gap-3 transition-all duration-300">
            Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-24 lg:pb-32 border-t border-neutral-200 pt-16">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            {/* White frame */}
            <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-150">
              <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body">
                {post.category}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-body uppercase tracking-wider mb-2">
              <span>{post.category}</span>
              <span className="w-4 h-px bg-neutral-300" />
              <span>{post.readTime}</span>
            </div>
            <h3 className="font-heading text-lg text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 font-body line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
