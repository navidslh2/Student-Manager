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
                            name={student.student_name} 
                            classNumber={student.student_class} 
                            phoneNumber={student.studeny_phone_number} 
                            email={student.student_email}
                            deleteStudent={()=>props.deleteStudent(student.id)}
                            edit={()=>props.edit(student.id, student.student_name, student.student_class, student.studeny_phone_number, student.student_email)}
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
                    name={student.student_name} 
                    classNumber={student.student_class} 
                    phoneNumber={student.studeny_phone_number} 
                    email={student.student_email}
                    deleteStudent={()=>props.deleteStudent(student.id)}
                    edit={()=>props.edit(student.id, student.student_name, student.student_class, student.studeny_phone_number, student.student_email)}
                    />
                </ErrorBoundary>
            )
            
            
            
        })
    )
}

export default React.memo(Students)
