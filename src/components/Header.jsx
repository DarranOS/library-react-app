import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>Darran O'Shea</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>Contact </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
