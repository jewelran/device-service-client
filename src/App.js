
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Book from './Component/Dashboard/Book/Book';
import NotFound from './Component/Home/NotFound/NotFound';
import BookingLIst from './Component/Dashboard/BookingList/BookingLIst';
import Review from './Component/Dashboard/Review/Review';
import { createContext, useState } from 'react';
import PrivetRoute from './Component/Login/PrivetRoute';
import BookDetails from './Component/Dashboard/Book/BookDetails';
import Admin from './Component/AdminPanel/Admin/Admin';
import ManageService from './Component/AdminPanel/ManageService/ManageService';
import TotalOrders from './Component/AdminPanel/TotalOrders/TotalOrders';
import AddService from './Component/Dashboard/AddService/AddService';
export const  userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <userContext.Provider value = {[loggedInUser, setLoggedInUser]} className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/admin/manage">
            <ManageService></ManageService>
          </Route>
          <Route path = "/admin/totalOrders">
            <TotalOrders></TotalOrders>
          </Route>
          <Route path = "/dashboard/review">
            <Review></Review>
          </Route>
          <Route path = "/dashboard/addService">
            <AddService></AddService>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/service/:id">
            <BookDetails></BookDetails>
          </Route>
          <Route path = "/dashboard/bookingLIst">
            <BookingLIst></BookingLIst>
          </Route>
          <PrivetRoute path = "/dashboard/book/:id">
            <Book></Book>
          </PrivetRoute>
          <PrivetRoute path = "/dashboard">
            <BookingLIst></BookingLIst>
          </PrivetRoute>
          <PrivetRoute path = "/admin">
            <Admin></Admin>
          </PrivetRoute>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
