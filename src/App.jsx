import { Header } from './components/Header/Header'
import { MapWrapper } from './components/MapWrapper/MapWrapper'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container fluid>
      <Header />
      <MapWrapper />
    </Container>
  )
}

export default App
