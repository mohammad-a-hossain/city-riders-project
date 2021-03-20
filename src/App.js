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
import BookingPage from './components/booking/BookingPage';
import Blog from './components/blog/Blog';
import Sites from './components/sites/Sites';
import Destination from './components/destination/Destination';
import Notfound from './components/notfound/Notfound';
import { createContext,useState } from 'react';
import PrivateRoute from './components/privateRount/PrivateRoute';

export const UserContext = createContext()



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn,setUserLoggedIn]}>
      
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

     </UserContext.Provider> 
  );
}

export default App;

//https://media.nationalgeographic.org/assets/photos/000/249/24957.jpg
//https://cdn.vox-cdn.com/thumbor/Ksi3v8e1tj1ZcQeRV1ZtmCYIM7k=/0x0:4284x2916/1200x800/filters:focal(1800x1116:2484x1800)/cdn.vox-cdn.com/uploads/chorus_image/image/61918529/NorthBroadSt_Landscape_1_M.Edlow.0.jpg