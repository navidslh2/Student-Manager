import React from "react";
import { NavLink } from "react-router-dom";
import'./NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <h1>Not Found</h1>
      <p>Click here to go to the <NavLink to='/' className='not-found'>Home Page</NavLink></p>
      
    </React.Fragment>
  );
};

export default NotFoundPage;
