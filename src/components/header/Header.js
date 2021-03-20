import React, { useContext,useState } from 'react'
 import { Navbar,Nav, Container} from 'react-bootstrap'; 
 import { Link} from 'react-router-dom'; 
import { UserContext} from '../../App';


 const Header = () => {
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [user, setUser] = useState(true)
 
    return (
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand >CITY-RIDERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
       
          <Link to="/home" style={{marginLeft:'10px'}}>Home</Link>
         
          <Link  style={{marginLeft:'10px'}} to="/sites">Sites</Link>
          <Link  style={{marginLeft:'10px'}} to="/destination">Destination</Link>
          <Link  style={{marginLeft:'10px'}} to="/blog">Blog</Link>
        </Nav>
        <Nav>
        <Nav.Link  to="##">welcome: {userLoggedIn.displayName || userLoggedIn.name || userLoggedIn.email}</Nav.Link >
        {userLoggedIn.isSignIn && <button style={{float:'right'}} onClick={()=>setUserLoggedIn({})} >Sign-Out</button>}
          {user.isSignIn && <button style={{float:'right'}} onClick={()=>setUserLoggedIn({})} >Sign-Out</button>}
          <Link  style={{marginLeft:'20px',marginTop:'10px'}}  to="/login">Login</Link >
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
 
    )
  }

export default Header