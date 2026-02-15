import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
      <section className="py-24 lg:py-36 text-center">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body mb-6">
            Về The Fish
          </p>
          <h1 className="font-heading text-h1 text-neutral-900">
            Câu Chuyện Của Chúng Tôi
          </h1>
        </div>
      </section>

      {/* Editorial frame */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="aspect-[16/7] bg-neutral-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                The Fish — Câu chuyện
              </p>
              <div className="w-16 h-px bg-neutral-300 mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Letter */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body mb-8">
            Thư gửi bạn
          </p>
          <div className="space-y-6 font-body text-neutral-500 leading-relaxed text-base">
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
              The Fish không ngừng nâng cao chất lượng dịch vụ — để mỗi ngày
              trọng đại đều trọn vẹn và đáng nhớ.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* White frame */}
            <div className="aspect-[4/5] bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-px bg-neutral-300 mx-auto mb-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                  Sứ mệnh
                </span>
                <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body">
                Sứ mệnh
              </p>
              <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                Nâng Niu Trọn Vẹn
                <br />Ngày Trọng Đại
              </h2>
              <div className="mt-8 space-y-5 font-body text-neutral-500 leading-relaxed">
                <p>
                  Sứ mệnh của The Fish là mang đến trải nghiệm lễ cưới truyền
                  thống trọn vẹn — nơi mà mỗi chi tiết được chăm chút bằng
                  sự am hiểu văn hóa sâu sắc và thẩm mỹ tinh tế.
                </p>
                <p>
                  Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi đồng hành
                  cùng bạn và gia đình, từ khâu tư vấn chọn áo dài, sắp xếp
                  mâm quả, đến từng bước trong nghi lễ đám hỏi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body">
                Giá trị cốt lõi
              </p>
              <h2 className="mt-4 font-heading text-h2 text-neutral-900">
                Truyền Thống — Tận Tâm — Tinh Tế
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Truyền thống",
                    desc: "Am hiểu sâu sắc phong tục cưới hỏi ba miền. Mỗi nghi lễ được thực hiện đúng theo truyền thống.",
                  },
                  {
                    title: "Tận tâm",
                    desc: "Từ cuộc gọi tư vấn đầu tiên đến khoảnh khắc cuối cùng, chúng tôi luôn đồng hành trong từng chi tiết.",
                  },
                  {
                    title: "Tinh tế",
                    desc: "Áo dài được chọn lựa kỹ càng, mâm quả sắp xếp nghệ thuật — mọi thứ đều hướng đến sự hoàn hảo.",
                  },
                ].map((value) => (
                  <div key={value.title} className="flex gap-5">
                    <div className="w-px bg-secondary-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-body text-sm font-medium text-neutral-900">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 font-body text-sm text-neutral-500 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* White frame */}
            <div className="aspect-[4/5] bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-px bg-neutral-300 mx-auto mb-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-body">
                  Giá trị
                </span>
                <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-neutral-200 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl text-white">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-sm text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeadingInline
            label="Đội ngũ"
            title="Những Con Người Đứng Sau Mỗi Ngày Trọng Đại"
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto h-48 w-48 bg-neutral-100 rounded-full flex items-center justify-center">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body">
                    Ảnh
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary-500 font-body mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-neutral-500 font-body max-w-xs mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-h2 text-neutral-900">
            Sẵn Sàng Cho Ngày Trọng Đại?
          </h2>
          <p className="mt-4 font-body text-neutral-500">
            Hãy để The Fish đồng hành cùng bạn.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/lien-he">
              <Button size="lg">
                Liên hệ tư vấn
              </Button>
            </Link>
            <Link href="/ao-dai">
              <Button variant="outline" size="lg">
                Xem áo dài
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeadingInline({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] uppercase tracking-[0.2em] text-secondary-500 font-body mb-4">
        {label}
      </p>
      <h2 className="font-heading text-h2 text-neutral-900">{title}</h2>
    </div>
  );
}
