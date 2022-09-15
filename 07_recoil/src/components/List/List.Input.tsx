import styled from 'styled-components'

function Input() {
  return (
    <Form>
      <input type="text" placeholder="What needs to be done?" autoFocus />
    </Form>
  )
}

export default Input

const Form = styled.form`
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
