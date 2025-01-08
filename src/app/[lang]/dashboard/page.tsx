import { ProjectsChart } from "@/components/charts/projects-chart"
import { UsersChart } from "@/components/charts/users-chart"
import { VisitorsChart } from "@/components/charts/visitors-chart"
import { ZustandDemo } from "@/components/demo/zustand-demo"

export default function DashboardPage() {
  return (
    <div className="grid gap-4">
      {/* Primera fila - Gráficos principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Usuarios</h3>
          </div>
          <UsersChart />
        </div>

        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Visitantes por Navegador</h3>
          </div>
          <VisitorsChart />
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <ProjectsChart />
        </div>
      </div>

      {/* Segunda fila - Demo de Zustand */}
      <ZustandDemo />
    </div>
  )
}

