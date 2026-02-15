import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ — Đặt Lịch Tư Vấn Miễn Phí",
  description:
    "Liên hệ The Fish để nhận tư vấn miễn phí về dịch vụ bưng quả và cho thuê áo dài cưới. Showroom tại Quận 1, TP. Hồ Chí Minh.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <div className="pb-16 lg:pb-24">
        <SectionHeading
          title="Liên Hệ Với Chúng Tôi"
          subtitle="Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho ngày trọng đại của bạn."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3 rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-neutral-900 mb-6">
              Gửi yêu cầu tư vấn
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                Thông tin liên hệ
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 font-body">
                      Địa chỉ Showroom
                    </p>
                    <p className="text-sm text-neutral-500 font-body">
                      123 Đường ABC, Phường XYZ
                      <br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 font-body">
                      Điện thoại
                    </p>
                    <a
                      href="tel:0901234567"
                      className="text-sm text-primary-500 hover:underline font-body"
                    >
                      0901 234 567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 font-body">
                      Email
                    </p>
                    <a
                      href="mailto:hello@thefish.vn"
                      className="text-sm text-primary-500 hover:underline font-body"
                    >
                      hello@thefish.vn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 font-body">
                      Giờ làm việc
                    </p>
                    <p className="text-sm text-neutral-500 font-body">
                      Thứ 2 – Thứ 7: 9:00 – 19:00
                      <br />
                      Chủ nhật: 9:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                Kết nối với chúng tôi
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-600 hover:border-primary-500 hover:text-primary-500 transition-colors font-body"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-600 hover:border-primary-500 hover:text-primary-500 transition-colors font-body"
                >
                  <span className="text-xs font-bold border border-current rounded px-1">Zalo</span>
                  Zalo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-600 hover:border-primary-500 hover:text-primary-500 transition-colors font-body"
                >
                  <span className="text-xs font-bold">TT</span>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 h-[350px] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-neutral-300 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-body">
              Google Maps sẽ được nhúng ở đây
            </p>
            <p className="text-xs text-neutral-300 font-body mt-1">
              123 Đường ABC, Q.1, TP. Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
