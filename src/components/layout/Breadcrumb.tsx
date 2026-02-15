import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-6">
      <ol className="flex items-center gap-2 text-[11px] font-body text-neutral-400 uppercase tracking-wider">
        <li>
          <Link
            href="/"
            className="hover:text-neutral-900 transition-colors"
          >
            Trang chủ
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-3 h-px bg-neutral-300" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
