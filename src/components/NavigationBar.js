import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie Store</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/movies">Movielist</Nav.Link>
    
     

    </Nav>
    </Container>
  </Navbar>
 



    </div>
  )
}

export default NavigationBar