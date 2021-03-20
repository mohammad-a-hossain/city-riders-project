import React from 'react'
import {  Container,Card ,Image} from 'react-bootstrap';
import Ticket from '../ticketItem/Ticket';
import './home.css'


 const Home = () => {

    const tickets = [
        {
            title: 'BIKE',
          
            imgUrl: 'https://www.drivespark.com/images/2019-08/suzuki-gixxer-sf-250-motogp-5.jpg',
            ticketType: 'bike' 
        },
        {
            title: 'CAR',
            imgUrl: 'https://live.staticflickr.com/4276/34430526733_08218cb233_b.jpg',
            ticketType: 'car' 
        },
        {
            title: 'BUS',
            imgUrl: 'https://www.uttaramotorsltd.com/wp-content/uploads/2015/12/LT-Bus.png',
            ticketType: 'bus' 
         
        },
        {
            title: 'TRAIN',
            imgUrl: 'https://static.toiimg.com/photo/63079138.cms',
            ticketType: 'train' 
         
        },
    ]
    return (
        <Container fluid className="row d-flex justify-content-center" style={{background:'transparent'}}>
     
            {
                tickets.map(tick =><Ticket ticket={tick} key={tick.ticketType}></Ticket>)
            }
            
        </Container>
  
    )
}
export default Home
