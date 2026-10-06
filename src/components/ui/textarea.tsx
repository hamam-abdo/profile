import * as React from "react"
import { cn } from "@/lib/utils"

/* Same states as Input: hover border, 2px fg focus edge. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full resize-y rounded-md border border-input bg-background px-3.5 py-2.5 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground hover:border-muted disabled:cursor-not-allowed disabled:opacity-60",
        "focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
