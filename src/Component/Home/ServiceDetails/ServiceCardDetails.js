
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./ServiceDetails.css"
import { Link,} from 'react-router-dom';
const ServiceCardDetails = ({services}) => {
 const handleClick = (id) => {
  console.log(id);
  fetch("http://localhost:3030/single-service-item/"+id, {
    method:"POST",
    headers:{"content-type":"application/json"},
    body: JSON.stringify({id})
  
  })
  .then(response => {
    if (response) {
      console.log("data puss");
    }
  })
 }

    return (
        <div className="">
            <Card className ="serviceContainer m-3" style={{ width: '18rem' }}>
        <Card.Img  style= {{padding:"2rem" , height:"250px", textAlign:"center"}} variant="top" src={services.image} />
        <Card.Body>
          <Card.Title>{services.title}</Card.Title>
          <Card.Text>
           {services.description}
          </Card.Text>
        <Link to = {"/service/"+services._id}>
        <Button onClick = {() => handleClick(services._id)}  variant="primary">Learn More...[ ]</Button>
        </Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default ServiceCardDetails;