
import './App.css';
import Students from './component/students/students';
import React, {useState} from 'react';

function App() {
  const [students, setStudents] = useState(
    [{id : 1,fullName : 'Navid Salehi', class : 'a12', phoneNumber : +989128391641 ,Email : 'navidslh2@gmail.com'},
    {id : 2, fullName : 'Nima Salehi', class : 'b13', phoneNumber : +989128391641 , Email : 'nimaslh2@gmail.com'}]
  )
  
  return (
    <div className="App">
      <Students studentList={students}/>
      
    </div>
  );
}

export default App;
