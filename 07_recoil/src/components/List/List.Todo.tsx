import styled from 'styled-components'

function Todo() {
  return (
    <Container>
      <label htmlFor="todo1">
        <input type="checkbox" name="todo1" id="todo1" />
        Learn React
      </label>
      <select name="Color">
        <option>Green</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Green</option>
      </select>
      <button>X</button>
    </Container>
  )
}

export default Todo

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 2fr 1fr;
`
