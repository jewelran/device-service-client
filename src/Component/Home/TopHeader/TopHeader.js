import React from 'react';

import "./TopHeader.css"
const TopHeader = () => {
    return (
        <div>
             <div className=" top-header row align-items-center">
               <div className="homeTitle">
                  <h1> Repair Your PHONE</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam recusandae impedit aliquid? Libero laudantium natus officia quis inventore molestiae.</p>
                  <div className="mt-5">
                      <button className="HomeBtn btn-warning">GET START NOW</button>
                      <button className="HomeBtn btn-warning">LEARN MORE</button>
                  </div>
               </div>
              
           </div>
           
        </div>
    );
};

export default TopHeader;