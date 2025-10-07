export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
}

export type FilterType = 'all' | 'active' | 'completed'
