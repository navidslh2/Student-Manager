import React, { useContext, useEffect, useState } from "react";
import "./style/EditStudentPage.css";
import Button from "../component/ui/button/button";
import { useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/auth/authContext";
import { StudentContext } from "../context/students/studentContext";
import ModalMessage from "../component/ui/button/modal/modalMessage/modalMessage";

const EditStudentPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { fullName, classNumber, phoneNumber, email } = location.state;
  const { authenticated } = useContext(AuthContext);
  const [studnetName, setStudnetName] = useState(fullName);
  const [studnetClassNumber, setStudnetClassNumber] = useState(classNumber);
  const [studentphoneNumber, setStudentphoneNumber] = useState(phoneNumber);
  const [studentEmail, setStudentEmail] = useState(email);
  const [edit, setEdit] = useState();
  const [showModalMessage, setShowModalMessage] = useState(false);
  const fullNameChangeHandler = (event) => {
    setStudnetName(event.target.value);
  };
  const ClassChangeHandler = (event) => {
    setStudnetClassNumber(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setStudentphoneNumber(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setStudentEmail(event.target.value);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (!userInfo) {
      navigate("/", { replace: true });
    }
    setShowModalMessage(false);
  }, [authenticated]);
  const editHandler = async () => {
    try {
      const res = await fetch("http://localhost/student/updatestudent.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          fullname: studnetName,
          classNumber: studnetClassNumber,
          phone: studentphoneNumber,
          email: studentEmail,
        }),
      });
      const data = await res.json();
      if (data === "information was successfully update") {
        setEdit(true);
        setShowModalMessage(true);
        setTimeout(() => {
          navigate("/", { replace: true });
          setShowModalMessage(false);
        }, 4000);
      } else {
        setEdit(false);
        setShowModalMessage(true);
        setTimeout(() => {
          setShowModalMessage(false);
        }, 4000);
      }
    } catch (error) {
      alert(error.message);
      setEdit(false);
      setShowModalMessage(true);
      setTimeout(() => {
        setShowModalMessage(false);
      }, 4000);
    }
  };
  return (
    <div className="newStudents">
      <h2>Edit Student</h2>
      <div className="input-wrapper">
        <label>Full Name :</label>
        <input
          type="text"
          value={studnetName}
          onChange={fullNameChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Class :</label>
        <input
          type="text"
          value={studnetClassNumber}
          onChange={ClassChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Phone Number :</label>
        <input
          type="number"
          value={studentphoneNumber}
          onChange={phoneChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Email :</label>
        <input
          type="email"
          value={studentEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <Button btnType="green" clicked={editHandler}>
        Edit
      </Button>
      {edit ? (
        <ModalMessage color={"green"} ShowModalMessage={showModalMessage}>
          <p>student's information was successfully update.</p>
          <p>you will be redirected to the homepage.</p>
        </ModalMessage>
      ) : (
        <ModalMessage color={"red"} ShowModalMessage={showModalMessage}>
          <p>student's information</p>
          <p>was not successfully update</p>
        </ModalMessage>
      )}
    </div>
  );
};

export default React.memo(EditStudentPage);
