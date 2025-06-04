import { useState } from "react";
import Captcha from "../../ui/captcha/Captcha";
import Button from "../../ui/button/button";
import UseSignin from "../../../hooks/useSignin";

const Signin = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorReport, setErrorReport] = useState([]);
  const [signinNameValue, setSigninNameValue] = useState("");
  const [signinEmailValue, setSigninEmailValue] = useState("");
  const [signinPasswordValue, setSigninPasswordValue] = useState("");
  const [signinConfirmPasswordValue, setSigninConfirmPasswordValue] =
    useState("");
  const {signin} = UseSignin()
  const signinNameChangeHandler = (event) => {
    setSigninNameValue(event.target.value);
  };
  const signinEmailChangeHandler = (event) => {
    setSigninEmailValue(event.target.value);
  };
  const signinPasswordChangeHandler = (event) => {
    setSigninPasswordValue(event.target.value);
  };
  const signinConfirmPasswordChangeHandler = (event) => {
    setSigninConfirmPasswordValue(event.target.value);
  };
  const signinHandler = () => {
    setErrorReport([]);
    const error = [];
    const validate = () => {
      console.log(signinPasswordValue)
      if (
        signinNameValue !== "" &&
        signinEmailValue !== "" &&
        signinPasswordValue !== "" &&
        signinConfirmPasswordValue !== ""
      ) {
        if (captcha === captchaValue) {
          const emailpattern =
            /^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
          const namePattern = /^([a-zA-Z\s]+)$/;
          const passwordPattern = /^(?=.*[a-z])(?=.*\d).{8,}$/i;
          if (!namePattern.test(signinNameValue)) {
            error.push("Please enter a valid full name");
            return(false)
          }
          if (!emailpattern.test(signinEmailValue)) {
            error.push("Please enter a valid email");
            return(false)
          }
          if (signinPasswordValue.length < 8) {
            error.push("The password must be more than 7 characters.");
            return(false)
          }
          if (!passwordPattern.test(signinPasswordValue)) {
            error.push("Password must be include both letters and numbers");
            return(false)
          }
          if (signinPasswordValue !== signinConfirmPasswordValue) {
            error.push("Passwords do not match");
            return(false)
          }
        }else{
          error.push("captcha invalid");
          return(false)
        }
      } else {
        error.push("Please fill in all the fields");
        return(false)
      }
      return(true)
      setErrorReport(error);
      console.log(errorReport);
    };
    validate();
    if(validate){
      const data = signin(signinNameValue, signinEmailValue, signinPasswordValue)
    }

    if (captcha === captchaValue.toLowerCase()) {
      //   const validateResult = validate();
      //   if (validateResult) {
      //     const result = await login(emailValue, passwordValue);
      //     if (result === "Data Matched") {
      //       dispatch({ type: "login", payload: emailValue });
      //       setEmailValue("");
      //       setPasswordValue("");
      //       setCaptchaValue("");
      //     } else {
      //       setErrorReport(result);
      //       setCaptchaValue("");
      //     }
      //   } else {
      //     setErrorReport("email or password is invalid");
      //   }
      // } else {
      //   setErrorReport("captcha invalid");
    }
    setCaptchaValue("");
    setCaptcha("");
  };

  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Signin</h2>
      {errorReport.map((error, index) => {
        return (
          <div style={{ color: "red" }} key={index}>
            {error}
          </div>
        );
      })}
      <div className="input-container">
        <input
          type="text"
          placeholder="fullname"
          onChange={signinNameChangeHandler}
          value={signinNameValue}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="email"
          onChange={signinEmailChangeHandler}
          value={signinEmailValue}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="password"
          onChange={signinPasswordChangeHandler}
          value={signinPasswordValue}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="confirm password"
          onChange={signinConfirmPasswordChangeHandler}
          value={signinConfirmPasswordValue}
        />
      </div>
      <Captcha oncaptchaValue={setCaptchaValue} onCaptcha={setCaptcha} />
      <Button btnType="green" clicked={signinHandler}>
        Signin
      </Button>
      {/* <div>
        Don't have an account?{" "}
        <span onClick={props.showLoginHandler}>Sign in</span>
      </div> */}
      {/* <Captcha /> */}
    </>
  );
};

export default Signin;
