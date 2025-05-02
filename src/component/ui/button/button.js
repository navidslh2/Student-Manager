import React from "react";
import PropTypes from "prop-types";
import './button.css'
const Button = (props) =>{
    let classes = ["Button"]
    switch (props.btnType){
        case "red":
            classes.push("Red")
            break
        case "green":
            classes.push("Green")
            break
        case "blue":
            classes.push("Blue")  
            break  
        default:
            break
    }
    return(
        <button 
        className={classes.join(" ")}
        onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default React.memo(Button)

Button.propTypes = {
    clicked:PropTypes.func.isRequired,
    children:PropTypes.string.isRequired,
    btnType:PropTypes.func.isRequired
}