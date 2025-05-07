import React from "react";
import './Backdrop.css'

const Backdrop = (props)=>{
    return(
        props.show?<div className="Backdrop" onClick={props.backdropClick}></div>:null
    )
} 

export default React.memo(Backdrop)