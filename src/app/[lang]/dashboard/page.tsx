import { ProjectsChart } from "@/components/charts/projects-chart"
import { UsersChart } from "@/components/charts/users-chart"
import { VisitorsChart } from "@/components/charts/visitors-chart"
import { ZustandDemo } from "@/components/demo/zustand-demo"
import { getDictionary } from "@/lib/get-dictionary"

export default async function DashboardPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'es')

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{dict.charts.users.title}</h3>
          </div>
          <UsersChart dict={dict.charts.users} />
        </div>

        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{dict.charts.visitors.title}</h3>
          </div>
          <VisitorsChart dict={dict.charts.visitors} />
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <ProjectsChart dict={dict.charts.projects} />
        </div>
      </div>

      <ZustandDemo dict={dict.charts} />
    </div>
  )
}

