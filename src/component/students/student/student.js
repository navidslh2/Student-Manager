import React from "react";
import './student.css'
import Button from "../../button/button";

const Student = (props) =>{
    return(
        <div className="students">
            <label>Student Number : {props.id}</label>
            <div className="input-wrapper">
                <label>Full Name :</label>
                <input type='email' value={props.name} onChange={props.nameChange} />
            </div>
            <div className="input-wrapper">
                <label>Class :</label>
                <input type='text' value={props.class} onChange={props.classChange} />
            </div>
            <div className="input-wrapper"> 
                <label>Phone Number :</label>
                <input type='number' value={props.phoneNumber} />
            </div>
            <div className="input-wrapper">
                <label>Email :</label>
                <input type='email' value={props.email} />
            </div>
            <Button 
            btnType="red"
            clicked={props.deleteStudent}
            >
                Delete Student
            </Button>
        </div>
    )
}

export default Student