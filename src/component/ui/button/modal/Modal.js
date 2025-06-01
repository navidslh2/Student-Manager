import React from "react";
import './Modal.css'
import Backdrop from "../backdrop/Backdrop";
import { AnimatePresence, motion } from "framer-motion";

const dropin = {
    hidden:{
        top:'-100vh',
        scale:0.7,
        opacity:0
    },
    visible:{
        top:'30%',
        scale:1,
        opacity:1,
        transition:{
            duration:0.7
        }
    },
    exit: {
        top: "-100vh",
        scale: 0.7,
        opacity: 0,
        transition: {
        duration: 0.5
        }
    }
}
const Modal =(props)=>{
    return(
        <React.Fragment>
            <Backdrop
            show={props.show}
            backdropClick={props.backdropClick} />
            <AnimatePresence>
                {props.show?(
                    <motion.div
                    className='Modal'
                    variants={dropin}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    >
                        {props.children}
                    </motion.div>
                ):null}
            </AnimatePresence>
            {/* <div className={classes.join(" ")}>
                
            </div> */}

        </React.Fragment>
    )
}

export default React.memo(Modal)

