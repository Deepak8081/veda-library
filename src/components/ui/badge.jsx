import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-amber-600 text-white shadow-2xs hover:bg-amber-700",
        secondary:
          "border-amber-200/80 bg-amber-50 text-amber-900 hover:bg-amber-100",
        outline: "text-stone-700 border-stone-200 bg-white",
        destructive:
          "border-transparent bg-red-500 text-white shadow-2xs hover:bg-red-600",
        verified:
          "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
        approved:
          "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
        review:
          "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100",
        sacred:
          "border-amber-400/50 bg-gradient-to-r from-amber-50 to-amber-100/90 text-amber-950 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
