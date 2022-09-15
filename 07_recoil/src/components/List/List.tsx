import styled from 'styled-components'
import Input from './List.Input'
import Todo from './List.Todo'

function List() {
  return (
    <Container>
      <Input />
      <Todo />
    </Container>
  )
}

export default List

const Container = styled.div`
  width: 100%;
  height: 80%;
  margin: 1rem auto 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
