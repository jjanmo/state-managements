import styled from 'styled-components'

function Header() {
  return <Container>Hello, This is Recoil-TodoApp</Container>
}

export default Header

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: #a29bfe;

  font-size: 2.5rem;
  padding: 0.5em 0;
`
