import React from "react";
import './Modal.css'
import Backdrop from "../backdrop/Backdrop";

const Modal =(props)=>{
    const classes=["Modal"]
    if(props.show){
        classes.push("showModal")
    }
    return(
        <>
            <Backdrop
            show={props.show}
            backdropClick={props.backdropClick} />
            <div className={classes.join(" ")}>
                {props.children}
            </div>

        </>
    )
}

export default React.memo(Modal)