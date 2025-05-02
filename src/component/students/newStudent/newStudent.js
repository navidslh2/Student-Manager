import React from "react";
import './newStudent.css'
import Button from "../../ui/button/button";
import PropTypes from "prop-types";

const NewStudent = (props)=>{
    const {studentName, studentClass, studentPhone, studentEmail} = props
    const {newStudentName, newStudentClass, newStudentPhone, newStudentEmail} = props
    return(
        <div className="new-students">
            <h2>Add A New Student</h2>
            <div className="input-wrapper">
                <label>Full Name :</label>
                <input type='text' value={studentName} onChange={newStudentName}/>
            </div>
            <div className="input-wrapper">
                <label>Class :</label>
                <input type='text' value={studentClass} onChange={newStudentClass}/>
            </div>
            <div className="input-wrapper"> 
                <label>Phone Number :</label>
                <input type='number'value={studentPhone} onChange={newStudentPhone}/>
            </div>
            <div className="input-wrapper">
                <label>Email :</label>
                <input type='email' value={studentEmail} onChange={newStudentEmail}/>
            </div>
            <Button
            btnType="green"
            clicked={props.addStudent}
            >
                Add Student
            </Button>
        </div>
    )
}

export default React.memo(NewStudent)

NewStudent.propsTypes = {
    studentName:PropTypes.string.isRequired,
    studentClass:PropTypes.string.isRequired,
    studentPhone:PropTypes.number.isRequired,
    studentEmail:PropTypes.string.isRequired,
    newStudentName:PropTypes.func.isRequired,
    newStudentClass:PropTypes.func.isRequired,
    newStudentPhone:PropTypes.func.isRequired,
    newStudentEmail:PropTypes.func.isRequired,
    addStudent:PropTypes.func.isRequired
}
