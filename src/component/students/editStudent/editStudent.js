import Button from "../../ui/button/button";
import './EditStudentPage.css'

const EditStudents = (props) => {
  const { studnetName, studnetClassNumber, studentphoneNumber, studentEmail } =
    props;
  const {
    fullNameChangeHandler,
    ClassChangeHandler,
    phoneChangeHandler,
    emailChangeHandler,
  } = props;
  return (
    <div className="newStudents">
      <h2>Edit Student</h2>
      <div className="input-wrapper">
        <label>Full Name :</label>
        <input
          type="text"
          value={studnetName}
          onChange={fullNameChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Class :</label>
        <input
          type="text"
          value={studnetClassNumber}
          onChange={ClassChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Phone Number :</label>
        <input
          type="number"
          value={studentphoneNumber}
          onChange={phoneChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label>Email :</label>
        <input
          type="email"
          value={studentEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <Button btnType="green" clicked={props.editHandler}>
        Edit
      </Button>
    </div>
  );
};

export default EditStudents;
