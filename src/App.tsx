import { useState } from 'react'
import Carousel from './containers/Carousel'
import Header from './containers/Header'
import Menu from './containers/Menu'
import EstiloGlobal, { Container } from './styles'

function App() {
  const [imagens, setImagens] = useState([''])

  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Menu setImagens={setImagens} />
        <Carousel imagens={imagens} />
      </Container>
    </>
  )
}

export default App
