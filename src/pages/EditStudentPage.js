import React, { useContext, useEffect } from "react";
import "./style/EditStudentPage.css";
import Button from "../component/ui/button/button";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/auth/authContext";

const EditStudentPage = (props) => {
  const { id } = useParams();
  const params = useParams
  const {authenticated} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{ 
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if(!userInfo){
      navigate('/',{replace:true})
    }
  },[authenticated])
  const editHandler = (props) => {
    console.log(params);
  };
  return (
    <div className="newStudents">
      <h2>Add A New Student</h2>
      <div className="input-wrapper">
        <label>Full Name :</label>
        <input type="text" />
      </div>
      <div className="input-wrapper">
        <label>Class :</label>
        <input type="text" />
      </div>
      <div className="input-wrapper">
        <label>Phone Number :</label>
        <input type="number" />
      </div>
      <div className="input-wrapper">
        <label>Email :</label>
        <input type="email" />
      </div>
      <Button btnType="green" clicked={editHandler}>
        Edit
      </Button>
    </div>
  );
};

export default React.memo(EditStudentPage);
