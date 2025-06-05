const UseAddStudent = () => {
  const addStudent = async (studentName, studentClass, studentPhone, studentEmail) => {
    try {
      const res = await fetch("http://localhost/student/insertstudent.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname: studentName,
          classNumber: studentClass,
          phone: studentPhone,
          email: studentEmail,
        }),
      });
      const data = await res.json();
      return data
    } catch (error) {}
  };
  return {addStudent}
};

export default UseAddStudent;
