import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mx-auto max-w-3xl pb-16 lg:pb-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-neutral-400 font-body mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              <span className="text-primary-500 font-medium">{post.category}</span>
            </span>
            <span>&middot;</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span>&middot;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-heading text-h1 font-bold text-neutral-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 font-body text-lg text-neutral-500 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[2/1] overflow-hidden rounded-xl mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body (placeholder) */}
        <div className="prose prose-neutral max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline">
          <p>
            Trong văn hóa cưới hỏi Việt Nam, mỗi nghi lễ đều mang trong mình
            những ý nghĩa sâu sắc về tình yêu, lòng hiếu thảo và sự kết nối
            giữa hai gia đình. Bài viết này sẽ giúp bạn hiểu rõ hơn về những
            giá trị truyền thống quý báu ấy.
          </p>

          <h2>Ý Nghĩa Của Truyền Thống</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>

          <h2>Những Điều Cần Lưu Ý</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <ul>
            <li>
              Chọn số mâm quả phù hợp với phong tục vùng miền (thường là số
              lẻ: 5, 7, 9, 11 mâm).
            </li>
            <li>
              Áo dài cho đội bê tráp nên đồng bộ về màu sắc và phong cách
              để tạo ấn tượng trang trọng.
            </li>
            <li>
              Thời gian chuẩn bị tối thiểu nên là 2-3 tháng trước ngày lễ
              để có đủ thời gian chọn đồ và thử áo.
            </li>
          </ul>

          <h2>Lời Kết</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-10 pt-8 border-t border-neutral-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors font-body"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <div className="border-t border-neutral-200 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-semibold text-neutral-900 mb-8">
          Bài Viết Liên Quan
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-body">
                  <span className="text-primary-500 font-medium">{p.category}</span>
                  <span>&middot;</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors leading-snug line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
