import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Phụ Kiện Cưới — Mấn, Trang Sức, Giày & Khăn Vấn",
  description:
    "Phụ kiện cưới đồng bộ cho áo dài: mấn đội đầu, khăn vấn, trang sức, giày cưới và các phụ kiện bưng quả. Cho thuê giá ưu đãi tại The Fish.",
};

const accessoryCategories = [
  {
    title: "Mấn Đội Đầu & Khăn Vấn",
    description:
      "Mấn thêu tay tinh xảo, khăn vấn đồng bộ theo tông màu áo dài. Đa dạng kiểu dáng từ truyền thống đến cách tân.",
    image:
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=600&fit=crop",
    count: 120,
  },
  {
    title: "Trang Sức Cưới",
    description:
      "Bộ trang sức cưới bao gồm vòng cổ, hoa tai, vòng tay phong cách truyền thống và hiện đại, tôn lên vẻ đẹp tà áo dài.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=600&fit=crop",
    count: 85,
  },
  {
    title: "Giày Cưới",
    description:
      "Giày cưới đa dạng kiểu dáng: giày gót cao, giày búp bê, giày thêu truyền thống. Đầy đủ size từ 35 đến 42.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
    count: 60,
  },
  {
    title: "Phụ Kiện Bưng Quả",
    description:
      "Khay quả, lồng đèn, nến trang trí, hoa giả cao cấp và các phụ kiện trang trí mâm quả cho lễ đám hỏi.",
    image:
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&h=600&fit=crop",
    count: 45,
  },
  {
    title: "Quạt & Ô Trang Trí",
    description:
      "Quạt lụa, ô giấy dầu và các phụ kiện chụp ảnh truyền thống, tạo điểm nhấn độc đáo cho bộ ảnh cưới.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
    count: 30,
  },
  {
    title: "Phụ Kiện Chú Rể",
    description:
      "Khăn đóng, nón, ghim cài áo và phụ kiện dành riêng cho chú rể, đồng bộ với trang phục áo dài nam.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
    count: 40,
  },
];

export default function AccessoriesPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop"
          alt="Phụ kiện cưới"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-h1 font-bold text-white">
              Phụ Kiện Cưới
            </h1>
            <p className="mt-3 font-body text-neutral-200 max-w-lg mx-auto">
              Hoàn thiện diện mạo ngày cưới với bộ sưu tập phụ kiện đa dạng,
              đồng bộ cùng áo dài.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Phụ Kiện" }]} />

        <div className="pb-16 lg:pb-24">
          <SectionHeading
            title="Danh Mục Phụ Kiện"
            subtitle="Mọi thứ bạn cần để hoàn thiện diện mạo cho ngày trọng đại."
          />

          {/* Category Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accessoryCategories.map((category) => (
              <div
                key={category.title}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1">
                    <span className="text-xs font-medium text-neutral-700 font-body">
                      {category.count}+ sản phẩm
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 font-body line-clamp-2">
                    {category.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all font-body">
                    Xem chi tiết <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl bg-neutral-100 p-8 sm:p-12 text-center">
            <h2 className="font-heading text-h3 font-semibold text-neutral-900">
              Cần tư vấn phối phụ kiện?
            </h2>
            <p className="mt-3 font-body text-neutral-500 max-w-md mx-auto">
              Đội ngũ của The Fish sẵn sàng hỗ trợ bạn phối hợp phụ kiện
              đồng bộ với áo dài, tạo nên diện mạo hoàn hảo.
            </p>
            <div className="mt-6">
              <Link href="/lien-he">
                <Button size="lg" className="rounded-full">
                  Liên hệ tư vấn <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
