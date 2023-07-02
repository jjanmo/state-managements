import { filteredTodoList } from '@recoil/selector'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import Input from './List.Input'
import Todo from './List.Todo'

function List() {
  const todolist = useRecoilValue(filteredTodoList)

  return (
    <Container>
      <Input />
      <TodosContainer>
        {todolist.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </TodosContainer>
    </Container>
  )
}

export default List

const Container = styled.div`
  flex: 1;
  width: 100%;
  margin: 1rem auto 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const TodosContainer = styled.div`
  margin: 1rem 3rem;
`
