import React from "react";
import './student.css'

const Student = (props) =>{
    return(
        <div className="students">
            <label>Student Number : {props.id}</label>
            <div>
                <label>Full Name :</label>
                <input type='email' value={props.name} onChange={props.nameChange} />
            </div>
            <div>
                <label>Class :</label>
                <input type='text' value={props.class} onChange={props.classChange} />
            </div>
            <div>
                <label>Phone Number :</label>
                <input type='number' value={props.phoneNumber} />
            </div>
            <div>
                <label>Email :</label>
                <input type='email' value={props.email} />
            </div>
            








        </div>
    )
}

export default Student