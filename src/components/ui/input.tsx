import * as React from "react"

import { cn } from "@/lib/utils"

// Focus pe border kaafi subtle ho, sirf ek halka color ya shadow, koi thick ya prominent border nahi
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-sm border bg-transparent px-3 py-1 text-base shadow-xs transition-[box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // Focus: koi border color change nahi, sirf ek subtle shadow
        "focus:outline-none focus:ring-0 focus:border-input focus:shadow-[0_0_0_2px_rgba(80,130,255,0.10)]",
        // Error state same as pehle
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
