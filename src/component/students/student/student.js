import React from "react";
import "./student.css";
import Button from "../../ui/button/button";

const Student = (props) => {
  return (
    <div className="students">
      <h3>Student Number : {props.id}</h3>
      <div className="input-wrapper">
        <label>Full Name :<span>{props.name}</span></label>

      </div>
      <div className="input-wrapper">
        <label>Class :<span>{props.classNumber}</span></label>
      </div>
      <div className="input-wrapper">
        <label>Phone Number :<span>{props.phoneNumber}</span></label>
      </div>
      <div className="input-wrapper">
        <label>Email :<span>{props.email}</span></label>
      </div>
      <div>
        <Button btnType="red" clicked={props.deleteStudent}>
          Delete Student
        </Button>
        <Button btnType="green" clicked={props.edit}>
          Edit Student
        </Button>

      </div>
    </div>
  );
};

export default React.memo(Student);

