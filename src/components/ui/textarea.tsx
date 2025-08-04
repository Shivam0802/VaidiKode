import * as React from "react"

import { cn } from "@/lib/utils"

// Focus pe border kaafi subtle ho, sirf ek halka color ya shadow, koi thick ya prominent border nahi
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-h-16 w-full rounded-sm border bg-transparent px-3 py-2 text-base shadow-xs transition-[box-shadow,border-color] outline-none field-sizing-content md:text-sm",
        // Focus: koi border color change nahi, sirf ek subtle shadow
        "focus:outline-none focus:ring-0 focus:border-input focus:shadow-[0_0_0_2px_rgba(80,130,255,0.10)]",
        // Error state same as pehle
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
