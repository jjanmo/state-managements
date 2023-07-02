import styled from 'styled-components'

function Header() {
  return <Container>Hello, This is Recoil-TodoApp</Container>
}

export default Header

export const Container = styled.div`
  width: 100%;
  padding: 0.5em 0;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: #0984e3;

  font-size: 2rem;
  font-weight: 700;
`
