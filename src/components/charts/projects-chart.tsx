"use client"

import { TrendingUp } from "lucide-react"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { status: "completed", count: 45, fill: "hsl(var(--chart-1))" },
  { status: "inProgress", count: 32, fill: "hsl(var(--chart-2))" },
  { status: "planning", count: 25, fill: "hsl(var(--chart-3))" },
  { status: "onHold", count: 15, fill: "hsl(var(--chart-4))" },
  { status: "cancelled", count: 8, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  count: {
    label: "Projects",
  },
  completed: {
    label: "Completados",
    color: "hsl(var(--chart-1))",
  },
  inProgress: {
    label: "En Progreso",
    color: "hsl(var(--chart-2))",
  },
  planning: {
    label: "Planificación",
    color: "hsl(var(--chart-3))",
  },
  onHold: {
    label: "En Espera",
    color: "hsl(var(--chart-4))",
  },
  cancelled: {
    label: "Cancelados",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ProjectsChart() {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-4 shadow-sm">
      <div className="flex flex-col items-center pb-4">
        <h3 className="text-lg font-semibold">Estado de Proyectos</h3>
        <p className="text-sm text-muted-foreground">Último mes</p>
      </div>
      <div className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="status" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="count" />
          </RadialBarChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          +12.3% desde el mes pasado <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mejora en la finalización de proyectos
        </div>
      </div>
    </div>
  )
} 