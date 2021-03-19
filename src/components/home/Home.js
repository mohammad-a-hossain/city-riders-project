import React from 'react'
import {  Container,Card} from 'react-bootstrap';
import Ticket from '../ticketItem/Ticket';


 const Home = () => {

    const tickets = [
        {
            title: 'Bike',
          
            imgUrl: '../images/Frame-1.png',
            ticketType: 'bike' 
        },
        {
            title: 'car',
            imgUrl: '../images/Frame-2.png',
            ticketType: 'car' 
        },
        {
            title: 'Bus',
            imgUrl: '../images/Frame.png',
            ticketType: 'bus' 
         
        },
        {
            title: 'Train',
            imgUrl: '../images/Group.png',
            ticketType: 'train' 
         
        },
    ]
    return (
        <Container fluid >
           {/*  style={{backgroundImage:'url(https://lifepart2.com/wp-content/uploads/2019/09/Center_City_Philadelphia-1024x768.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}
     */}
   <Container fluid >
    
        <div className="row col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center" >

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
   <footer className="m-5 p-5">
     <h4>footer is there</h4>
   </footer> 
   </Container>
    )
}
export default Home