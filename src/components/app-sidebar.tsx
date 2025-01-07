"use client"

import * as React from "react"
import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from 'lucide-react'

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  dict: {
    platform: string
    projects: string
    playground: string
    history: string
    starred: string
    settings: string
    models: string
    genesis: string
    explorer: string
    quantum: string
    documentation: string
    introduction: string
    getStarted: string
    tutorials: string
    changelog: string
    general: string
    team: string
    billing: string
    limits: string
    more: string
    viewProject: string
    shareProject: string
    deleteProject: string
    upgradeProTitle: string
    account: string
    notifications: string
    logout: string
    addTeam: string
    teamsLabel: string
  }
}

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "history",
          url: "#",
        },
        {
          title: "starred",
          url: "#",
        },
        {
          title: "settings",
          url: "#",
        },
      ],
    },
    {
      title: "models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "genesis",
          url: "#",
        },
        {
          title: "explorer",
          url: "#",
        },
        {
          title: "quantum",
          url: "#",
        },
      ],
    },
    {
      title: "documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "introduction",
          url: "#",
        },
        {
          title: "getStarted",
          url: "#",
        },
        {
          title: "tutorials",
          url: "#",
        },
        {
          title: "changelog",
          url: "#",
        },
      ],
    },
    {
      title: "settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "general",
          url: "#",
        },
        {
          title: "team",
          url: "#",
        },
        {
          title: "billing",
          url: "#",
        },
        {
          title: "limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ dict, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} dict={dict} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} dict={dict} />
        <NavProjects projects={data.projects} dict={dict} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} dict={dict} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
