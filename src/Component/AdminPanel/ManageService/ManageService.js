import React, { useState } from 'react';
import "./ManageService.css"
import  ListGroup  from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Navigation from './../../Home/Navigation/Navigation';
import { useEffect } from 'react';
import ManageServiceDetails from './../ManageserviceDetails/ManageServiceDetails';
import Footer from '../../Footer/Footer';
import "./ManageService.css"
import spinner from"../../../icons/0a3f636ab4541e6b-.gif"
 const ManageService = () => {
  const [allService, setAllServices] = useState([])
    useEffect(() => {
      const url = "http://localhost:3030/allService"
      fetch(url)
      .then(res => res.json())
      .then(data => setAllServices(data))
    },[])

    return (
       <div className="">
          <div className="manageServiceContainer ">
        <div className="">
          <Navigation></Navigation>
        </div>
        <div className="row container-fluid insideContainer">
          <div className="col-md-2 mt-5">
              <div className="">
              <ListGroup className="mt-4">
                <Link to="/home">
                  <ListGroup.Item action>
                    <h3>Booking information</h3>
                  </ListGroup.Item>
                </Link>
                <Link to = "/admin">
                  <ListGroup.Item action>
                   Add Admin
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/manage">
                  <ListGroup.Item  className="active"  action>Manage Service</ListGroup.Item>
                </Link>
                <Link to="/admin/totalOrders">
                  <ListGroup.Item action>Total Order</ListGroup.Item>
                </Link>
               
              </ListGroup>
              </div>
          </div>
          <div className="col-md-10 row mt-5 d-flex justify-content-center align-items-center">
           
            {
              allService.length === 0 ?  <img style ={{ width:"5rem"}} src={spinner} alt="" />:<div className="card-deck ">
              {allService.map(service => <ManageServiceDetails key ={service.id}  service = {service}></ManageServiceDetails>)}
           </div>
            }
              
          </div>
        </div>
        
      </div>
      <div className="">
          <Footer></Footer>
        </div>
       </div>
    );
};

export default ManageService;