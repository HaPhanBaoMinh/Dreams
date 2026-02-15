import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-h2 font-heading tracking-tight text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 max-w-xl text-base text-neutral-500 font-body leading-relaxed",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
