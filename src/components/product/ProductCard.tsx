import Image from "next/image";
import Link from "next/link";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/ao-dai/${product.slug}`} className="group block">
      <Card className="border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-transparent">
        <CardImage className="rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {!product.available && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-body font-medium text-sm">
                Đã được đặt
              </span>
            </div>
          )}
          {product.originalPrice && (
            <Badge
              variant="primary"
              className="absolute top-3 left-3"
            >
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </Badge>
          )}
        </CardImage>
        <CardContent className="px-1 pt-3 pb-0">
          <div className="flex items-center gap-1 mb-1">
            {product.occasion.slice(0, 2).map((occ) => (
              <Badge key={occ} variant="outline" className="text-[10px] px-1.5 py-0">
                {occ}
              </Badge>
            ))}
          </div>
          <h3 className="font-heading text-base font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors leading-snug">
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="font-body text-sm font-semibold text-primary-500">
              {formatPrice(product.price)}
              <span className="text-neutral-400 font-normal"> / ngày</span>
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-secondary-400 text-secondary-400" />
            <span className="text-xs text-neutral-500 font-body">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
