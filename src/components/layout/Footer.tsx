import Link from "next/link";

const footerLinks = {
  products: {
    title: "Sản phẩm",
    links: [
      { label: "Áo dài", href: "/ao-dai" },
      { label: "Phụ kiện", href: "/phu-kien" },
    ],
  },
  about: {
    title: "Thông tin",
    links: [
      { label: "Câu chuyện", href: "/ve-chung-toi" },
      { label: "Blog", href: "/blog" },
    ],
  },
  support: {
    title: "Hỗ trợ",
    links: [
      { label: "Chính sách cho thuê", href: "/chinh-sach" },
      { label: "Hướng dẫn chọn size", href: "/huong-dan-size" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl text-neutral-900">
                The Fish
              </span>
            </Link>
            <p className="mt-4 text-base text-neutral-500 font-body leading-relaxed max-w-xs">
              Nâng niu trọn vẹn ngày trọng đại với dịch vụ cho thuê áo dài
              và bưng quả chuyên nghiệp.
            </p>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 font-body">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-200 py-6">
        <p className="text-center text-sm text-neutral-400 font-body tracking-wide">
          &copy; 2026 The Fish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
