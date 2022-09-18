import styled from 'styled-components'
import { TodoType } from './types'

function Todo({ id, contents, status, color }: TodoType) {
  return (
    <Container>
      <TodoInput type="checkbox" name={id + contents} id={id + contents} />
      <TodoContents htmlFor={id + contents}>{contents}</TodoContents>

      <select name="color">
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
  padding: 5px 0;

  display: grid;
  grid-template-columns: 1fr 6rem 3rem;
  grid-column-gap: 10px;

  & + & {
    margin-top: 1rem;
  }
`

const TodoContents = styled.label`
  position: relative;
  width: 100%;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    transform: translateY(-50%);
  }
  &::after {
    position: absolute;
    content: '';
    top: 9px;
    left: 6px;

    width: 12px;
    height: 6px;
    border: 3px solid white;
    border-top: none;
    border-right: none;

    opacity: 0;
    transform: translateY(-50%) rotate(-45deg);
  }
`

const TodoInput = styled.input`
  display: none;

  &:checked + ${TodoContents}::before {
    background-color: #e74c3c;
    border-color: #e74c3c;
  }
  &:checked + ${TodoContents}::after {
    opacity: 1;
  }
  &:checked + ${TodoContents} {
    text-decoration: line-through #e74c3c 2px;
  }
`
