import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';



 const Ticket = (props) => {
    // console.log(props)
     const {title,imgUrl,ticketType} =props.ticket
    return (
        <div>
             <Card style={{ width: '18rem',marginBottom:'200px',marginTop:'200px'}}>
         <Card.Img variant="top" src={imgUrl} />
         <Card.Body>
           <Card.Title>
               
                <Link to={`/booking/${ticketType}`} key={ticketType}> <button >{title}</button></Link>   
            
           </Card.Title>
         
         </Card.Body>
        </Card>
        </div>
    )
}
export default Ticket