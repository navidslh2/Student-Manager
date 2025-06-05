const useDeleteStudent = () => {
  const deleteStudent = async (id) => {
    try {
      const res = await fetch("http://localhost/student/deletestudent.php", {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = res.json()
      return data
    } catch (error) {
        return  error
    }
  };
  return {deleteStudent}
};

export default useDeleteStudent;
