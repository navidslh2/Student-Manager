import React from "react";
import './Backdrop.css'

const Backdrop = (props)=>{
    return(
        props.show?<div className="Backdrop" data-testid="backdrop" onClick={props.backdropClick}></div>:null
    )
} 

export default React.memo(Backdrop)