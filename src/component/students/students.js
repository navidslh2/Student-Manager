import React from "react";
import Student from "./student/student";
import '../students/student/student.css'
const Students = (props) =>{
    if (props.display){
        return(
            <div className="students-display">
                {
                    props.studentList.map ((student, index)=>{
                        return <Student  
                        key={index}
                        id={student.id} 
                        name={student.fullName} 
                        class={student.class} 
                        phoneNumber={student.phoneNumber} 
                        email={student.email}
                        nameChange={(event) => props.nameChange(event, student.id)}
                        classChange={(event)=> props.classChange(event,student.id)}
                        phoneChange={(event)=>{props.phoneChange(event,student.id)}}
                        deleteStudent={()=>props.deleteStudent(index)}
                        
                        />
                        
                    })
                }
            </div>
        )
    }

    return(
        props.studentList.map ((student, index)=>{
            return <Student  
            key={index}
            id={student.id} 
            name={student.fullName} 
            class={student.class} 
            phoneNumber={student.phoneNumber} 
            email={student.email}
            nameChange={(event) => props.nameChange(event, student.id)}
            classChange={(event)=> props.classChange(event,student.id)}
            phoneChange={(event)=>{props.phoneChange(event,student.id)}}
            deleteStudent={()=>props.deleteStudent(index)}
            />
            
        })
    )
}

export default Students