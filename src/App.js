import "./App.css";
import "./component/students/student/student.css";
import Toolbar from "./container/header/toolbar/Toolbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EditStudentPage from "./pages/EditStudentPage";
import NotFoundPage from "./component/404page/NotFoundPage";
import React, { Suspense } from "react";
const AddStudentPage = React.lazy(() => import("./pages/AddStudentPage"));

function App() {
  // const [students, setStudents] = useState([
  //   {
  //     id: 1,
  //     fullName: "Navid Salehi",
  //     class: "a12",
  //     phoneNumber: 1234,
  //     email: "`navidslh2@gmail.com`",
  //   },
  //   {
  //     id: 2,
  //     fullName: "Nima Salehi",
  //     class: "b13",
  //     phoneNumber: 4567,
  //     email: "navidslh3@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     fullName: "reza akbari",
  //     class: "c13",
  //     phoneNumber: 7895,
  //     email: "navidslh4@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     fullName: "ali masoudi",
  //     class: "d14",
  //     phoneNumber: 15687,
  //     email: "navidslh5@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     fullName: "hamid sadeghi",
  //     class: "b15",
  //     phoneNumber: 46879,
  //     email: "navidslh6@gmail.com",
  //   },
  // ]);
  // const inputEl = useRef(null)
  // const scrollHandler = ()=>{
  //   const rect = inputEl.current.getBoundingClientRect();
  //   window.scrollTo(0, rect.top + window.scrollY);
  //   inputEl.current.focus()
  // }
  // start add student
  // const [studentName, setStudentName] = useState('')
  // const [studentClass, setStudentClass] = useState('')
  // const [studentPhone, setStudentPhone] = useState('')
  // const [studentEmail, setStudentEmail] = useState('')
  // const newStudentNamehandler = (event)=>{
  //   setStudentName(event.target.value)
  // }
  // const newStudentClasshandler = (event)=>{
  //   setStudentClass(event.target.value)
  // }
  // const newStudentPhonehandler = (event)=>{
  //   setStudentPhone(event.target.value)
  // }
  // const newStudentEmailhandler = (event)=>{
  //   setStudentEmail(event.target.value)
  // }
  // const addStudentHandler = ()=>{
  //   const newStudent={}
  //   if (studentName !=='' && studentClass !=='' && studentPhone !=='' && studentEmail !==''){
  //     newStudent.id = students.length +1
  //     newStudent.fullName = studentName
  //     newStudent.class = studentClass
  //     newStudent.phoneNumber = studentPhone
  //     newStudent.email = studentEmail
  //   }else(
  //     alert("fill in all")
  //   )
  //   const newStudents = [...students]
  //   newStudents.push(newStudent)
  //   setStudents(newStudents)
  //   setStudentName('')
  //   setStudentClass('')
  //   setStudentPhone('')
  //   setStudentEmail('')
  // }
  // finish add student
  // start search
  // const [searchBarValue, setSearchBarValue] = useState("");
  // const [arrayHolder, setArrayHolder] = useState('')
  // useEffect(()=>{
  //   setArrayHolder(students)
  //   inputEl.current.focus()
  // },[])
  // const searchFilterFunction = (event) => {
  //   const searchData = event.target.value.toUpperCase()
  //   const search = arrayHolder.filter ((item)=>{
  //     const itemName = item.fullName.toUpperCase()
  //     return itemName.indexOf(searchData)>-1
  //   })
  //   setSearchBarValue(event.target.value)
  //   setStudents(search)
  // };
  // finish search
  // start change display
  // const [toggle, setToggle] = useState(false);
  // const displayHandler = () => {
  //   setToggle(!toggle);
  // };
  // finish change display
  // start show student information

  //   const nameChangeHandler = (event, id) => {
  //     const studentIndex = students.findIndex((elem) => {
  //       return elem.id == id;
  //     });
  //     const studentChanged = { ...students[studentIndex] };
  //     studentChanged.fullName = event.target.value;
  //     const student = [...students];
  //     student[studentIndex] = studentChanged;
  //     setStudents(student);
  //   };
  //   const classChangehandler = (event, id) => {
  //     const studentIndex = students.findIndex((elem) => {
  //       return elem.id === id;
  //     });
  //     const studentChanged = { ...students[studentIndex] };
  //     studentChanged.class = event.target.value;
  //     const student = [...students];
  //     student[studentIndex] = studentChanged;
  //     setStudents(student);
  //   };
  //   const phoneChangehandler = (event,id)=>{
  //     const studentIndex =  students.findIndex((elem)=>{
  //       return elem.id == id
  //     })
  //     const studentChanged = {...students[studentIndex]}
  //     studentChanged.phoneNumber = event.target.value
  //     const student = [...students]
  //     student[studentIndex] = studentChanged
  //     setStudents(student)
  //  }
  //  const emailChangeHandler = (event, id)=>{
  //   const studentIndex = students.findIndex(()=>{
  //     return students.id = id
  //   })
  //   const studentChanged = {...students[studentIndex]}
  //   studentChanged.email = event.target.value
  //   const student = [...students]
  //   student[studentIndex] = studentChanged
  //   setStudents(student)
  //  }
  //   const  deleteStudenthandler = (index) => {
  //     const student = [...students];
  //     student.splice(index, 1);
  //     setStudents(student);
  //   };
  // finish show student information

  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-student" element={<Suspense fallback={<div>...loading</div>}><AddStudentPage /></Suspense>} />
          <Route path="students/:id" element={<EditStudentPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
