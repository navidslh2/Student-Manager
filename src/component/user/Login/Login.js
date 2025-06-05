import React, { useContext, useEffect, useState } from "react";
import Button from "../../ui/button/button";
import "./Login.css";
import { AuthContext } from "../../../context/auth/authContext";
import useLogin from "../../../hooks/useLogin/useLogin";
import Captcha from "../../ui/captcha/Captcha";
import { line } from "framer-motion/client";

const Login = (props) => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorReport, setErrorReport] = useState();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { dispatch } = useContext(AuthContext);
  const { login } = useLogin();
  const [captchaChange, setCaptchaChange] = useState(false);
  useEffect(() => {
    setErrorReport("");
  }, [props.show]);

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value.trim());
  };
  const passwordChangeHandler = (event) => {
    setPasswordValue(event.target.value);
  };
  const loginHandler = async () => {
    setCaptchaChange(!captchaChange);
    setErrorReport("");
    const validate = () => {
      const emailpattern =
        /^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
      if (emailpattern.test(emailValue) && passwordValue.length > 7) {
        return true;
      } else {
        return false;
      }
    };
    if (captcha === captchaValue.toLowerCase()) {
      if (validate) {
        const result = await login(emailValue, passwordValue);
        if (result === "Data Matched") {
          dispatch({ type: "login", payload: emailValue });
          setEmailValue("");
          setPasswordValue("");
          setCaptchaValue("");
        } else {
          setErrorReport(result);
          setCaptchaValue("");
        }
      } else {
        setErrorReport("email or password is invalid");
      }
    } else {
      setErrorReport("captcha invalid");
    }
    setCaptchaValue("");
    setCaptcha("");
  };

  return (
    <>
      <div className={props.lightmode ? null : "dark"}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <div style={{ color: "red" }}>{errorReport}</div>

  
        <div className="input-container">
          <input
            type="text"
            placeholder="email"
            onChange={emailChangeHandler}
            value={emailValue}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="password"
            onChange={passwordChangeHandler}
            value={passwordValue}
          />
        </div>
        
        <Captcha
          oncaptchaValue={setCaptchaValue}
          onCaptcha={setCaptcha}
          captchaChange={captchaChange}
        />
        <Button btnType="green" clicked={loginHandler}>
          Login
        </Button>
        <div>
          Don't have an account?{" "}
          <span onClick={props.showLoginHandler} style={{textDecoration:'underline', cursor:'pointer'}}>Sign in</span>
        </div>
      </div>
    </>
  );
};
export default React.memo(Login);
