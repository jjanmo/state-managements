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

export const TodoContents = styled.label`
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

export const TodoCheckbox = styled.input`
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
