import React, { useState, useEffect, useRef, useContext } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import NewStudent from "../component/students/newStudent/newStudent";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
const AddStudentPage = (props) => {
  const { authenticated } = useContext(AuthContext);
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
    setResult(true);
    if (
      studentName !== "" &&
      studentClass !== "" &&
      studentPhone !== "" &&
      studentEmail !== ""
    ) {
      try {
        const res = await fetch("http://localhost/student/insertstudent.php", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullname: studentName,
            classNumber: studentClass,
            phone: studentPhone,
            email: studentEmail,
          }),
        });
        const data = res.json();
        console.log(data)
      } catch (error) {
        alert(error.message);
      }
    } else alert("fill in all");
  };
  if (result) {
    return <Navigate to="/" replace />;
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
