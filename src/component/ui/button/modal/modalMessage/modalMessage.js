import React from "react";
import './modalMessage.css'

const ModalMessage = (props)=>{
    const classes = ['ModalMessage']
    if(props.ShowModalMessage){
        classes.push('show')
    }
    switch (props.color){
        case 'red': 
            classes.push('red')
            break
        case 'green':
            classes.push("green")
            break
        default:
            break
    }
    return(
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    )
}

export default ModalMessage