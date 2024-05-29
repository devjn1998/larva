import Carousel from './containers/Carousel'
import Header from './containers/Header'
import Menu from './containers/Menu'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Menu />
        <Carousel />
      </Container>
    </>
  )
}

export default App
