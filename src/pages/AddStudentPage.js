import React, { useState, useEffect, useRef, useContext } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import NewStudent from "../component/students/newStudent/newStudent";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
import UseAddStudent from "../hooks/useAddStudent/useAddStudent";
const AddStudentPage = (props) => {
  const { authenticated } = useContext(AuthContext);
  const {addStudent} = UseAddStudent()
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (!userInfo) {
      navigate("/", { replace: true });
    }
  }, [authenticated]);

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
  const [result, setResult] = useState(false);
  const addStudentHandler = async () => {
    if (
      studentName !== "" &&
      studentClass !== "" &&
      studentPhone !== "" &&
      studentEmail !== ""
    ) {
      const data= await addStudent(studentName, studentClass, studentPhone, studentEmail)
      if (data === "student was successfully added"){
            setResult(true);
      }
    } else alert("fill in all");
  };
  if (result) {
    navigate("/", { replace: true });
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
