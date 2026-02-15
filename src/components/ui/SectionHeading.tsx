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
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-h2 font-heading font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-neutral-500 mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-px w-16 bg-secondary-500",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
