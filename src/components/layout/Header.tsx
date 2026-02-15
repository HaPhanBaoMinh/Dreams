"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    children: [
      { label: "Bưng quả trọn gói", href: "/dich-vu/bung-qua-tron-goi" },
      { label: "Cho thuê áo dài", href: "/ao-dai" },
      { label: "Trọn gói lễ cưới", href: "/dich-vu/tron-goi-le-cuoi" },
    ],
  },
  { label: "Áo dài", href: "/ao-dai" },
  { label: "Bộ sưu tập", href: "/bo-suu-tap" },
  { label: "Blog", href: "/blog" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary-500 text-white text-center text-xs sm:text-sm py-2 px-4 font-body">
        Ưu đãi mùa cưới 2026 — Giảm 15% cho đặt sớm trước 30/04
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-neutral-200 shadow-sm"
            : "bg-white border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-neutral-700 hover:text-primary-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Dreams
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="text-sm font-body text-neutral-600 hover:text-primary-500 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white border border-neutral-200 rounded-lg shadow-xl py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-primary-500 hover:bg-neutral-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                className="text-neutral-500 hover:text-primary-500 transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="h-5 w-5" />
              </button>
              <a
                href="tel:0901234567"
                className="hidden sm:flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>0901 234 567</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
