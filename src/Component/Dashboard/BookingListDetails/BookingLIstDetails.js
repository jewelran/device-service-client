import React from "react";
import "./BookingListDetails.css";
import Card from "react-bootstrap/Card";

const BookingLIstDetails = ({ item }) => {
   
    let status = item.status.pending;
  switch (status) {
      case item.done:
          console.log("done");
          break;
    case item.pending :
        console.log("pending");
        break
        case item.ongoing :
            console.log("ongoing");
            break
      default: console.log("done");
        
  }

  return (
    <div>
      <div className="m-2 shadow totalOrdersDetailsContainer">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className ="text-secondary">{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
             <big className="text-warning">Price: ${item.price}</big>
            </Card.Subtitle>
            <Card.Text>
                <img style ={{ width :"30px"}} src={item.image} alt="" />
            </Card.Text>
            <button className="btn-warning rounded">{status}</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BookingLIstDetails;
