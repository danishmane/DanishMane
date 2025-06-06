"use client"

import type { ReactNode } from "react"
import { useMouse } from "@/hooks/use-mouse"

export function Providers({ children }: { children: ReactNode }) {
  useMouse()

  return <>{children}</>
}
