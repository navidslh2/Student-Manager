import React from "react";
import './student.css'

const Student = (props) =>{
    const handelChange = (e) =>{
        return 
    }
    return(
        <div className="students">
            <label>Student Number: {props.id}</label>

            
            <label>Full Name</label>
            <input type='email' value={props.name} onChange={props.nameChange} />

            <label>Class</label>
            <input type='text' value={props.class} />

            <label>Phone Number</label>
            <input type='number' value={props.phoneNumber} />

            <label>Email</label>
            <input type='email' value={props.email} />

        </div>
    )
}

export default Student