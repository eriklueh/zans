import { create } from 'zustand'

interface MonthlyUsers {
  month: string
  users: number
  active: number
}

interface BrowserStats {
  name: string
  visits: number
}

interface DashboardStore {
  userStats: {
    monthlyUsers: MonthlyUsers[]
  }
  trafficStats: {
    browsers: BrowserStats[]
  }
  setUserStats: (stats: MonthlyUsers[]) => void
  setTrafficStats: (stats: BrowserStats[]) => void
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  userStats: {
    monthlyUsers: [
      { month: 'Ene', users: 4000, active: 2400 },
      { month: 'Feb', users: 3000, active: 1398 },
      { month: 'Mar', users: 2000, active: 9800 },
      { month: 'Abr', users: 2780, active: 3908 },
      { month: 'May', users: 1890, active: 4800 },
      { month: 'Jun', users: 2390, active: 3800 },
      { month: 'Jul', users: 3490, active: 4300 },
    ],
  },
  trafficStats: {
    browsers: [
      { name: 'Chrome', visits: 4000 },
      { name: 'Firefox', visits: 3000 },
      { name: 'Safari', visits: 2000 },
      { name: 'Edge', visits: 2780 },
      { name: 'Opera', visits: 1890 },
    ],
  },
  setUserStats: (monthlyUsers) => 
    set((state) => ({ userStats: { ...state.userStats, monthlyUsers } })),
  setTrafficStats: (browsers) =>
    set((state) => ({ trafficStats: { ...state.trafficStats, browsers } })),
})) 