import PropTypes from "prop-types";
import React from "react";
import './MenuItem.css'
import { Link, NavLink } from "react-router";

const MenuItem =(props)=>{
    return(
        <li className="MenuItem">  
            <NavLink to={props.link}>{props.children}</NavLink>
        </li>
    )
}

export default React.memo(MenuItem)

MenuItem.propTypes ={ 
    link:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}