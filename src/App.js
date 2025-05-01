
import './App.css';
import Students from './component/students/students';
import React, {useState} from 'react';

function App() {
  const [students, setStudents] = useState(
    [{id : 1,fullName : 'Navid Salehi', class : 'a12', phoneNumber : +989128391641 ,email : 'navidslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'}]
  )
  const nameChangeHandler = (event, id)=>{
    const studentIndex = students.findIndex(elem =>{
      return elem.id == id
    })
    const studentChanged = {...students[studentIndex]}
    studentChanged.fullName = event.target.value
    const student = [...students]
    student[studentIndex] = studentChanged
    setStudents(student)
  }
  const classChangehandler =(event, id)=>{
    const studentIndex = students.findIndex(elem=> {
      return elem.id === id
    })
    const studentChanged = {...students[studentIndex]}
    studentChanged.class = event.target.value
    const student = [...students]
    student[studentIndex] = studentChanged
    setStudents(student)
  }
  return (
    <div className="App">
      <Students 
      studentList={students}
      nameChange={nameChangeHandler}
      classChange={classChangehandler}/>

      
    </div>
  );
}

export default App;
