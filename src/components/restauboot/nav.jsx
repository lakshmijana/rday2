import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function C1() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#features">CONTACT US</Nav.Link>
            <Nav.Link href="#pricing">PRICING</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default C1;