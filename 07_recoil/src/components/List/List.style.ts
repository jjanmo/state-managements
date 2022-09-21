import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 5px 0;

  display: grid;
  grid-template-columns: 1fr 6rem 3rem;
  grid-column-gap: 10px;

  & + & {
    margin-top: 1rem;
  }
`
export const Form = styled.form`
  width: 100%;

  & input {
    width: 100%;
    padding: 1em 1em 1em 50px;

    font-size: 1.4rem;
    border: 0;
    outline: none;

    &::placeholder {
      color: #b2bec3;
    }
  }
`

export const TodoContents = styled.label<{ color: string }>`
  position: relative;
  width: 100%;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;

  color: ${({ color }) => color};

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background-color: #dfe6e9;
  }
  &:hover::before {
    background-color: #b2bec3;
  }

  &::after {
    position: absolute;
    content: '';
    left: 8px;
    top: 1px;
    width: 10px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;

    opacity: 0;
    transform: rotate(45deg);
  }
`
export const TodoCheckbox = styled.input`
  display: none;

  &:checked + ${TodoContents}::before {
    background-color: #6c5ce7;
    border-color: #6c5ce7;
  }
  &:checked + ${TodoContents}::after {
    opacity: 1;
  }
  &:checked + ${TodoContents} {
    text-decoration: line-through #6c5ce7 3px;
  }
`
export const TodoDeleteButton = styled.button`
  width: 100%;
  border: 1px solid #636e72;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;

  color: #636e72;
  background-color: #dfe6e9;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #b2bec3;
  }
`
