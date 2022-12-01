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
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 5rem;
  margin: 1rem auto;
`
export const Input = styled.input`
  width: 60%;
  padding-left: 1em;

  font-size: 1.4rem;
  border: 0;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: #b2bec3;
  }
`
export const RadioButtons = styled.div`
  width: 32%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;

  border-radius: 10px;
  background-color: white;
`
export const Guide = styled.div`
  grid-column: 1 / 4;
  grid-row: 1;
  align-self: center;
  justify-self: center;

  padding-top: 5px;
  font-weight: 700;
  font-size: 20px;
  color: #b2bec3;
`
export const PriorityLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`
export const RadioButton = styled.input`
  display: none;
`

export const TodoContents = styled.label<{ color: string }>`
  position: relative;
  width: 100%;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;

  font-size: 2rem;
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
