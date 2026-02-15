import Link from "next/link";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/ao-dai/${product.slug}`} className="group block">
      <Card className="bg-transparent">
        <CardImage>
          {/* White frame placeholder */}
          <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-12 h-px bg-neutral-300 mx-auto mb-3" />
              <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                {product.style}
              </span>
              <div className="w-12 h-px bg-neutral-300 mx-auto mt-3" />
            </div>
          </div>
          {!product.available && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="text-neutral-500 font-body font-medium text-xs uppercase tracking-widest">
                Đã được đặt
              </span>
            </div>
          )}
        </CardImage>
        <CardContent className="px-0 pt-4 pb-0">
          <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body">
            {product.occasion[0]}
          </p>
          <h3 className="mt-1 font-heading text-base text-neutral-900 group-hover:text-secondary-600 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-2 font-body text-sm text-neutral-500">
            {formatPrice(product.price)}
            <span className="text-neutral-400"> / ngày</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
