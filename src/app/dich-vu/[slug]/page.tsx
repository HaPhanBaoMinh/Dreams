import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, processSteps, testimonials } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Dịch Vụ`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary-300 font-body">
              {service.subtitle}
            </span>
            <h1 className="mt-2 font-heading text-h1 font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-3 max-w-lg font-body text-neutral-200">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: service.title },
          ]}
        />
      </div>

      {/* Pricing Tiers */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bảng Giá Dịch Vụ"
            subtitle="Linh hoạt cho mọi nhu cầu — từ gói cơ bản đến trọn gói cao cấp."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Cơ Bản",
                price: "3.500.000₫",
                features: [
                  "4 đôi bưng quả (nam + nữ)",
                  "Áo dài đồng phục cho đội",
                  "Hướng dẫn nghi lễ cơ bản",
                  "Có mặt trước 1 giờ",
                ],
              },
              {
                name: "Tiêu Chuẩn",
                price: "5.500.000₫",
                popular: true,
                features: [
                  "6 đôi bưng quả (nam + nữ)",
                  "Áo dài cao cấp cho đội",
                  "MC dẫn chương trình",
                  "Tổng duyệt trước 1 ngày",
                  "Hỗ trợ sắp xếp mâm quả",
                  "Có mặt trước 2 giờ",
                ],
              },
              {
                name: "Cao Cấp",
                price: "8.000.000₫",
                features: [
                  "8-12 đôi bưng quả (nam + nữ)",
                  "Áo dài premium cho đội",
                  "MC + tư vấn nghi lễ chuyên sâu",
                  "Tổng duyệt trước 2 ngày",
                  "Trang trí mâm quả nghệ thuật",
                  "Quay phim + chụp ảnh nghi lễ",
                  "Có mặt trước 3 giờ",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-6 ${
                  tier.popular
                    ? "border-primary-500 bg-primary-50 ring-1 ring-primary-500 relative"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-3 py-1 text-xs font-medium text-white font-body">
                    Phổ biến nhất
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {tier.name}
                </h3>
                <p className="mt-2 font-body">
                  <span className="text-2xl font-bold text-neutral-900">
                    {tier.price}
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-neutral-600 font-body">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/lien-he" className="mt-6 block">
                  <Button
                    variant={tier.popular ? "primary" : "secondary"}
                    size="md"
                    className="w-full rounded-lg"
                  >
                    Đặt lịch tư vấn
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Quy Trình Làm Việc"
            subtitle="4 bước đơn giản để có một ngày trọng đại hoàn hảo."
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

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-h2 font-semibold text-neutral-900">
            Sẵn Sàng Đặt Dịch Vụ?
          </h2>
          <p className="mt-3 font-body text-neutral-500">
            Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/lien-he">
              <Button size="lg" className="rounded-full">
                Liên hệ ngay <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
