import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, CalendarDays, Truck, ShieldCheck } from "lucide-react";
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
      <section className="relative h-[70vh] min-h-[500px] lg:h-[85vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
          alt="Vietnamese wedding ceremony"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary-300 mb-4">
                Dịch vụ cưới hỏi trọn gói
              </p>
              <h1 className="font-heading text-display font-bold text-white leading-[1.1]">
                Trọn vẹn lễ nghĩa —{" "}
                <span className="text-secondary-300">Trọn vẹn yêu thương</span>
              </h1>
              <p className="mt-5 font-body text-base text-neutral-200 leading-relaxed max-w-md">
                Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới cao cấp,
                nâng niu từng khoảnh khắc trong ngày trọng đại của bạn.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lien-he">
                  <Button size="lg" className="rounded-full">
                    Đặt lịch tư vấn
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/ao-dai">
                  <Button variant="secondary" size="lg" className="rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                    Xem áo dài
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Heart, text: "500+ lễ cưới đã phục vụ" },
              { icon: CalendarDays, text: "Đặt lịch linh hoạt" },
              { icon: Truck, text: "Giao nhận tận nơi" },
              { icon: ShieldCheck, text: "Cam kết chất lượng" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 justify-center">
                <Icon className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-xs sm:text-sm font-body text-neutral-600">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT CATEGORIES ═══ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sản Phẩm Của Chúng Tôi"
            subtitle="Áo dài cao cấp và phụ kiện đồng bộ cho ngày cưới hỏi trọn vẹn."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Áo Dài",
                subtitle: "Cho thuê áo dài cưới",
                description: "Hơn 1.200 mẫu áo dài từ truyền thống đến cách tân, cho cô dâu, chú rể, đội bê tráp và gia đình.",
                image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=600&fit=crop",
                href: "/ao-dai",
              },
              {
                title: "Phụ Kiện",
                subtitle: "Trang sức & phụ kiện cưới",
                description: "Mấn đội đầu, khăn vấn, trang sức, giày cưới và các phụ kiện đồng bộ cho ngày trọng đại.",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
                href: "/phu-kien",
              },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group relative overflow-hidden rounded-xl aspect-[4/5]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-wider text-secondary-300 font-body">
                    {category.subtitle}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 line-clamp-2 font-body">
                    {category.description}
                  </p>
                  <div className="mt-3 flex items-center">
                    <span className="text-sm text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Khám phá <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cách Thức Hoạt Động"
            subtitle="Quy trình đơn giản, minh bạch — để bạn an tâm tận hưởng ngày vui."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white font-heading text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              title="Áo Dài Nổi Bật"
              subtitle="Những mẫu áo dài được yêu thích nhất, sẵn sàng cho ngày trọng đại."
              align="left"
              className="mb-0"
            />
            <Link
              href="/ao-dai"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors font-body whitespace-nowrap"
            >
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/ao-dai">
              <Button variant="outline" className="rounded-full">
                Xem tất cả áo dài <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BRAND STORY ═══ */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&h=1000&fit=crop"
                alt="The Fish brand story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
                Câu chuyện của chúng tôi
              </span>
              <h2 className="mt-3 font-heading text-h2 font-semibold text-neutral-900">
                Nơi Truyền Thống Gặp Gỡ Yêu Thương
              </h2>
              <div className="mt-4 h-px w-16 bg-secondary-500" />
              <div className="mt-6 space-y-4 font-body text-neutral-600 leading-relaxed">
                <p>
                  The Fish ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới
                  Việt Nam — nơi mỗi chiếc áo dài, mỗi mâm quả đều mang trong
                  mình câu chuyện về tình yêu, sự kính trọng và lời hứa gắn kết
                  hai gia đình.
                </p>
                <p>
                  Chúng tôi tin rằng ngày cưới không chỉ là sự kiện — đó là di
                  sản văn hóa được truyền từ thế hệ này sang thế hệ khác. Và mỗi
                  chi tiết, từ tà áo dài đến cách sắp xếp mâm quả, đều xứng đáng
                  được nâng niu trọn vẹn.
                </p>
              </div>
              <Link href="/ve-chung-toi" className="mt-6 inline-block">
                <Button variant="outline" className="rounded-full">
                  Đọc thêm về The Fish <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Khoảnh Khắc Hạnh Phúc"
            subtitle="Niềm vui của khách hàng là động lực lớn nhất của chúng tôi."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary-400 text-secondary-400"
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-neutral-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 font-body">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-400 font-body">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              title="Từ Blog Của Chúng Tôi"
              subtitle="Kiến thức về cưới hỏi, áo dài và văn hóa truyền thống Việt Nam."
              align="left"
              className="mb-0"
            />
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors font-body whitespace-nowrap"
            >
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl bg-white border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
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
      </section>

      {/* ═══ NEWSLETTER CTA ═══ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary-500 px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }} />
            </div>
            <div className="relative z-10">
              <h2 className="font-heading text-h2 font-bold text-white">
                Nhận tư vấn miễn phí cho ngày trọng đại
              </h2>
              <p className="mt-3 font-body text-primary-100 max-w-lg mx-auto">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn gói dịch vụ phù hợp
                nhất cho lễ cưới của bạn.
              </p>
              <div className="mt-8">
                <NewsletterForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
