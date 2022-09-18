import styled from 'styled-components'
import Filters from '../Filters'
import Input from './List.Input'
import Todo from './List.Todo'
import { TodoType } from './types'

const TODOS: TodoType[] = [
  {
    id: Date.now() * 1,
    contents: 'Learn react 😿',
    status: 'active',
    color: 'black',
  },
  {
    id: Date.now() * 2,
    contents: 'Learn redux 🙏',
    status: 'active',
    color: 'black',
  },
  {
    id: Date.now() * 3,
    contents: 'Build Something fun 🚀',
    status: 'active',
    color: 'black',
  },
]

function List() {
  return (
    <Container>
      <Input />
      <TodosContainer>
        {TODOS.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </TodosContainer>
    </Container>
  )
}

export default List

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin: 1rem auto 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const TodosContainer = styled.div`
  margin: 1rem 3rem;
`
