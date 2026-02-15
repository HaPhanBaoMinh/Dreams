import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mx-auto max-w-2xl pb-16 lg:pb-24">
        {/* Header */}
        <FadeIn duration={900}>
          <div className="mb-12">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-body uppercase tracking-wider mb-6">
              <span>{post.category}</span>
              <span className="w-4 h-px bg-neutral-300" />
              <span>{post.date}</span>
              <span className="w-4 h-px bg-neutral-300" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-heading text-h1 text-neutral-900 leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 font-body text-xl text-neutral-500 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </FadeIn>

        {/* Featured frame */}
        <FadeIn delay={200} duration={1000}>
          <div className="aspect-[2/1] bg-neutral-100 flex items-center justify-center mb-12 hover-scale">
            <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
              {post.category}
            </span>
          </div>
        </FadeIn>

        {/* Article Body */}
        <FadeIn delay={300} duration={900}>
          <div className="prose prose-neutral max-w-none font-body prose-headings:font-heading prose-headings:font-normal prose-headings:tracking-tight prose-a:text-neutral-900 prose-a:underline-offset-4">
            <p>
              Trong văn hóa cưới hỏi Việt Nam, mỗi nghi lễ đều mang trong mình
              những ý nghĩa sâu sắc về tình yêu, lòng hiếu thảo và sự kết nối
              giữa hai gia đình.
            </p>

            <h2>Ý Nghĩa Của Truyền Thống</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <h2>Những Điều Cần Lưu Ý</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos.
            </p>
            <ul>
              <li>
                Chọn số mâm quả phù hợp với phong tục vùng miền.
              </li>
              <li>
                Áo dài cho đội bê tráp nên đồng bộ về màu sắc.
              </li>
              <li>
                Chuẩn bị tối thiểu 2-3 tháng trước ngày lễ.
              </li>
            </ul>

            <h2>Lời Kết</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </FadeIn>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Quay lại Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <div className="border-t border-neutral-200 py-16 lg:py-20">
        <FadeIn>
          <h2 className="font-heading text-h2 text-neutral-900 mb-12">
            Bài Viết Liên Quan
          </h2>
        </FadeIn>
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" stagger={120}>
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block"
            >
              <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-150 hover-scale">
                <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                  {p.category}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-body uppercase tracking-wider mb-2">
                <span>{p.category}</span>
                <span className="w-4 h-px bg-neutral-300" />
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug line-clamp-2">
                {p.title}
              </h3>
            </Link>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
