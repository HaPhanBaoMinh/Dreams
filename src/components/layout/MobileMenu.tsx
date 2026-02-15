"use client";

import Link from "next/link";
import { X, Phone, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-[70] w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
            <span className="font-heading text-xl font-bold text-neutral-900">
              The Fish
            </span>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Đóng menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            {links.map((link) => (
              <div key={link.href} className="border-b border-neutral-100 last:border-0">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-base font-medium text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pb-2 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-neutral-500 hover:text-primary-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="border-t border-neutral-200 px-6 py-4 space-y-3">
            <a
              href="tel:0901234567"
              className="flex items-center gap-3 text-sm text-neutral-600 hover:text-primary-500"
            >
              <Phone className="h-4 w-4" />
              0901 234 567
            </a>
            <a
              href="mailto:hello@thefish.vn"
              className="flex items-center gap-3 text-sm text-neutral-600 hover:text-primary-500"
            >
              <Mail className="h-4 w-4" />
              hello@thefish.vn
            </a>
            <div className="flex items-start gap-3 text-sm text-neutral-600">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>123 Đường ABC, Q.1, TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
