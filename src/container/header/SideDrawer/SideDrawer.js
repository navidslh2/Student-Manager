import React, { useState } from "react";
import './SideDrawer.css'
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../component/ui/button/button";
import Backdrop from "../../../component/ui/button/backdrop/Backdrop";

const SideDrawer=(props)=>{    
    let classSideDrawer=["SideDrawer"]
    console.log(classSideDrawer.join(" "))
    if(props.open){
        classSideDrawer=["SideDrawer" , "open"]
    }else{
        classSideDrawer=["SideDrawer" , "close"]
    }
    return(
        <div className={classSideDrawer.join(" ")}>
            
            <nav>
                <MenuItems />
            </nav>
            <div className="boxButton">
            <   Button
                btnType='red'
                >
                    Login / Sign up
                </Button>
            </div>

        </div>
    )
}

export default React.memo(SideDrawer)