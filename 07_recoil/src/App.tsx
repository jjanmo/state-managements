import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 80vh;
  max-width: 800px;
  margin: 10vh auto;
  background-color: #eee;
`
