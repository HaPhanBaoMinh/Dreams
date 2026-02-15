import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/data";
import { CatalogFilters } from "./CatalogFilters";

export const metadata: Metadata = {
  title: "Cho Thuê Áo Dài — Bộ Sưu Tập Đa Dạng",
  description:
    "Hơn 1.200 mẫu áo dài cho thuê từ truyền thống đến cách tân. Áo dài cô dâu, chú rể, bê tráp và gia đình. Đa dạng size, chất liệu và màu sắc.",
};

export default function AoDaiCatalogPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1920&h=600&fit=crop"
          alt="Bộ sưu tập áo dài"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-h1 font-bold text-white">
              Áo Dài Cho Thuê
            </h1>
            <p className="mt-3 font-body text-neutral-200 max-w-lg mx-auto">
              Vẻ đẹp vượt thời gian — Hơn 1.200 mẫu áo dài sẵn sàng
              cho ngày trọng đại của bạn.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Áo Dài Cho Thuê" }]} />

        <div className="pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <CatalogFilters />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200">
                <p className="text-sm text-neutral-500 font-body">
                  <span className="font-semibold text-neutral-700">{products.length}</span> sản phẩm
                </p>
                <select className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 font-body focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                  <option>Nổi bật</option>
                  <option>Giá: Thấp → Cao</option>
                  <option>Giá: Cao → Thấp</option>
                  <option>Mới nhất</option>
                  <option>Đánh giá cao nhất</option>
                </select>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
