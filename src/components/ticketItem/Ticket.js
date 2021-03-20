
import React from 'react'
import { Card} from 'react-bootstrap';
import { useHistory } from 'react-router';




 const Ticket = (props) => {
     //console.log(props)
     const {title,imgUrl,ticketType} =props.ticket
     const history =useHistory()
    return (
<Card className="bg-light text-black" style={{ width: '18rem',marginLeft:'20px'}}>
<Card.Img variant="top" src={imgUrl}  />
  <button onClick={()=>history.push(`/booking/${ticketType}`)} style={{border:'none'}}>{title}</button>
</Card>
    )
      
}
export default Ticket

