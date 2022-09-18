export type TodoStatus = 'doing' | 'done'

export interface TodoType {
  id: number
  contents: string
  status: TodoStatus
  color: string
}
