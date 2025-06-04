const UseSignin = () => {
  const signin = async (fullName, eamil, password) => {
    try {
      const res = await fetch("http://localhost/student/addmember.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: eamil,
          password: password,
        }),
      });
      const data = await res.json("");
    } catch (error) {
        alert(error.massege)
    }
  };
  return {signin}
};

export default UseSignin;
