import React, { useContext,useState } from 'react'
import { Navbar,Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext} from '../../App';


 const Header = () => {
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [user, setUser] = useState(true)
 
    return (
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="">
       <Navbar.Brand href="#home" style={{fontSize:'50px',color:'red'}}>GET CITY-RIDES</Navbar.Brand>
       
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
     
         <Nav >
           <Link to="/home">Home</Link>
           <Link to="/sites">Sites</Link>
           <Link to="/destination">Destination</Link>
           <Link to="/blog">Blog</Link>
           <Link to="/login">Login</Link>
           <p>welcome: {userLoggedIn.displayName || userLoggedIn.name || userLoggedIn.email}</p>
          {userLoggedIn.isSignIn && <button style={{float:'right'}} onClick={()=>setUserLoggedIn({})} >Sign-Out</button>}
          {user.isSignIn && <button style={{float:'right'}} onClick={()=>setUserLoggedIn({})} >Sign-Out</button>}
         </Nav>
        
       </Navbar.Collapse>
     </Navbar>
     </Container>
    )
}
export default Header