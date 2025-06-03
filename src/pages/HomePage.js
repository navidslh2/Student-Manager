import React, { useState, useEffect, useRef, useContext } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import Search from "../component/ui/button/search/Search";
import Button from "../component/ui/button/button";
import Students from "../component/students/students";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/Homepage.css";
import Spinner from "../component/ui/button/spinner/spinner";
import ErrorHandler from "../component/hoc/ErrorHandler";
import ModalMessage from "../component/ui/button/modal/modalMessage/modalMessage";
import { AuthContext } from "../context/auth/authContext";
import { StudentContext } from "../context/students/studentContext";
import useStudents from "../hooks/useStudent";
import useDeleteStudent from "../hooks/deleteStudent";

const HomePage = (props) => {
  const { students, dispatch } = useContext(StudentContext);
  const {deleteStudent} = useDeleteStudent()
  const inputEl = useRef(null);
  const scrollHandler = () => {
    const rect = inputEl.current.getBoundingClientRect();
    window.scrollTo(0, rect.top + window.scrollY);
    inputEl.current.focus();
  };
  // start search
  const [searchBarValue, setSearchBarValue] = useState("");
  const [showModalMessage, setShowModalMessage] = useState(false);
  const { authenticated } = useContext(AuthContext);
  const {loading, arrayHolder,setArrayHolder } = useStudents(dispatch)
  const searchFilterFunction = (event) => {
    const searchData = event.target.value.toUpperCase();
    const search = arrayHolder.filter((item) => {
      const itemName = item.fullName.toUpperCase();
      return itemName.indexOf(searchData) > -1;
    });
    setSearchBarValue(event.target.value);
    dispatch({ type: "search", payload: search });
  };
  // finish search
  // start change display
  const [toggle, setToggle] = useState(false);
  const displayHandler = () => {
    setToggle(!toggle);
  };
 
  let auth = false;
  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    auth = true;
  } else auth = false;
  const deleteStudenthandler = async (id) => {
    if (auth) {
      await deleteStudent(id)
      dispatch({ type: "delete", id: id });
    } else {
      setShowModalMessage(true);
      setTimeout(() => {
        setShowModalMessage(false);
      }, 4000);
    }

  };
  // finish show student information
  let navigate = useNavigate();
  const editStudentHandler = (id,fullName, classNumber, phoneNumber, email) => {
    if (auth) {
      navigate(`/students/${id}`, {
        state: {
          id:id,
          fullName: fullName,
          classNumber: classNumber,
          phoneNumber:phoneNumber,
          email: email
        }
      });
    } else {
      setShowModalMessage(true);
      setTimeout(() => {
        setShowModalMessage(false);
      }, 4000);
    }
  };
  return (
    <div className="Homepage">
      <Toolbar />
      <Search
        inputValue={searchBarValue}
        changeValue={searchFilterFunction}
        ref={inputEl}
      />
      <Button btnType="blue" clicked={displayHandler}>
        Change display
      </Button>
      {loading ? (
        <Spinner />
      ) : (
        <Students
          studentList={students}
          deleteStudent={deleteStudenthandler}
          display={toggle}
          edit={editStudentHandler}
        />
      )}
      <Button btnType="blue" clicked={scrollHandler}>
        <i className="fa-solid fa-angle-up"></i>
      </Button>
      {authenticated ? null : (
        <ModalMessage ShowModalMessage={showModalMessage} color={"red"}>
          <p>You don't have access to this page. </p>
          <p>please log in to continue.</p>
        </ModalMessage>
      )}
    </div>
  );
};

export default React.memo(ErrorHandler(HomePage, axios));
