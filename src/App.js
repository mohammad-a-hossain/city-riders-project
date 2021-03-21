import './App.css';
import Login from './components/login/Login'
import Header from './components/header/Header';
import './components/login/login.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Sites from './components/sites/Sites';
import Destination from './components/destination/Destination';
import Notfound from './components/notfound/Notfound';
import { createContext,useState } from 'react';
import PrivateRoute from './components/privateRount/PrivateRoute';
import { Container } from 'react-bootstrap';
import Footer from './components/footer/Footer';
import BookingPage from './components/booking/BookingPage';

export const UserContext = createContext()



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn,setUserLoggedIn]}>
      <Container style={{backgroundImage:'url(https://media.istockphoto.com/vectors/driverless-autonomous-car-in-the-city-vector-id641789210?b=1&k=6&m=641789210&s=612x612&w=0&h=2xWPmHQ3od6JXJJNrqDhQnkrEavXXBUcUKPSlWtXTRY=)',backgroundPosition:'center',backgroundSize:'cover'}} fluid>
       <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/booking/:ticketType">
              <BookingPage/>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog/>
            </PrivateRoute>
            <PrivateRoute path="/sites">
              <Sites/>
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Destination/>
            </PrivateRoute> 
            <Route path="/login">
              <Login/>
            </Route>
            <Route path='*'>
           <Notfound/> 
          </Route>
          </Switch>
      </Router> 
      <Footer></Footer>
      </Container>
     </UserContext.Provider> 
  );
}

export default App;

