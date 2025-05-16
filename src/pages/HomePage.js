import React, { useState, useEffect, useRef } from "react";
import Toolbar from "../container/header/toolbar/Toolbar";
import Search from "../component/ui/button/search/Search";
import Button from "../component/ui/button/button";
import Students from "../component/students/students";
import { Route, useNavigate } from "react-router";
import axios from "axios";
import './style/Homepage.css'
import Spinner from "../component/ui/button/spinner/spinner";
import ErrorHandler from "../component/hoc/ErrorHandler";

const HomePage = (props) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: "Navid Salehi",
      class: "a12",
      phoneNumber: 1234,
      email: "navidslh2@gmail.com",
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
  useEffect(() => {
    setLoading(true);
    setArrayHolder(students);
    inputEl.current.focus();
    axios.get("https://jsonplaceholder.ir/posts").then((response) => {
      setStudents(response.data);
      setLoading(false);
    });
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
    console.log(id);
    navigate(`/students/${id}`);
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
      {loading ? (<Spinner /> ) :
       (<Students
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
    </div>
  );
};

export default React.memo(ErrorHandler(HomePage, axios));
