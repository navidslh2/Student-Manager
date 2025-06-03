import React from "react";

const useEditStudent = () => {
  const editstudent = async (id, studnetName, studnetClassNumber, studentphoneNumber, studentEmail) => {
    try {
      const res = await fetch("http://localhost/student/updatestudent.php", {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          fullname: studnetName,
          classNumber: studnetClassNumber,
          phone: studentphoneNumber,
          email: studentEmail,
        }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return error.message;
    }
  };
  return {editstudent}
};

export default useEditStudent;
