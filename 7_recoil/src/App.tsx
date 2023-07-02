import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import Filters from './components/Filters'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <RecoilRoot>
      <Container>
        <Header />
        <List />
        <Filters />
      </Container>
    </RecoilRoot>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 900px;
  margin: 20px auto;
  background-color: #eee;
`
