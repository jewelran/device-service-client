import React from "react";
import RepairPlanDetails from "../RepairPlanDetails.js/RepairPlanDetails";
import "./repairPlan.css";
const RepairPlan = () => {
  const allPlans = [
    {
      _id: "5cf0029caff5056591b0ce7d",
      title: "Bronze",
      currency: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a.",
    },
    {
      _id: "5cf0029caff5056591b0ce7c",
      title: "Silver",
      currency: 40,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a.",
    },
    {
      _id: "5cf0029caff5056591b0ce7e",
      title: "Gold",
      currency: 55,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a.",
    },
    {
      _id: "5cf0029caff5056591b0ce7f",
      title: "Platinum",
      currency: 61,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a.",
    },
  ];
  return (
    <div className="repairPlanContainer">
      <div style={{ marginTop: "10rem" }} className="container-xxl pb-5 ">
        <h1 className="text-muted text-center">Our Repair Plan</h1>
        <p className="text-muted text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          distinctio, vel nemo dolores laudantium recusandae quo cupiditate
          fugiat incidunt nesciunt.
        </p>

        <div className="card-deck planningCardContainer">
          {allPlans.map((plan) => (
            <RepairPlanDetails key={plan._id} plan={plan}></RepairPlanDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepairPlan;
