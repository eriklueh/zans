"use client"

import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSettings() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const currentLang = pathname.split('/')[1]

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLang = () => {
    const newLang = currentLang === "en" ? "es" : "en"
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPath)
  }

  if (!mounted) {
    return null
  }

  return (
    <SidebarGroup className="mt-auto">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={toggleTheme} tooltip={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{theme === "dark" ? "Modo Claro" : "Modo Oscuro"}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={toggleLang} tooltip={currentLang === "en" ? "Cambiar a Español" : "Switch to English"}>
            <Languages className="h-4 w-4" />
            <span>{currentLang === "en" ? "Español" : "English"}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
} 