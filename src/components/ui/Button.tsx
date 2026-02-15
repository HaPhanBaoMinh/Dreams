import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700",
        secondary:
          "border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-150",
        ghost:
          "text-neutral-900 underline-offset-4 hover:underline",
        gold:
          "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700",
        outline:
          "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white",
      },
      size: {
        sm: "h-9 px-5 text-xs",
        md: "h-11 px-7 text-sm",
        lg: "h-13 px-9 text-sm",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
