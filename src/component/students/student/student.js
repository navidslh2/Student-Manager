import React from "react";
import './student.css'

const Student = () =>{
    return(
        <div className="students">
            <label>Student Number: 1</label>

            
            <label>Full Name</label>
            <input type='email' />

            <label>Class</label>
            <input type='text' />

            <label>Phone Number</label>
            <input type='number' />

            <label>Email</label>
            <input type='email' />

        </div>
    )
}

export default Student