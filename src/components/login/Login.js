        import React from 'react'
        import './login.css'
        import {Container} from 'react-bootstrap';
        import { useContext, useState } from 'react';
        import { UserContext } from "../../App";
        import { useHistory, useLocation } from "react-router-dom";
        import { createUserWithEmailAndPassword, faceBookLogin, googleSignIn, initializLoginFrameWork, signInWithEmailAndPassword } from './loginManager.js'
        
        initializLoginFrameWork()
      
        function Login() {
        
        const [newUser, setNewUser] = useState(false)
        
          const [user,setUser] =useState({
            isSignIn :false,
            name:"",
            email:"",
            password:"",
            error:"",
            success:false
          })
        
          const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
        //for setting redirection after login
        const history= useHistory()
        const location =useLocation()
        let { from } = location.state || { from: { pathname: "/" } };
        
        const setGoogleSignIn=()=>{
           googleSignIn()
           .then(res =>{
               console.log(res)
             setUser(res)
             setUserLoggedIn(res)
             history.replace(from)
           })
        }
   
        const setFaceBookLogin=()=> {
          faceBookLogin()
             .then(res =>{
              console.log(res)
              setUser(res)
              setUserLoggedIn(res)
              history.replace(from)
             })
        }
   
        
        
          const handleChange =(e)=>{
            let isFieldValid = true;
            if(e.target.name === 'email'){
                 isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
               // console.log(isEmailValid)
            }
            if(e.target.name === 'name'){
                isFieldValid = /^[a-zA-Z]/.test(e.target.value)
              // console.log(isEmailValid)
           }
        
            if(e.target.name==='password'){
              isFieldValid= e.target.value.length > 6;
               //console.log(isPassValid)
            }
        
            if(isFieldValid){
              const newUserInfo ={...user};
              newUserInfo[e.target.name] = e.target.value
              setUser(newUserInfo)
            }
          }
        
          /* --------- creating with email and password--------------- */
          const handleSubmit =(e)=>{
            if(newUser&& user.name && user.password){
             createUserWithEmailAndPassword(user.name,user.email,user.password)
             .then(res =>{
                 console.log(res)
              setUser(res)
              setUserLoggedIn(res)
              history.replace(from)
            })
            }
            if(!newUser && user.email && user.password){
               signInWithEmailAndPassword(user.email,user.password)
               .then(res =>{
                 console.log(res)
                setUser(res)
                setUserLoggedIn(res)
                history.replace(from)
              })
        
            }
        
                 e.preventDefault()
          }
        
         

    return (
        <Container fluid>
            <Container>
            <div>
            <form onSubmit={handleSubmit}>
                {!newUser ?<h1>Login Here</h1>:<h1>Sign-up here</h1>}
             {newUser && <> <label for="name">Name</label>
              <input type="text"  onBlur={handleChange} name="name" placeholder="Your name.." required/> 
              </>}

                <label for="email">Email</label>
                <input type="email" id="email" name="email" onBlur={handleChange} placeholder="Your email.." required/>

                <label for="password">Password</label>
                <input type="password" id="password" onBlur={handleChange} name="password" placeholder="Your password.." required/>

                <input type="submit" value="Submit"/>
             

               <h3>new user ?</h3><input type="checkbox" onChange={()=>setNewUser(!newUser)} value="Sign-up here"  name="newUser"/> - Sign-Up
                
    
            </form>
          <p style={{color:'red'}}>{newUser.error}</p>
          {newUser.success && <p style={{color:'green'}}>user {newUser ? "created" :"logged in"} successfully</p>}
            <hr></hr>
            <div><button onClick={setFaceBookLogin} >Login With Facebook</button> </div>
            <div><button onClick={setGoogleSignIn}>Login With Google</button> </div>
            </div>
            </Container>
        </Container>
    )
}
export default Login