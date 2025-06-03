const useLogin = () => {
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost/student/user_login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
  return {login};
};

export default useLogin;
