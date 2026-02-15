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
    <div className="border-b border-neutral-200 py-5 first:pt-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-[11px] uppercase tracking-[0.12em] text-neutral-400 font-body"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-neutral-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Checkbox({ label, count }: { label: string; count?: number }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <input
        type="checkbox"
        className="h-4 w-4 rounded-none border-neutral-300 text-neutral-900 focus:ring-neutral-900"
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
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <input type="checkbox" className="sr-only" />
      <span
        className="h-5 w-5 border border-neutral-300 group-hover:border-neutral-900 transition-colors"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-neutral-600 font-body">{label}</span>
    </label>
  );
}

export function CatalogFilters() {
  return (
    <div>
      <h2 className="text-sm font-medium text-neutral-900 font-body mb-6">
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
        <ColorDot color="#B91C1C" label="Đỏ" />
        <ColorDot color="#DB2777" label="Hồng" />
        <ColorDot color="#B8A07A" label="Vàng" />
        <ColorDot color="#FAFAF9" label="Trắng" />
        <ColorDot color="#2563EB" label="Xanh" />
        <ColorDot color="#7C3AED" label="Tím" />
      </FilterSection>

      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border border-neutral-300 px-4 py-2 text-xs font-body text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
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
    </div>
  );
}
