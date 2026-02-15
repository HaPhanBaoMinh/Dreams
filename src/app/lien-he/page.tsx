import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ — Đặt Lịch Tư Vấn Miễn Phí",
  description:
    "Liên hệ The Fish để nhận tư vấn miễn phí về dịch vụ bưng quả và cho thuê áo dài cưới. Showroom tại Quận 1, TP. Hồ Chí Minh.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <div className="pb-24 lg:pb-32">
        {/* Hero */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="font-heading text-h1 text-neutral-900">
            Liên Hệ
          </h1>
          <p className="mt-4 font-body text-neutral-500 max-w-md mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho ngày trọng đại.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-xl text-neutral-900 mb-8">
              Gửi yêu cầu tư vấn
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12">
            <h2 className="font-heading text-xl text-neutral-900 mb-8">
              Thông tin
            </h2>

            <div className="space-y-8">
              {[
                {
                  label: "Địa chỉ",
                  value: "123 Đường ABC, Phường XYZ\nQuận 1, TP. Hồ Chí Minh",
                },
                {
                  label: "Điện thoại",
                  value: "0901 234 567",
                  href: "tel:0901234567",
                },
                {
                  label: "Email",
                  value: "hello@thefish.vn",
                  href: "mailto:hello@thefish.vn",
                },
                {
                  label: "Giờ làm việc",
                  value: "Thứ 2 – Thứ 7: 9:00 – 19:00\nChủ nhật: 9:00 – 17:00",
                },
              ].map((item) => (
                <div key={item.label} className="border-b border-neutral-200 pb-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-body mb-2">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-neutral-900 font-body hover:text-secondary-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-900 font-body whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
