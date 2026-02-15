import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Về Chúng Tôi — Câu Chuyện Của The Fish",
  description:
    "The Fish ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới Việt Nam. Tìm hiểu câu chuyện, sứ mệnh và đội ngũ của chúng tôi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop"
                alt="The Fish team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <h1 className="font-heading text-h1 font-bold text-white">
            Câu Chuyện Của The Fish
          </h1>
        </div>
      </div>

      {/* Letter */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
            Thư gửi bạn
          </span>
          <div className="mt-2 h-px w-16 bg-secondary-500 mx-auto" />
          <div className="mt-8 space-y-5 font-body text-neutral-600 leading-relaxed text-base">
            <p>
              The Fish ra đời từ tình yêu với vẻ đẹp truyền thống của lễ cưới
              Việt Nam — nơi mỗi chiếc áo dài, mỗi mâm quả đều mang trong
              mình câu chuyện về tình yêu, sự kính trọng và lời hứa gắn kết
              hai gia đình.
            </p>
            <p>
              Chúng tôi tin rằng ngày cưới không chỉ là sự kiện — đó là di
              sản văn hóa được truyền từ thế hệ này sang thế hệ khác. Mỗi
              đường kim, mỗi mũi chỉ trên tà áo dài, mỗi quả trầu cau
              được xếp đặt cẩn thận, đều là cách chúng ta giữ gìn và tôn
              vinh những giá trị thiêng liêng nhất.
            </p>
            <p>
              Với hơn 5 năm kinh nghiệm và hơn 500 lễ cưới đã đồng hành,
              The Fish không ngừng nâng cao chất lượng dịch vụ — từ đào tạo
              đội bưng quả chuyên nghiệp, mở rộng bộ sưu tập áo dài, đến
              tư vấn nghi lễ tận tâm — để mỗi ngày trọng đại đều trọn vẹn
              và đáng nhớ.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop"
                alt="Sứ mệnh của The Fish"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
                Sứ mệnh
              </span>
              <h2 className="mt-3 font-heading text-h2 font-semibold text-neutral-900">
                Nâng Niu Trọn Vẹn Ngày Trọng Đại
              </h2>
              <div className="mt-4 h-px w-16 bg-secondary-500" />
              <div className="mt-6 space-y-4 font-body text-neutral-600 leading-relaxed">
                <p>
                  Sứ mệnh của The Fish là mang đến trải nghiệm lễ cưới truyền
                  thống trọn vẹn — nơi mà mỗi chi tiết được chăm chút bằng
                  sự am hiểu văn hóa sâu sắc và thẩm mỹ tinh tế.
                </p>
                <p>
                  Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi đồng hành
                  cùng bạn và gia đình, từ khâu tư vấn chọn áo dài, sắp xếp
                  mâm quả, đến từng bước trong nghi lễ đám hỏi. Để bạn an
                  tâm tận hưởng, và gia đình hai bên đều tự hào.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-body">
                Giá trị cốt lõi
              </span>
              <h2 className="mt-3 font-heading text-h2 font-semibold text-neutral-900">
                Truyền Thống — Tận Tâm — Tinh Tế
              </h2>
              <div className="mt-4 h-px w-16 bg-secondary-500" />
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Truyền thống",
                    desc: "Am hiểu sâu sắc phong tục cưới hỏi ba miền. Mỗi nghi lễ được thực hiện đúng theo truyền thống, tôn trọng giá trị văn hóa.",
                  },
                  {
                    title: "Tận tâm",
                    desc: "Từ cuộc gọi tư vấn đầu tiên đến khoảnh khắc cuối cùng của buổi lễ, chúng tôi luôn đồng hành và chu đáo trong từng chi tiết.",
                  },
                  {
                    title: "Tinh tế",
                    desc: "Áo dài được chọn lựa kỹ càng, mâm quả sắp xếp nghệ thuật, đội bưng quả đẹp đôi — mọi thứ đều hướng đến sự hoàn hảo.",
                  },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <div>
                      <h3 className="font-body text-sm font-semibold text-neutral-900">
                        {value.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-neutral-500 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=1000&fit=crop"
                alt="Giá trị cốt lõi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-primary-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Đội Ngũ Của Chúng Tôi"
            subtitle="Những con người tâm huyết đứng sau mỗi ngày trọng đại."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-500 font-body">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-neutral-500 font-body max-w-xs mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-h2 font-semibold text-neutral-900">
            Sẵn Sàng Cho Ngày Trọng Đại?
          </h2>
          <p className="mt-3 font-body text-neutral-500">
            Hãy để The Fish đồng hành cùng bạn. Liên hệ ngay để nhận tư vấn miễn phí.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/lien-he">
              <Button size="lg" className="rounded-full">
                Liên hệ tư vấn <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/ao-dai">
              <Button variant="secondary" size="lg" className="rounded-full">
                Xem áo dài
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
