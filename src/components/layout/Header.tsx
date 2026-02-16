"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  {
    label: "Sản phẩm",
    href: "/ao-dai",
    children: [
      { label: "Áo dài", href: "/ao-dai" },
      { label: "Phụ kiện", href: "/phu-kien" },
    ],
  },
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
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-20 items-center justify-between lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {/* Desktop Navigation — Left */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.slice(0, 2).map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="text-sm uppercase tracking-[0.12em] font-body text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white border border-neutral-200 py-3 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-2.5 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
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

            {/* Logo — Center */}
            <Link href="/" className="flex items-center">
              <span className="font-heading text-3xl sm:text-4xl tracking-tight text-neutral-900">
                The Fish
              </span>
            </Link>

            {/* Desktop Navigation — Right */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.12em] font-body text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile spacer for centering logo */}
            <div className="w-5 lg:hidden" />
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
