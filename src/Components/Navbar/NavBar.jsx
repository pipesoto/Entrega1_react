import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './logo';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#tv">TV</Nav.Link>
            <Nav.Link href="#pc">PC</Nav.Link>
            <Nav.Link href="#gammer">Gammer</Nav.Link>
            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

    
    </>
  );
}

export default NavBar;