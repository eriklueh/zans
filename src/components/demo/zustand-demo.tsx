"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDashboardStore } from "@/store/dashboard-store"
import { useState } from "react"

interface ZustandDemoProps {
  dict: {
    users: {
      newTotalUsers: string
      updateChart: string
      currentState: string
      lastMonthData: string
    }
    zustandDemo: {
      title: string
      description: string
    }
  }
}

export function ZustandDemo({ dict }: ZustandDemoProps) {
  const [newUserCount, setNewUserCount] = useState("")
  const { userStats, setUserStats } = useDashboardStore()

  const handleUpdateUsers = () => {
    const count = parseInt(newUserCount)
    if (isNaN(count)) return

    const updatedStats = userStats.monthlyUsers.map((stat, index) => ({
      ...stat,
      users: index === userStats.monthlyUsers.length - 1 ? count : stat.users
    }))

    setUserStats(updatedStats)
    setNewUserCount("")
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{dict.zustandDemo.title}</h3>
          <p className="text-sm text-muted-foreground">
            {dict.zustandDemo.description}
          </p>
        </div>
        <div className="mb-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="userCount">{dict.users.newTotalUsers}</Label>
              <Input
                id="userCount"
                placeholder="Ingresa un número"
                value={newUserCount}
                onChange={(e) => setNewUserCount(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <Button onClick={handleUpdateUsers}>{dict.users.updateChart}</Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{dict.users.currentState}</h3>
          <p className="text-sm text-muted-foreground">
            {dict.users.lastMonthData}
          </p>
        </div>
        <pre className="rounded-lg bg-muted p-4">
          {JSON.stringify(
            userStats.monthlyUsers[userStats.monthlyUsers.length - 1],
            null,
            2
          )}
        </pre>
      </div>
    </div>
  )
} 