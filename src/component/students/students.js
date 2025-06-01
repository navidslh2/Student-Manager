import React from "react";
import Student from "./student/student";
import '../students/student/student.css'
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
                            deleteStudent={()=>props.deleteStudent(student.id)}
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
                    deleteStudent={()=>props.deleteStudent(student.id)}
                    edit={()=>props.edit(student.id, student.fullName, student.classNumber, student.phoneNumber, student.email)}
                    />
                </ErrorBoundary>
            )
            
            
            
        })
    )
}

export default React.memo(Students)
