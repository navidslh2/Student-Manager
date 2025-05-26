import React from "react";
import Student from "./student/student";
import '../students/student/student.css'
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const Students = (props) =>{
    if (props.display){
        return(
            <div className="students-display">
                {
                    props.studentList.map ((student, index)=>{
                        
                        return (
                        <ErrorBoundary key={index} >
                            <Student
                            id={student.id} 
                            name={student.fullName} 
                            classNumber={student.classNumber} 
                            phoneNumber={student.phoneNumber} 
                            email={student.email}
                            // nameChange={(event) => props.nameChange(event, student.id)}
                            // classChange={(event)=> props.classChange(event,student.id)}
                            // phoneChange={(event)=>{props.phoneChange(event,student.id)}}
                            deleteStudent={()=>props.deleteStudent(student.id)}
                            // emailChange={(event)=>{props.emailChange(event, student.id)}}
                            edit={()=>props.edit(student.id, student.fullName, student.classNumber, student.phoneNumber, student.email)}
                        />
                        </ErrorBoundary>
                        )
                        
                    })
                }
            </div>
        )
    }

    return(
        props.studentList.map ((student, index)=>{
            return (
                <ErrorBoundary key={index}>
                    <Student  
                    id={student.id} 
                    name={student.fullName} 
                    classNumber={student.classNumber} 
                    phoneNumber={student.phoneNumber} 
                    email={student.email}
                    // nameChange={(event) => props.nameChange(event, student.id)}
                    // classChange={(event)=> props.classChange(event,student.id)}
                    // phoneChange={(event)=>{props.phoneChange(event,student.id)}}
                    deleteStudent={()=>props.deleteStudent(student.id)}
                    // emailChange={(event)=>{props.emailChange(event, student.id)}}
                    edit={()=>props.edit(student.id, student.fullName, student.classNumber, student.phoneNumber, student.email)}
                    />
                </ErrorBoundary>
            )
            
            
            
        })
    )
}

export default React.memo(Students)

Students.propTypes ={
    display:PropTypes.bool.isRequired,
    studentList:PropTypes.array.isRequired,
    nameChange:PropTypes.func.isRequired,
    classChange:PropTypes.func.isRequired,
    phoneChange:PropTypes.func.isRequired,
    deleteStudent:PropTypes.func.isRequired
}