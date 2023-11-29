import { Navbar, Container, Row } from 'react-bootstrap'

export const Header = () => {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Colombia Sites</Navbar.Brand>
        </Container>
      </Navbar>
    </Row>
  )
}
