"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDashboardStore } from "@/store/dashboard-store"
import { useState } from "react"

export function ZustandDemo() {
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
          <h3 className="text-lg font-semibold">Demo de Zustand</h3>
          <p className="text-sm text-muted-foreground">
            Actualiza los datos del gráfico de usuarios para ver la reactividad en acción
          </p>
        </div>
        <div className="mb-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="userCount">Nuevos usuarios totales</Label>
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
          <Button onClick={handleUpdateUsers}>Actualizar Gráfico</Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Estado Actual</h3>
          <p className="text-sm text-muted-foreground">
            Datos del último mes
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