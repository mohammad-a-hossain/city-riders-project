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
        <Container fluid  style={{backgroundImage:'url(https://lifepart2.com/wp-content/uploads/2019/09/Center_City_Philadelphia-1024x768.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
     
           {/*  style={{backgroundImage:'url(https://lifepart2.com/wp-content/uploads/2019/09/Center_City_Philadelphia-1024x768.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}
     */}
 
    
        <div className="row d-flex justify-content-center" >

            {
                tickets.map(tick =><Ticket ticket={tick} key={tick.ticketType}></Ticket>)
            }
            

      {/*   <Card style={{ width: '18rem',marginBottom:'200px',marginTop:'200px'}}>
         <Card.Img variant="top" src="Frame-1.png" />
         <Card.Body>
           <Card.Title>Bike</Card.Title>
         </Card.Body>
        </Card> */}
    {/* 
       <Card style={{ width: '18rem',marginBottom:'200px',marginTop:'200px',marginLeft:'20px'}}>
         <Card.Img variant="top" src="Frame-1.png" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
         </Card.Body>
       </Card>
    */}
   {/*     <Card style={{ width: '18rem',marginBottom:'200px',marginTop:'200px',marginLeft:'20px'}}>
         <Card.Img variant="top" src="Frame-1.png" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
         </Card.Body>
       </Card>
    */}
{/*        <Card style={{ width: '18rem',marginBottom:'200px',marginTop:'200px',marginLeft:'20px'}}>
         <Card.Img variant="top" src="Frame-1.png" />
         <Card.Body>
           <Card.Title>Train</Card.Title>
         </Card.Body>
       </Card>  */}    
        </div>
   
   </Container>
  
    )
}
export default Home