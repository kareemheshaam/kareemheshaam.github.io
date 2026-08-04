import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-card px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
