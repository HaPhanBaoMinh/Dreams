"use client";

import Link from "next/link";
import { X } from "lucide-react";
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
          "fixed inset-0 z-[60] bg-white/80 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-[70] w-80 max-w-[85vw] bg-white transition-transform duration-500 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-heading text-xl text-neutral-900">
              The Fish
            </span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Đóng menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-200 mx-6" />

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            {links.map((link) => (
              <div key={link.href} className="mb-6">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block text-sm uppercase tracking-[0.12em] font-body text-neutral-900 hover:text-secondary-600 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-3 pl-4 space-y-2.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
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
          <div className="px-6 py-6 space-y-2 text-sm text-neutral-500 font-body">
            <p>hello@thefish.vn</p>
            <p>0901 234 567</p>
          </div>
        </div>
      </div>
    </>
  );
}
