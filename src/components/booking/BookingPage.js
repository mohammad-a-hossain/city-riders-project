import React, { useState } from 'react'
import { useParams} from 'react-router'
import '../login/login.css'
import Rideinfo from '../fakeData/RideInfo.json'
import { Col, Container, Row } from 'react-bootstrap'





 const BookingPage = (props) => { 
    const {ticketType}= useParams()
    //console.log(ticketType)

    const data=[...Rideinfo]
    const [rider, setRiders] = useState(data)
   // console.log(rider)
     
     const getRider= rider.filter(tType => tType.id === ticketType)
       // console.log(getRider) 
       //getRider.json()
      getRider.map(key =>console.log(key.price))

    const [user,setUser] =useState({
      isFillUp:false,
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
   
  }

  const handleSubmit=(e)=>{
  const gotUser={...user}
       gotUser.isFillUp = true
       setUser(gotUser)
    e.preventDefault()
  }

    return (
      <Container>
  <Row>
    <Col sm={12} lg={4}>
   {!user.isFillUp ? <form onSubmit={handleSubmit}>
        <label for="from">Pick From</label>
        <input type="text"  onBlur={handleChange} name="from" placeholder="Sylhet" required/>
        <label for="to">Pick To</label>
        <input type="text" onBlur={handleChange}  name="to"  placeholder="Dhake" required/>
        <label for="date">Date From</label>
        <input type="date"  onBlur={handleChange} name="dateFrom"  required />
        <label for="date">Date To </label>
        <input type="date"  onBlur={handleChange}  name="dateTo"  required/>
        <button >search</button>
      </form>:
      <div className="mt-2">
        <h3>From:{user.from} </h3>
        <h3>to {user.to} </h3>
        <p>date from:-{user.dateFrom} -to:{user.dateTo}</p>
        <h5>rider No:-{ getRider.map(key =>key.rideno)}</h5>
        <h5> price : ${ getRider.map(key =>key.price)}</h5>
        <h5>start time:{ getRider.map(key =>key.time)}</h5>
        <img src={ getRider.map(key =>key.image)} style={{width:'50px',height:'50px'}} alt="riderImage"></img>
      </div>}
    </Col>
    <Col sm={12} lg={8}>
    <iframe title="noreferrer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.129524601565!2d91.82596246648738!3d24.899837316401957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1589315364267!5m2!1sen!2sbd"   style={{border:"0",ariaHidden:"false",tabindex:"0",frameborder:"5px",width:"100%",height:'100%'}}/>
    </Col>
  </Row>
  </Container>
    )
     
    
}
export default BookingPage

 