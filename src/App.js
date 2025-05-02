import "./App.css";
import Button from "./component/ui/button/button";
import Students from "./component/students/students";
import React, { useState,useEffect } from "react";
import './component/students/student/student.css'
import Search from "./component/ui/button/search/Search";

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
  // start search 
  const [searchBarValue, setSearchBarValue] = useState("");
  const [arrayHolder, setArrayHolder] = useState('')
  useEffect(()=>{
    setArrayHolder(students)
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
      <Search
        inputValue={searchBarValue}
        changeValue={searchFilterFunction}
      />
      <Button btnType="green" clicked={displayHandler}>
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
    </div>
  );
}

export default App;
