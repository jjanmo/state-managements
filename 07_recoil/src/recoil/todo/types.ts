export type Status = 'active' | 'completed'
export type Priority = 'high' | 'middle' | 'low' | 'normal'

export interface Todo {
  id: number
  contents: string
  status: Status
  priority: Priority
}
