import React from "react";
import Student from "./student/student";

const Students = (props) =>{

    return(
        props.studentList.map ((student, index)=>{
            return <Student  
            key={index}
            id={student.id} 
            name={student.fullName} 
            class={student.class} 
            phoneNumber={student.phoneNumber} 
            email={student.email}
            nameChange={(event) => props.nameChange(event, student.id)}/>
            
        })
    )
}

export default Students