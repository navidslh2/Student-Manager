import React from "react";
import Student from "./student/student";

const Students = (props) =>{
    return(
        props.studentList.map ((student, index)=>{
            return <Student />
        })
    )
}

export default Students