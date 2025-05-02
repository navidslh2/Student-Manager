import React from "react";
import './button.css'
const Button = (props) =>{
    let classes = ["Button"]
    switch (props.btnType){
        case "red":
            classes.push("Red")
            break
        case "green":
            classes.push("Green")
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

export default Button