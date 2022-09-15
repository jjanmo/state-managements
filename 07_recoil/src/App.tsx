import styled from 'styled-components'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <Container>
      <Header />
      <List />
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
