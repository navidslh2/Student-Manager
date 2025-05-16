import React, { useState, useEffect, useRef } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import NewStudent from "../component/students/newStudent/newStudent"
import { Navigate } from "react-router-dom";
const AddStudentPage = (props) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: "Navid Salehi",
      class: "a12",
      phoneNumber: 1234,
      email: "`navidslh2@gmail.com`",
    },
    {
      id: 2,
      fullName: "Nima Salehi",
      class: "b13",
      phoneNumber: 4567,
      email: "navidslh3@gmail.com",
    },
    {
      id: 3,
      fullName: "reza akbari",
      class: "c13",
      phoneNumber: 7895,
      email: "navidslh4@gmail.com",
    },
    {
      id: 4,
      fullName: "ali masoudi",
      class: "d14",
      phoneNumber: 15687,
      email: "navidslh5@gmail.com",
    },
    {
      id: 5,
      fullName: "hamid sadeghi",
      class: "b15",
      phoneNumber: 46879,
      email: "navidslh6@gmail.com",
    },
  ]);
  // start add student
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const newStudentNamehandler = (event) => {
    setStudentName(event.target.value);
  };
  const newStudentClasshandler = (event) => {
    setStudentClass(event.target.value);
  };
  const newStudentPhonehandler = (event) => {
    setStudentPhone(event.target.value);
  };
  const newStudentEmailhandler = (event) => {
    setStudentEmail(event.target.value);
  };
   const [result, setResult] = useState(false)
  const addStudentHandler = () => {
    setResult(true)
    const newStudent = {};
    if (
      studentName !== "" &&
      studentClass !== "" &&
      studentPhone !== "" &&
      studentEmail !== ""
    ) {
      newStudent.id = students.length + 1;
      newStudent.fullName = studentName;
      newStudent.class = studentClass;
      newStudent.phoneNumber = studentPhone;
      newStudent.email = studentEmail;
    } else alert("fill in all");
    const newStudents = [...students];
    newStudents.push(newStudent);
    setStudents(newStudents);
    setStudentName("");
    setStudentClass("");
    setStudentPhone("");
    setStudentEmail("");
  };
  if(result){
    return <Navigate to='/' replace />
  }
  // finish add student
  return (
    <React.Fragment>
      <Toolbar />
      <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhone={studentPhone}
        studentEmail={studentEmail}
        newStudentName={newStudentNamehandler}
        newStudentClass={newStudentClasshandler}
        newStudentPhone={newStudentPhonehandler}
        newStudentEmail={newStudentEmailhandler}
        addStudent={addStudentHandler}
      />
    </React.Fragment>
  );
};

export default AddStudentPage;
