import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-medium font-body uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-600",
        primary: "bg-neutral-900 text-white",
        secondary: "bg-secondary-100 text-secondary-700",
        accent: "bg-accent-100 text-accent-700",
        outline: "border border-neutral-300 text-neutral-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
