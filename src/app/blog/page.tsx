import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <SectionHeading
        title="Blog"
        subtitle="Kiến thức về cưới hỏi, áo dài và văn hóa truyền thống Việt Nam."
      />

      {/* Featured Post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mb-12 grid gap-6 lg:grid-cols-2 lg:gap-10 items-center"
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge variant="primary" className="absolute top-4 left-4">
            Nổi bật
          </Badge>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-body mb-3">
            <span className="text-primary-500 font-medium">{featured.category}</span>
            <span>&middot;</span>
            <span>{featured.date}</span>
            <span>&middot;</span>
            <span>{featured.readTime}</span>
          </div>
          <h2 className="font-heading text-h2 font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors">
            {featured.title}
          </h2>
          <p className="mt-3 font-body text-neutral-500 leading-relaxed">
            {featured.excerpt}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary-500 group-hover:underline font-body">
            Đọc tiếp →
          </span>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-16 lg:pb-24">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-xl border border-neutral-200 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-body">
                <span className="text-primary-500 font-medium">{post.category}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 font-body line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
