import React, { useState } from 'react'
import { useParams} from 'react-router'
import '../login/login.css'
import Rideinfo from '../fakeData/RideInfo.json'





 const BookingPage = (props) => { 
    const {ticketType}= useParams()
    console.log(ticketType)

    const data=[...Rideinfo]
    const [rider, setRiders] = useState(data)
    console.log(rider)
     
     const getRider= rider.filter(tType => tType.id === ticketType)
        console.log(getRider) 
      //const [seeRide,setSeeRide] =useState(getRider)
  
      //console.log(seeRide)
     // const {from, to}=  getRider

 /*    const seachRide=(ticketType)=>{
        const newSelectRider= [...selectRider,ticketType]
        
        setSelectRider(newSelectRider) 
        console.log(selectRider)
        
    } */

    const [user,setUser] =useState({
        from:"",
        to:"",
        dateFrom:"",
        dateTo:"",
       
      })
     // const [seeRide,setSeeRide] =useState(getRider)
  const handleChange=(e)=>{
      
     //console.log(e.target.value)
     const newUserInfo ={...user};
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
    e.preventDefault()
  }
  //document.getElementsByClassName('.class').style.display='none'
/*  function displySearch(e){
             document.getElementsById('result').style.display='block'
            // document.getElementsByTagName('form').style.display='none'
            e.preventDefault()
 } */
    return (
        <div className="container d-flex justify-content-center" >
            <div className="row col col-lg-4 col-sm-12 col-md-4 ">
                <form >
                <label for="from">Pick From</label>
              <input type="text"  onBlur={handleChange} name="from" placeholder="Sylhet" required/> 

                <label for="to">Pick To</label>
                <input type="text" onBlur={handleChange}  name="to"  placeholder="Dhake" required/>

                <label for="date">Date From</label>
                <input type="date"  onBlur={handleChange} name="dateFrom" />

                <label for="date">Date To </label>
                <input type="date"  onBlur={handleChange}  name="dateTo"/>
              <input type="checkbox" onChange={()=>setUser(!user)} value="check it"  name="user" ></input>
              
              {/* <button type='submit' > Search</button> */}
             </form>
             {/* --show result----- */}
            




       {user && <>
             <div>
              
                <h3>{user.from}</h3>
                <h3>to {user.to}</h3>
               <h4>price tk.{ getRider.map(sub =>sub.price) }</h4>
               <h4>ride no{ getRider.map(sub =>sub.rideno) }</h4>
              <img src={ getRider.map(sub =>sub.image)} style={{width:"50px",height:'50px'}}/>
             <h4>pick-date {user.dateFrom} to {user.dateTo}</h4>
             </div>
             </>
           } 
            
            </div>
 
            <div className="row col col-lg-8 col-md-8 col-sm-12 col-md-8">
               {/*  <img src="https://raw.githubusercontent.com/AdvancedCustomFields/docs/master/assets/acf-google-map-field-interface.png" alt="map"/> 
               */}
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.129524601565!2d91.82596246648738!3d24.899837316401957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1589315364267!5m2!1sen!2sbd"   style={{border:"0",ariaHidden:"false",tabindex:"0",frameborder:"5px",width:"100%"}}/>
              
                
            </div>
        </div>
    )
}
export default BookingPage