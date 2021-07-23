
import React from 'react';
import notFound from "../../../images/not-found.png"
const NotFound = () => {
    return (
        <div className="">
            <div className="row d-flex justify-content-center">
            <div className="row w-25 mt-5 text-secondary">
                <h1>OooF Page Not found</h1>
                <p>Please try again later....</p>
            <img src={notFound} alt="" />
            </div>
        </div>
        </div>
    );
};

export default NotFound;