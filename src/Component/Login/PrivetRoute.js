import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userContext } from '../../App';
const PrivetRoute = ({children, ...rest}) => {
    const [loggedInUser] = useContext(userContext)
  const token = localStorage.getItem("token")

    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email || token? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;