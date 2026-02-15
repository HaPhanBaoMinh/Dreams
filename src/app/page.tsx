import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { ProductCard } from "@/components/product/ProductCard";
import { products, processSteps, testimonials, blogPosts } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-secondary-500 mb-6">
              Dịch vụ cưới hỏi cao cấp
            </p>
            <h1 className="font-heading text-display text-neutral-900 leading-[1.05]">
              Trọn vẹn lễ nghĩa,
              <br />
              trọn vẹn yêu thương
            </h1>
            <p className="mt-8 font-body text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto">
              Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới cao cấp,
              nâng niu từng khoảnh khắc trong ngày trọng đại.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/lien-he">
                <Button size="lg">
                  Đặt lịch tư vấn
                </Button>
              </Link>
              <Link href="/ao-dai">
                <Button variant="outline" size="lg">
                  Khám phá áo dài
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EDITORIAL IMAGE FRAME ═══ */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                The Fish — Since 2021
              </p>
              <div className="w-16 h-px bg-neutral-300 mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT CATEGORIES ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Sản Phẩm"
            subtitle="Áo dài cao cấp và phụ kiện đồng bộ cho ngày cưới hỏi trọn vẹn."
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Áo Dài",
                description: "Hơn 1.200 mẫu áo dài từ truyền thống đến cách tân",
                href: "/ao-dai",
              },
              {
                title: "Phụ Kiện",
                description: "Mấn, khăn vấn, trang sức, giày và phụ kiện đồng bộ",
                href: "/phu-kien",
              },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group block"
              >
                <div className="aspect-[4/5] bg-neutral-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-neutral-150">
                  <div className="text-center px-8">
                    <div className="w-12 h-px bg-neutral-300 mx-auto mb-4" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                      {category.title}
                    </span>
                    <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
                  </div>
                </div>
                <h3 className="font-heading text-xl text-neutral-900 group-hover:text-secondary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 font-body">
                  {category.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[13px] text-neutral-900 font-body group-hover:gap-3 transition-all duration-300">
                  Khám phá <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Quy Trình"
            subtitle="Bốn bước đơn giản để có ngày trọng đại hoàn hảo."
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <span className="font-heading text-4xl text-neutral-300">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-lg text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-500 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <SectionHeading
              title="Áo Dài Nổi Bật"
              align="left"
              className="mb-0"
            />
            <Link
              href="/ao-dai"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] font-body text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Xem tất cả <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BRAND STORY ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* White frame placeholder */}
            <div className="aspect-[4/5] bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-px bg-neutral-300 mx-auto mb-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                  Câu chuyện
                </span>
                <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body">
                Về The Fish
              </p>
              <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                Nơi truyền thống
                <br />gặp gỡ yêu thương
              </h2>
              <div className="mt-8 space-y-5 font-body text-neutral-500 leading-relaxed">
                <p>
                  The Fish ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới
                  Việt Nam — nơi mỗi chiếc áo dài, mỗi mâm quả đều mang trong
                  mình câu chuyện về tình yêu và lời hứa gắn kết.
                </p>
                <p>
                  Chúng tôi tin rằng ngày cưới không chỉ là sự kiện — đó là di
                  sản văn hóa được truyền từ thế hệ này sang thế hệ khác.
                </p>
              </div>
              <Link href="/ve-chung-toi" className="mt-8 inline-block">
                <Button variant="outline">
                  Đọc thêm <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Khách Hàng Nói Gì"
            subtitle="Niềm vui của khách hàng là động lực lớn nhất của chúng tôi."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 border border-neutral-200"
              >
                <p className="font-body text-sm text-neutral-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm font-medium text-neutral-900 font-body">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-400 font-body mt-0.5">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <SectionHeading
              title="Blog"
              subtitle="Kiến thức về cưới hỏi, áo dài và văn hóa truyền thống."
              align="left"
              className="mb-0"
            />
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] font-body text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Xem tất cả <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {/* White frame placeholder */}
                <div className="aspect-[3/2] bg-white flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-50">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-body uppercase tracking-wider mb-2">
                  <span>{post.category}</span>
                  <span className="w-4 h-px bg-neutral-300" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-h2 text-neutral-900">
            Nhận tư vấn miễn phí
          </h2>
          <p className="mt-4 font-body text-neutral-500 max-w-md mx-auto leading-relaxed">
            Để lại email, chúng tôi sẽ liên hệ tư vấn gói dịch vụ phù hợp
            nhất cho ngày trọng đại của bạn.
          </p>
          <div className="mt-10">
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
