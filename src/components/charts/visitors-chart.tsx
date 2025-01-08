"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useDashboardStore } from "@/store/dashboard-store"

const chartConfig = {
  visits: {
    label: 'Visitas',
    color: 'hsl(var(--primary))',
  },
}

export function VisitorsChart() {
  const { trafficStats } = useDashboardStore()

  return (
    <ChartContainer
      config={chartConfig}
    >
      <BarChart
        data={trafficStats.browsers}
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
          dataKey="name" 
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
                      <p className="font-bold">{item.value.toLocaleString()} visitas</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        />
        <Bar
          dataKey="visits"
          fill="hsl(var(--primary))"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
} 