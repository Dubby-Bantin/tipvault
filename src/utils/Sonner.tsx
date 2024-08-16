"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-slate-900 group-[.toaster]:text-white group-[.toaster]:border border-primary group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-400", // Adjusted for muted text
          actionButton:
            "group-[.toast]:bg-[#60a5fa] group-[.toast]:text-slate-900", // Primary color with dark text
          cancelButton:
            "group-[.toast]:bg-[#60a5fa] group-[.toast]:text-white", // Muted color with lighter text
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
