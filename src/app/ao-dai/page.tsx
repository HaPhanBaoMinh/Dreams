import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductCard } from "@/components/product/ProductCard";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";
import { products } from "@/lib/data";
import { CatalogFilters } from "./CatalogFilters";

export const metadata: Metadata = {
  title: "Cho Thuê Áo Dài — Bộ Sưu Tập Đa Dạng",
  description:
    "Hơn 1.200 mẫu áo dài cho thuê từ truyền thống đến cách tân. Áo dài cô dâu, chú rể, bê tráp và gia đình.",
};

export default function AoDaiCatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Áo dài" }]} />

      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <FadeIn delay={100} duration={1000} distance={40}>
          <h1 className="font-heading text-h1 text-neutral-900">
            Áo Dài
          </h1>
          <p className="mt-4 font-body text-neutral-500 max-w-lg mx-auto">
            Hơn 1.200 mẫu áo dài sẵn sàng cho ngày trọng đại.
          </p>
        </FadeIn>
      </div>

      <div className="pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <FadeIn direction="left" distance={20} duration={800}>
            <aside className="w-full lg:w-60 shrink-0">
              <CatalogFilters />
            </aside>
          </FadeIn>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <FadeIn direction="none" duration={600}>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                <p className="text-base text-neutral-500 font-body">
                  <span className="text-neutral-900">{products.length}</span> sản phẩm
                </p>
                <select className="border-b border-neutral-300 bg-transparent px-0 py-2 text-base text-neutral-700 font-body focus:border-neutral-900 focus:outline-none">
                  <option>Nổi bật</option>
                  <option>Giá: Thấp → Cao</option>
                  <option>Giá: Cao → Thấp</option>
                  <option>Mới nhất</option>
                </select>
              </div>
            </FadeIn>

            {/* Grid */}
            <Stagger className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3" stagger={80}>
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </div>
  );
}
