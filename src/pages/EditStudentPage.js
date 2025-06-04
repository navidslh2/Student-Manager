import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/auth/authContext";
import ModalMessage from "../component/ui/button/modal/modalMessage/modalMessage";
import useEditStudent from "../hooks/useEditStudent";
import EditStudents from "../component/students/editStudent/editStudent";

const EditStudentPage = () => {
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
  const {editstudent} = useEditStudent()
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
    const data = await editstudent(id, studnetName, studnetClassNumber, studentphoneNumber, studentEmail)
      if (data === "information was successfully update") {
        setEdit(true);
        setShowModalMessage(true);
        setTimeout(() => {
          navigate("/", { replace: true });
          setShowModalMessage(false);
        }, 3000);
      } else {
        setEdit(false);
        setShowModalMessage(true);
        setTimeout(() => {
          setShowModalMessage(false);
        }, 3000);
      }
  };
  return (
    <React.Fragment>
      <EditStudents 
      studnetName={studnetName}
      fullNameChangeHandler={fullNameChangeHandler}
      studnetClassNumber={studnetClassNumber}
      ClassChangeHandler={ClassChangeHandler}
      studentphoneNumber={studentphoneNumber}
      phoneChangeHandler={phoneChangeHandler}
      studentEmail={studentEmail}
      emailChangeHandler={emailChangeHandler}
      editHandler={editHandler}
      />
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
    </React.Fragment>
  );
};

export default React.memo(EditStudentPage);
