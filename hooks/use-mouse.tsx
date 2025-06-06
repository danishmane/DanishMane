"use client"

import { useEffect } from "react"

export function useMouse() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      window.mouseX = e.clientX
      window.mouseY = e.clientY
    }

    const handleMouseDown = () => {
      window.mouseDown = true
    }

    const handleMouseUp = () => {
      window.mouseDown = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])
}

// Add to global Window interface
declare global {
  interface Window {
    mouseX: number
    mouseY: number
    mouseDown: boolean
  }
}
