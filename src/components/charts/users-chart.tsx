'use client'

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useDashboardStore } from "@/store/dashboard-store"

export function UsersChart() {
  const { userStats } = useDashboardStore()

  return (
    <ChartContainer
      config={{
        users: {
          label: 'Total Usuarios',
          color: 'hsl(var(--primary))',
        },
        active: {
          label: 'Usuarios Activos',
          color: 'hsl(var(--success))',
        },
      }}
    >
      <LineChart
        data={userStats.monthlyUsers}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        className="w-full h-[200px]"
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          className="stroke-muted/30"
        />
        <XAxis 
          dataKey="month" 
          className="text-[10px] fill-muted-foreground"
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <YAxis 
          className="text-[10px] fill-muted-foreground"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
          width={30}
        />
        <ChartTooltip
          content={({ active, payload }) => {
            if (!active || !payload) return null;
            return (
              <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  {payload.map((item: any) => (
                    <div key={item.name}>
                      <p className="text-[0.70rem] text-muted-foreground">{item.name}</p>
                      <p className="font-bold">{item.value.toLocaleString()} usuarios</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--primary))' }}
          activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
        />
        <Line
          type="monotone"
          dataKey="active"
          stroke="hsl(var(--success))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--success))' }}
          activeDot={{ r: 6, fill: 'hsl(var(--success))' }}
        />
      </LineChart>
    </ChartContainer>
  )
} 