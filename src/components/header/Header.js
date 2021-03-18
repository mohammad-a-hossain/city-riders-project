import React from 'react'
import { Navbar,Nav, Container, Image,Card,Button } from 'react-bootstrap';

 const Header = () => {
    return (
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="">
       <Navbar.Brand href="#home" style={{fontSize:'50px',color:'red'}}>GET CITY-RIDES</Navbar.Brand>
       
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
     
         <Nav >
           <Nav.Link href="#features">Home</Nav.Link>
           <Nav.Link href="#pricing">Sites</Nav.Link>
           <Nav.Link href="#features">Destination</Nav.Link>
           <Nav.Link href="#pricing">Blog</Nav.Link>
           <Nav.Link href="login">Login</Nav.Link>
         </Nav>
        
       </Navbar.Collapse>
     </Navbar>
     </Container>
    )
}
export default Header