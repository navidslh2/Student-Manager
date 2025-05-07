import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import './MenuItems.css'

const MenuItems= ()=>{
    return(
        <div className="MenuItems">
            <MenuItem>
                Home
            </MenuItem>
            <MenuItem>
                Add Student
            </MenuItem>
        </div>
        
    )
}

export default React.memo(MenuItems)