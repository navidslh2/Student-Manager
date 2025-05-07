import PropTypes from "prop-types";
import React from "react";
import './MenuItem.css'

const MenuItem =(props)=>{
    return(
        <li className="MenuItem">  
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default React.memo(MenuItem)

MenuItem.propTypes ={ 
    link:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}