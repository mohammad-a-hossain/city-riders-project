import React, { useContext,useState } from 'react'
 import { Navbar,Nav, Container} from 'react-bootstrap'; 
 import { Link} from 'react-router-dom'; 
import { UserContext} from '../../App';


 const Header = () => {
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [user, setUser] = useState(true)
 
    return (
      <Container style={{background:'transparent'}} >
      <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand style={{fontSize:'80px',color:'red',fontWeight:'700'}} >CITY-RIDERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
       
          <Link to="/home" style={{marginLeft:'10px',fontSize:'18px'}}>Home</Link>
         
          <Link  style={{marginLeft:'10px',fontSize:'18px'}} to="/sites">Sites</Link>
          <Link  style={{marginLeft:'10px',fontSize:'18px'}} to="/destination">Destination</Link>
          <Link  style={{marginLeft:'10px',fontSize:'18px'}} to="/blog">Blog</Link>
        </Nav>
        <Nav>
        <Nav.Link  to="##">{userLoggedIn.displayName || userLoggedIn.name || userLoggedIn.email || user.name}</Nav.Link >  
          <Link  style={{marginLeft:'20px',marginTop:'10px',backgroundColor:'orange',textDecoration:'none',color:'black',fontSize:'18px'}}  to="/login">Login</Link >
          <button style={{border:'none',marginLeft:'5px',fontSize:'18px'}} onClick={()=>setUserLoggedIn({})} >sign-out</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
 
    )
  }

export default Header