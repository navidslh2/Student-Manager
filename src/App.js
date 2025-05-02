import "./App.css";
import Button from "./component/ui/button/button";
import Students from "./component/students/students";
import React, { useState,useEffect, useRef } from "react";
import './component/students/student/student.css'
import Search from "./component/ui/button/search/Search";
import NewStudent from "./component/students/newStudent/newStudent";

function App() {
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
    const inputEl = useRef(null)
    const scroll = ()=>{
      window.scrollTo(0,inputEl.current.offsetTop)
    }
    // start add student
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [studentPhone, setStudentPhone] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const newStudentNamehandler = (event)=>{
      setStudentName(event.target.value)
    }
    const newStudentClasshandler = (event)=>{
      setStudentClass(event.target.value)
    }
    const newStudentPhonehandler = (event)=>{
      setStudentPhone(event.target.value)
    }
    const newStudentEmailhandler = (event)=>{
      setStudentEmail(event.target.value)
    }
    const addStudentHandler = ()=>{
      const newStudent={}
      if (studentName !=='' && studentClass !=='' && studentPhone !=='' && studentEmail !==''){
        newStudent.id = students.length +1
        newStudent.fullName = studentName
        newStudent.class = studentClass
        newStudent.phoneNumber = studentPhone
        newStudent.email = studentEmail
      }else(
        alert("fill in all")
      )
      const newStudents = [...students]
      newStudents.push(newStudent)
      setStudents(newStudents)
      setStudentName('')
      setStudentClass('')
      setStudentPhone('')
      setStudentEmail('')
    }
    // finish add student
  // start search 
  const [searchBarValue, setSearchBarValue] = useState("");
  const [arrayHolder, setArrayHolder] = useState('')
  useEffect(()=>{
    setArrayHolder(students)
    inputEl.current.focus()
  },[])
  const searchFilterFunction = (event) => {
    const searchData = event.target.value.toUpperCase()
    const search = arrayHolder.filter ((item)=>{
      const itemName = item.fullName.toUpperCase()
      return itemName.indexOf(searchData)>-1
    })
    setSearchBarValue(event.target.value)
    setStudents(search)
    console.log(search)
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
  const phoneChangehandler = (event,id)=>{
    const studentIndex =  students.findIndex((elem)=>{
      return elem.id == id
    })
    const studentChanged = {...students[studentIndex]}
    studentChanged.phoneNumber = event.target.value
    const student = [...students]
    student[studentIndex] = studentChanged
    setStudents(student)
 }
  const deleteStudenthandler = (index) => {
    const student = [...students];
    student.splice(index, 1);
    setStudents(student);
  };
 // finish show student information

  return (
    <div className="App">
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
      <Search
        inputValue={searchBarValue}
        changeValue={searchFilterFunction}
        ref={inputEl}
      />
      <Button btnType="blue" clicked={displayHandler}>
        Change display
      </Button>
      <Students
        studentList={students}
        nameChange={nameChangeHandler}
        classChange={classChangehandler}
        deleteStudent={deleteStudenthandler}
        display={toggle}
        phoneChange={phoneChangehandler}
      />
      <Button
      btnType="blue"
      clicked={scroll}
      >
        scroll to input
      </Button>
    </div>
  );
}

export default App;
