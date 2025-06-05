import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Login from "../component/user/Login/Login";
import { AuthContext } from "../context/auth/authContext";
import Signin from "../component/user/signin/Signin";

const SigninPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const {authenticated} = useContext(AuthContext)
  const navigate = useNavigate();
  let auth = false;
  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    auth = true;
  }
  useEffect(() => {
    if (auth) {
      navigate("/", { replace: true });
      
    }
  }, [authenticated]);
  const showLoginHandler = () =>{
    setShowLogin(false)
  }
  return (
    showLogin?(<Login lightmode={false} showLoginHandler={showLoginHandler}/>):(<Signin lightmode={false}/>)
  
)
};

export default SigninPage;
