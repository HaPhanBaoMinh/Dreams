"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-200 py-4 first:pt-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm font-semibold text-neutral-900 font-body"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-neutral-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

function Checkbox({ label, count }: { label: string; count?: number }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
      />
      <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors font-body">
        {label}
      </span>
      {count !== undefined && (
        <span className="ml-auto text-xs text-neutral-400 font-body">({count})</span>
      )}
    </label>
  );
}

function ColorDot({ color, label }: { color: string; label: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input type="checkbox" className="sr-only" />
      <span
        className="h-5 w-5 rounded-full border-2 border-neutral-200 group-hover:border-primary-500 transition-colors"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-neutral-600 font-body">{label}</span>
    </label>
  );
}

export function CatalogFilters() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <h2 className="text-base font-semibold text-neutral-900 font-body mb-2">
        Bộ lọc
      </h2>

      <FilterSection title="Dịp">
        <Checkbox label="Đám hỏi" count={12} />
        <Checkbox label="Lễ cưới" count={18} />
        <Checkbox label="Bê tráp" count={8} />
        <Checkbox label="Chụp ảnh" count={6} />
      </FilterSection>

      <FilterSection title="Phong cách">
        <Checkbox label="Truyền thống" count={15} />
        <Checkbox label="Cách tân" count={10} />
        <Checkbox label="Cổ yếm" count={5} />
      </FilterSection>

      <FilterSection title="Màu sắc">
        <ColorDot color="#DC2626" label="Đỏ" />
        <ColorDot color="#EC4899" label="Hồng" />
        <ColorDot color="#D4A017" label="Vàng" />
        <ColorDot color="#FFFFFF" label="Trắng" />
        <ColorDot color="#3B82F6" label="Xanh" />
        <ColorDot color="#7C3AED" label="Tím" />
      </FilterSection>

      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:border-primary-500 hover:text-primary-500 transition-colors font-body"
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Giá thuê / ngày" defaultOpen={false}>
        <Checkbox label="Dưới 500.000₫" />
        <Checkbox label="500.000₫ – 1.000.000₫" />
        <Checkbox label="1.000.000₫ – 1.500.000₫" />
        <Checkbox label="Trên 1.500.000₫" />
      </FilterSection>

      <button className="mt-4 w-full rounded-md bg-primary-500 py-2.5 text-sm font-medium text-white hover:bg-primary-600 transition-colors font-body">
        Áp dụng bộ lọc
      </button>
    </div>
  );
}
