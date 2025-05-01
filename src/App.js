
import './App.css';
import Button from './component/button/button';
import Students from './component/students/students';
import React, {useState} from 'react';

function App() {
  const [students, setStudents] = useState(
    [{id : 1,fullName : 'Navid Salehi', class : 'a12', phoneNumber : +989128391641 ,email : 'navidslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , email : 'nimaslh2@gmail.com'}]
  )
  const [toggle,setToggle] = useState(false)
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
  const deleteStudenthandler =(index)=>{
    const student=[...students]
    student.splice(index,1)
    setStudents(student)

  }
  const displayHandler = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <Button
      btnType="green"
      clicked={displayHandler}
      >
        Change display
      </Button>
      <Students 
      studentList={students}
      nameChange={nameChangeHandler}
      classChange={classChangehandler}
      deleteStudent={deleteStudenthandler}
      display={toggle}
      />
      
      
    </div>
  );
}

export default App;
