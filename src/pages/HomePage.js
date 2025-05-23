import React, { useState, useEffect, useRef, useContext } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import Search from "../component/ui/button/search/Search";
import Button from "../component/ui/button/button";
import Students from "../component/students/students";
import { Route, useNavigate } from "react-router";
import axios from "axios";
import "./style/Homepage.css";
import Spinner from "../component/ui/button/spinner/spinner";
import ErrorHandler from "../component/hoc/ErrorHandler";
import ModalMessage from "../component/ui/button/modal/modalMessage/modalMessage";
import { AuthContext } from "../context/auth/authContext";

const HomePage = (props) => {
  const [students, setStudents] = useState([]);
  const inputEl = useRef(null);
  const scrollHandler = () => {
    const rect = inputEl.current.getBoundingClientRect();
    window.scrollTo(0, rect.top + window.scrollY);
    inputEl.current.focus();
  };
  // start search
  const [searchBarValue, setSearchBarValue] = useState("");
  const [arrayHolder, setArrayHolder] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const { authenticated } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    inputEl.current.focus();
    const fetchstudents = async () => {
      try {
        const res = await fetch("http://localhost/student/showstudent.php");
        const data = await res.json();
        setStudents(data);
        setArrayHolder(data);
        setLoading(false);
      } catch (er) {
        alert(er.message);
      }
    };
    fetchstudents();
  }, []);
  const searchFilterFunction = (event) => {
    const searchData = event.target.value.toUpperCase();
    const search = arrayHolder.filter((item) => {
      const itemName = item.fullName.toUpperCase();
      return itemName.indexOf(searchData) > -1;
    });
    setSearchBarValue(event.target.value);
    setStudents(search);
  };
  // finish search
  // start change display
  const [toggle, setToggle] = useState(false);
  const displayHandler = () => {
    setToggle(!toggle);
  };
  // finish change display
  // start show student information

  const nameChangeHandler = (event, id) => {
    const studentIndex = students.findIndex((elem) => {
      return elem.id == id;
    });
    const studentChanged = { ...students[studentIndex] };
    studentChanged.fullName = event.target.value;
    const student = [...students];
    student[studentIndex] = studentChanged;
    setStudents(student);
  };
  const classChangehandler = (event, id) => {
    const studentIndex = students.findIndex((elem) => {
      return elem.id === id;
    });
    const studentChanged = { ...students[studentIndex] };
    studentChanged.class = event.target.value;
    const student = [...students];
    student[studentIndex] = studentChanged;
    setStudents(student);
  };
  const phoneChangehandler = (event, id) => {
    const studentIndex = students.findIndex((elem) => {
      return elem.id == id;
    });
    const studentChanged = { ...students[studentIndex] };
    studentChanged.phoneNumber = event.target.value;
    const student = [...students];
    student[studentIndex] = studentChanged;
    setStudents(student);
  };
  const emailChangeHandler = (event, id) => {
    const studentIndex = students.findIndex(() => {
      return (students.id = id);
    });
    const studentChanged = { ...students[studentIndex] };
    studentChanged.email = event.target.value;
    const student = [...students];
    student[studentIndex] = studentChanged;
    setStudents(student);
  };
  const deleteStudenthandler = (index) => {
    const student = [...students];
    student.splice(index, 1);
    setStudents(student);
  };
  // finish show student information
  let navigate = useNavigate();
  const editStudentHandler = (id) => {
    if (authenticated) {
      navigate(`/students/${id}`);
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
          nameChange={nameChangeHandler}
          classChange={classChangehandler}
          deleteStudent={deleteStudenthandler}
          display={toggle}
          phoneChange={phoneChangehandler}
          emailChange={emailChangeHandler}
          edit={editStudentHandler}
        />
      )}
      <Button btnType="blue" clicked={scrollHandler}>
        <i className="fa-solid fa-angle-up"></i>
      </Button>
      {authenticated ? null : (
        <ModalMessage ShowModalMessage={showModalMessage} color={'red'}>
          <p>You don't have access to this page. </p>
          <p>please log in to continue.</p>
        </ModalMessage>
      )}
    </div>
  );
};

export default React.memo(ErrorHandler(HomePage, axios));
