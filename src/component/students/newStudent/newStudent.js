import React, {useEffect} from "react";
import classes from './newStudent.module.css'
import Button from "../../ui/button/button";
import PropTypes from "prop-types";
import Wrapper from "../../hoc/Wrapper";
import WithClass from "../../hoc/WithClass";
 



const NewStudent = (props)=>{
    const {studentName, studentClass, studentPhone, studentEmail} = props
    const {newStudentName, newStudentClass, newStudentPhone, newStudentEmail} = props

    return(
        <Wrapper>
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
        </Wrapper>
    )
}

export default React.memo(WithClass(NewStudent,classes.newStudents))

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
