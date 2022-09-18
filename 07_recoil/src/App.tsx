import styled from 'styled-components'
import Filters from './components/Filters'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <Container>
      <Header />
      <List />
      <Filters />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 90vh;
  max-width: 1000px;
  margin: 5vh auto;
  background-color: #eee;
`
