import PropTypes from "prop-types";
import React from "react";
import './MenuItem.css'
import { NavLink } from "react-router-dom";


const MenuItem =(props)=>{
    return(
        <li className="MenuItem">  
            <NavLink to={props.link} className={({isActive})=> isActive? "active":""}> 
                {props.children}
            </NavLink>
        </li>
    )
}

export default React.memo(MenuItem)

MenuItem.propTypes ={ 
    link:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}