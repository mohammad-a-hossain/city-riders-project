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
    const [selectRider,setSelectRider] = useState([]) 
    console.log(selectRider)

    const seachRide=(ticketType)=>{
        const newSelectRider= [...selectRider,ticketType]
        
        setSelectRider(newSelectRider) 
        console.log(selectRider)
        
    }
     
 
  
  

    return (
        <div className="container d-flex justify-content-start">
            <div className="row col-lg-4 col-md-4 col-sm-12 sm={12}>sm=12">
                <label for="name">Pick From</label>
              <input type="text" name="name" placeholder="Sylhet" required/> 

                <label for="name">Pick To</label>
                <input type="text"  name=""  placeholder="Dhake" required/>

                <label for="date">Date From</label>
                <input type="date"  name="dateFrom" />

                <label for="date">Date To </label>
                <input type="date"  name="dateTo"/>
        
              <button  onClick={(ticketType) => seachRide(props.ticketType)}> Search</button>
             
            </div>

            <div className="row col-lg-8 col-md-8 col-sm-12 sm={12}>sm=12">
                <img src="https://raw.githubusercontent.com/AdvancedCustomFields/docs/master/assets/acf-google-map-field-interface.png" alt="map"/>
            </div>
        </div>
    )
}
export default BookingPage