import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Truck, RotateCcw, MessageCircle, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `Thuê ${product.name}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Áo Dài", href: "/ao-dai" },
          { label: product.name },
        ]}
      />

      {/* ═══ Product Main ═══ */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 pb-12">
        {/* Image Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 border-2 border-transparent hover:border-primary-500 transition-colors cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${product.name} - ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:py-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.occasion.map((occ) => (
              <Badge key={occ} variant="primary">{occ}</Badge>
            ))}
            <Badge variant="default">{product.style}</Badge>
          </div>

          {/* Title */}
          <h1 className="font-heading text-h1 font-bold text-neutral-900">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-secondary-400 text-secondary-400"
                      : "text-neutral-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-500 font-body">
              {product.rating} ({product.reviewCount} đánh giá)
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-bold text-primary-500 font-body">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-neutral-400 font-body">/ ngày</span>
            {product.originalPrice && (
              <span className="text-base text-neutral-400 line-through font-body">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-neutral-600 font-body leading-relaxed">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-neutral-900 font-body">
                Size
              </span>
              <button className="text-xs text-primary-500 hover:underline font-body">
                Hướng dẫn chọn size
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, i) => (
                <button
                  key={size}
                  className={`rounded-md border px-5 py-2.5 text-sm font-medium transition-colors font-body ${
                    i === 1
                      ? "border-primary-500 bg-primary-50 text-primary-600"
                      : "border-neutral-200 text-neutral-600 hover:border-primary-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Date Picker placeholder */}
          <div className="mt-6">
            <span className="text-sm font-semibold text-neutral-900 font-body mb-2 block">
              Ngày thuê
            </span>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 bg-white">
              <span className="text-sm text-neutral-500 font-body">
                15/03/2026
              </span>
              <span className="text-neutral-300">→</span>
              <span className="text-sm text-neutral-500 font-body">
                17/03/2026
              </span>
              <span className="ml-auto text-xs text-neutral-400 font-body">(3 ngày)</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="mt-4 rounded-lg bg-neutral-100 p-4 space-y-2">
            <div className="flex justify-between text-sm font-body">
              <span className="text-neutral-600">Giá thuê (3 ngày)</span>
              <span className="font-semibold text-neutral-900">
                {formatPrice(product.price * 3)}
              </span>
            </div>
            <div className="flex justify-between text-sm font-body">
              <span className="text-neutral-600">Đặt cọc (50%)</span>
              <span className="font-semibold text-primary-500">
                {formatPrice(Math.round(product.price * 3 * 0.5))}
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 space-y-3">
            <Button size="xl" className="w-full rounded-lg text-base">
              Đặt Thuê Ngay
            </Button>
            <Button variant="secondary" size="lg" className="w-full rounded-lg">
              <MessageCircle className="h-4 w-4" />
              Tư vấn qua Zalo
            </Button>
          </div>

          {/* Policies */}
          <div className="mt-6 space-y-3">
            {[
              { icon: ShieldCheck, text: "Chính sách cho thuê minh bạch, hoàn cọc 100% nếu hủy trước 7 ngày" },
              { icon: Truck, text: "Giao nhận tận nơi trong nội thành TP. HCM" },
              { icon: RotateCcw, text: "Trả đồ dễ dàng — chúng tôi đến nhận tận nhà" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon className="h-4 w-4 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-xs text-neutral-500 font-body">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Details Tabs ═══ */}
      <div className="border-t border-neutral-200 py-12">
        <div className="flex gap-8 border-b border-neutral-200">
          {["Chi tiết", "Hướng dẫn size", "Đánh giá"].map((tab, i) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium font-body transition-colors border-b-2 ${
                i === 0
                  ? "border-primary-500 text-primary-500"
                  : "border-transparent text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {tab}
              {tab === "Đánh giá" && ` (${product.reviewCount})`}
            </button>
          ))}
        </div>

        <div className="mt-6 prose prose-neutral max-w-none font-body">
          <p>{product.details}</p>
          <table className="mt-4">
            <tbody>
              <tr>
                <td className="font-semibold pr-8 py-1.5 text-sm">Chất liệu</td>
                <td className="text-sm">{product.material}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-8 py-1.5 text-sm">Màu sắc</td>
                <td className="text-sm">{product.color}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-8 py-1.5 text-sm">Phong cách</td>
                <td className="text-sm">{product.style}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-8 py-1.5 text-sm">Phù hợp</td>
                <td className="text-sm">{product.occasion.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══ Related Products ═══ */}
      <div className="border-t border-neutral-200 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-semibold text-neutral-900 mb-8">
          Có Thể Bạn Cũng Thích
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
