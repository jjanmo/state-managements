export type Status = 'active' | 'completed'
export type Priority = 'high' | 'middle' | 'low'

export type FilteringType = `status/${Status}` | `priority/${Priority}`

export interface Todo {
  id: number
  value: string
  status: Status
  priority: Priority
}
