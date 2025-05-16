import React, { useEffect } from "react";
import "./style/EditStudentPage.css";
import Button from "../component/ui/button/button";
import { useParams } from "react-router";

const EditStudentPage = (props) => {
  const { id } = useParams();
  const params = useParams
  useEffect(() => {
      console.log(id);
    }, [id]);
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
