import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Nav from 'react-bootstrap/Nav'
import logo from './assets/spinner.gif'
import { Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          {/* <img alt="logo" src={logo} width="40px" height="40px" href="#home" /> */}
          Darran O'Shea
        </Navbar.Brand>
        <Nav>
          {/* <NavDropdown title="Projects">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
          <Nav.Link href="#products">Contact </Nav.Link>
          <Nav.Link href="#products">About Me </Nav.Link>
          {/* <button className="btn my-4" id="menu-btn">
              Toggle Sidebar
            </button> */}
        </Nav>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {/* <NavDropdown title="Projects">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#products">Contact </Nav.Link>
            <Nav.Link href="#products">About Me </Nav.Link>
            {/* <button className="btn my-4" id="menu-btn">
              Toggle Sidebar
            </button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
