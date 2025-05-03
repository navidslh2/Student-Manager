import React from "react";
import './student.css'
import Button from "../../ui/button/button";
import PropTypes from "prop-types";

const Student = (props) =>{
    return(
        <div className="students">
            <h3>Student Number : {props.id}</h3>
            <div className="input-wrapper">
                <label>Full Name :</label>
                <input type='text' value={props.name} onChange={props.nameChange} />
            </div>
            <div className="input-wrapper">
                <label>Class :</label>
                <input type='text' value={props.class} onChange={props.classChange} />
            </div>
            <div className="input-wrapper"> 
                <label>Phone Number :</label>
                <input type='number' value={props.phoneNumber} onChange={props.phoneChange}/>
            </div>
            <div className="input-wrapper">
                <label>Email :</label>
                <input type='email' value={props.email} onChange={props.emailChange} />
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

export default React.memo(Student)

Student.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    nameChange:PropTypes.func.isRequired,
    class:PropTypes.string.isRequired,
    classChange:PropTypes.func.isRequired,
    phoneNumber:PropTypes.number.isRequired,
    phoneChange:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    deleteStudent:PropTypes.func.isRequired
}