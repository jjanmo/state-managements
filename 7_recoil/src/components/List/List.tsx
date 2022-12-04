import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { todoListAtom } from '../../recoil/atom'
import Input from './List.Input'
import Todo from './List.Todo'

function List() {
  const todoList = useRecoilValue(todoListAtom)

  return (
    <Container>
      <Input />
      <TodosContainer>
        {todoList.map((todo) => (
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
