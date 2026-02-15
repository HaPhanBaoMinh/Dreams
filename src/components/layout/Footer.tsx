import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const footerLinks = {
  products: {
    title: "Sản phẩm",
    links: [
      { label: "Áo dài", href: "/ao-dai" },
      { label: "Phụ kiện", href: "/phu-kien" },
    ],
  },
  about: {
    title: "Về The Fish",
    links: [
      { label: "Câu chuyện thương hiệu", href: "/ve-chung-toi" },
      { label: "Blog", href: "/blog" },
    ],
  },
  support: {
    title: "Hỗ trợ",
    links: [
      { label: "Câu hỏi thường gặp", href: "/faq" },
      { label: "Chính sách cho thuê", href: "/chinh-sach" },
      { label: "Hướng dẫn chọn size", href: "/huong-dan-size" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">
                The Fish
              </span>
            </Link>
            <p className="mt-2 text-sm italic text-secondary-500 font-body">
              &ldquo;Nâng niu trọn vẹn ngày trọng đại&rdquo;
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-neutral-400" />
                <span>123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-neutral-400" />
                <a href="tel:0901234567" className="hover:text-white transition-colors">
                  0901 234 567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-neutral-400" />
                <a href="mailto:hello@thefish.vn" className="hover:text-white transition-colors">
                  hello@thefish.vn
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-body">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Newsletter */}
        <div className="mt-12 flex flex-col gap-6 border-t border-neutral-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 font-body">Kết nối:</span>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Zalo"
            >
              <span className="text-xs font-bold border border-neutral-400 rounded px-1.5 py-0.5 hover:border-white">
                Zalo
              </span>
            </a>
          </div>

          {/* Newsletter */}
          <NewsletterForm variant="dark" />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 py-4">
        <p className="text-center text-xs text-neutral-500 font-body">
          &copy; 2026 The Fish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
