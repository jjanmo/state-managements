export type Status = 'active' | 'completed'
export type Priority = 'high' | 'middle' | 'low'

export type FilterType =
  | 'action/complete'
  | 'action/clear'
  | 'status/all'
  | 'status/active'
  | 'status/completed'
  | 'priority/high'
  | 'priority/middle'
  | 'priority/low'

export interface Todo {
  id: number
  value: string
  status: Status
  priority: Priority
}