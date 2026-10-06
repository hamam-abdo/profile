import * as React from "react"
import { cn } from "@/lib/utils"

/* Border uses `input` as the UI boundary (≥3:1). Focus thickens it to a
   2px fg line: one clean edge, no offset halo. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "min-h-11 w-full min-w-0 rounded-md border border-input bg-background px-3.5 py-2.5 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground hover:border-muted disabled:cursor-not-allowed disabled:opacity-60",
        "focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
