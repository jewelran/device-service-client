import { Button } from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import "./RepairPlanDetails.css";
const RepairPlanDetails = ({ plan }) => {
  const handleCard = () => {
    alert("Sorry No Develop!")
  }
  return (
    <div className=" topPlanDetailContainer">
      <Card
        className="shadow-sm p-3 mb-5 bg-body rounded pt-5 planDetailContainer"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Title>
            {" "}
            <h1>{plan.title}</h1>{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-warning ">
            <h1>
              {plan.currency} <small>$</small>
            </h1>
          </Card.Subtitle>
          <Card.Text>{plan.description}</Card.Text>
        </Card.Body>
        <Button onClick = {()=>handleCard()} variant="warning">Click Here</Button>
      </Card>
    </div>
  );
};

export default RepairPlanDetails;
