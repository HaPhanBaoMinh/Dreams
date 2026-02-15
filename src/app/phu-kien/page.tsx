import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger } from "@/components/animation/FadeIn";

export const metadata: Metadata = {
  title: "Phụ Kiện Cưới — Mấn, Trang Sức, Giày & Khăn Vấn",
  description:
    "Phụ kiện cưới đồng bộ cho áo dài: mấn đội đầu, khăn vấn, trang sức, giày cưới và các phụ kiện bưng quả. Cho thuê tại The Fish.",
};

const accessoryCategories = [
  {
    title: "Mấn Đội Đầu & Khăn Vấn",
    description: "Mấn thêu tay tinh xảo, khăn vấn đồng bộ theo tông màu áo dài.",
    count: 120,
  },
  {
    title: "Trang Sức Cưới",
    description: "Vòng cổ, hoa tai, vòng tay phong cách truyền thống và hiện đại.",
    count: 85,
  },
  {
    title: "Giày Cưới",
    description: "Giày gót cao, giày búp bê, giày thêu truyền thống. Size 35–42.",
    count: 60,
  },
  {
    title: "Phụ Kiện Bưng Quả",
    description: "Khay quả, lồng đèn, nến trang trí, hoa giả cao cấp.",
    count: 45,
  },
  {
    title: "Quạt & Ô Trang Trí",
    description: "Quạt lụa, ô giấy dầu và phụ kiện chụp ảnh truyền thống.",
    count: 30,
  },
  {
    title: "Phụ Kiện Chú Rể",
    description: "Khăn đóng, nón, ghim cài áo và phụ kiện dành riêng cho chú rể.",
    count: 40,
  },
];

export default function AccessoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Phụ kiện" }]} />

      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <FadeIn delay={100} duration={1000} distance={40}>
          <h1 className="font-heading text-h1 text-neutral-900">
            Phụ Kiện
          </h1>
          <p className="mt-4 font-body text-neutral-500 max-w-lg mx-auto">
            Hoàn thiện diện mạo ngày cưới với phụ kiện đồng bộ cùng áo dài.
          </p>
        </FadeIn>
      </div>

      <div className="pb-24 lg:pb-32">
        {/* Category Grid */}
        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={100}>
          {accessoryCategories.map((category) => (
            <div
              key={category.title}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-neutral-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-neutral-150 hover-scale">
                <div className="text-center">
                  <div className="w-10 h-px bg-neutral-300 mx-auto mb-3" />
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-body">
                    {category.count}+ sản phẩm
                  </span>
                  <div className="w-10 h-px bg-neutral-300 mx-auto mt-3" />
                </div>
              </div>
              <h3 className="font-heading text-xl text-neutral-900 group-hover:text-secondary-600 transition-colors">
                {category.title}
              </h3>
              <p className="mt-2 text-base text-neutral-500 font-body">
                {category.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-500 font-body group-hover:text-neutral-900 arrow-slide">
                Xem chi tiết <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </Stagger>

        {/* CTA */}
        <FadeIn duration={1000}>
          <div className="mt-24 text-center py-16 border-t border-neutral-200">
            <h2 className="font-heading text-h3 text-neutral-900">
              Cần tư vấn phối phụ kiện?
            </h2>
            <p className="mt-4 font-body text-neutral-500 max-w-md mx-auto">
              Đội ngũ The Fish sẵn sàng hỗ trợ bạn phối hợp phụ kiện
              đồng bộ với áo dài.
            </p>
            <div className="mt-8">
              <Link href="/lien-he">
                <Button size="lg">
                  Liên hệ tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
