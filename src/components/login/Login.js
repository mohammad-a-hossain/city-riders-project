import React from 'react'
import './login.css'
import { Navbar,Nav,Form, Container, Image,Card,Button } from 'react-bootstrap';

 const Login = () => {
    return (
        <Container fluid>
            <Container>
            <div>
            <form action="">
                <h1>Login Form</h1>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label for="country">Country</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label for="country">Country</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            
                <input type="submit" value="Submit"/>
                <p>Already have an account ?</p> <input type="checkbox" value="Login" /> Login
            </form>
            <hr></hr>
            <div>Login With Facebook</div>
            <div>Login With Google</div>
            </div>
            </Container>
        </Container>
    )
}
export default Login