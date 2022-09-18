export type TodoStatus = 'active' | 'completed'

export interface TodoType {
  id: number
  contents: string
  status: TodoStatus
  color: string
}
