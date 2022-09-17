import styled from 'styled-components'

function Todo() {
  return (
    <Container>
      <TodoContents htmlFor="todo1">
        <input type="checkbox" name="todo1" id="todo1" />
        Learn React
      </TodoContents>

      <select name="color">
        <option>Green</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Green</option>
      </select>

      <div>
        <button>X</button>
      </div>
    </Container>
  )
}

export default Todo

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6rem 3rem;
  grid-column-gap: 10px;

  & + & {
    margin-top: 1rem;
  }
`

const TodoContents = styled.label`
  background-color: yellow;
  &::before {
  }
`
