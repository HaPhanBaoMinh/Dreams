import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, MessageCircle } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb
        items={[
          { label: "Áo dài", href: "/ao-dai" },
          { label: product.name },
        ]}
      />

      {/* ═══ Product Main ═══ */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 pb-16">
        {/* Image Gallery — White frames */}
        <div className="space-y-3">
          <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-px bg-neutral-300 mx-auto mb-3" />
              <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                {product.style}
              </span>
              <div className="w-12 h-px bg-neutral-300 mx-auto mt-3" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-neutral-100 flex items-center justify-center border border-transparent hover:border-neutral-900 transition-colors cursor-pointer"
              >
                <span className="text-xs text-neutral-400 font-body">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:py-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.occasion.map((occ) => (
              <Badge key={occ} variant="outline">{occ}</Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading text-h1 text-neutral-900">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-body text-neutral-900">
              {formatPrice(product.price)}
            </span>
            <span className="text-base text-neutral-400 font-body">/ ngày</span>
            {product.originalPrice && (
              <span className="text-base text-neutral-400 line-through font-body">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-6 text-base text-neutral-500 font-body leading-relaxed">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.12em] text-neutral-400 font-body">
                Size
              </span>
              <button className="text-sm text-neutral-500 hover:text-neutral-900 font-body transition-colors">
                Hướng dẫn chọn size
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, i) => (
                <button
                  key={size}
                  className={`border px-6 py-3 text-base font-body transition-colors ${
                    i === 1
                      ? "border-neutral-900 text-neutral-900"
                      : "border-neutral-300 text-neutral-500 hover:border-neutral-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="mt-8">
            <span className="text-xs uppercase tracking-[0.12em] text-neutral-400 font-body mb-3 block">
              Ngày thuê
            </span>
            <div className="flex items-center gap-3 border-b border-neutral-300 pb-3">
              <span className="text-base text-neutral-900 font-body">15/03/2026</span>
              <span className="text-neutral-300">—</span>
              <span className="text-base text-neutral-900 font-body">17/03/2026</span>
              <span className="ml-auto text-sm text-neutral-400 font-body">(3 ngày)</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="mt-6 py-6 border-t border-b border-neutral-200 space-y-3">
            <div className="flex justify-between text-base font-body">
              <span className="text-neutral-500">Giá thuê (3 ngày)</span>
              <span className="text-neutral-900">{formatPrice(product.price * 3)}</span>
            </div>
            <div className="flex justify-between text-base font-body">
              <span className="text-neutral-500">Đặt cọc (50%)</span>
              <span className="text-neutral-900">{formatPrice(Math.round(product.price * 3 * 0.5))}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 space-y-3">
            <Button size="xl" className="w-full">
              Đặt Thuê Ngay
            </Button>
            <Button variant="secondary" size="lg" className="w-full">
              <MessageCircle className="h-4 w-4" />
              Tư vấn qua Zalo
            </Button>
          </div>

          {/* Policies */}
          <div className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, text: "Hoàn cọc 100% nếu hủy trước 7 ngày" },
              { icon: Truck, text: "Giao nhận tận nơi nội thành TP. HCM" },
              { icon: RotateCcw, text: "Trả đồ dễ dàng — nhận tận nhà" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-neutral-500 font-body">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Details ═══ */}
      <div className="border-t border-neutral-200 py-16">
        <h2 className="font-heading text-2xl text-neutral-900 mb-8">Chi tiết</h2>
        <div className="max-w-2xl font-body text-base text-neutral-500 leading-relaxed">
          <p>{product.details}</p>
          <div className="mt-8 space-y-3">
            {[
              { label: "Chất liệu", value: product.material },
              { label: "Màu sắc", value: product.color },
              { label: "Phong cách", value: product.style },
              { label: "Phù hợp", value: product.occasion.join(", ") },
            ].map(({ label, value }) => (
              <div key={label} className="flex border-b border-neutral-200 pb-3">
                <span className="w-32 shrink-0 text-neutral-400">{label}</span>
                <span className="text-neutral-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Related Products ═══ */}
      <div className="border-t border-neutral-200 py-16 lg:py-20">
        <h2 className="font-heading text-h2 text-neutral-900 mb-12">
          Có Thể Bạn Cũng Thích
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
