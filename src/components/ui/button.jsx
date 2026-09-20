import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-amber-600 text-white shadow-xs hover:bg-amber-700 active:scale-[0.98]",
        sacred:
          "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold shadow-md shadow-amber-600/25 hover:shadow-lg hover:from-amber-600 hover:to-amber-800 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white shadow-xs hover:bg-red-700 active:scale-[0.98]",
        outline:
          "border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900 text-stone-700 shadow-2xs hover:border-amber-300",
        secondary:
          "bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100/80 shadow-2xs",
        ghost:
          "hover:bg-amber-100/50 hover:text-amber-900 text-stone-700",
        link: "text-amber-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-2xl px-6 text-base",
        pill: "h-10 rounded-full px-5 text-sm",
        icon: "h-9 w-9 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
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
