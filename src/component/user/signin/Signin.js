import { useContext, useState } from "react";
import Captcha from "../../ui/captcha/Captcha";
import Button from "../../ui/button/button";
import UseSignin from "../../../hooks/useSignin/useSignin";
import { AuthContext } from "../../../context/auth/authContext";

const Signin = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorReport, setErrorReport] = useState([]);
  const [signinNameValue, setSigninNameValue] = useState("");
  const [signinEmailValue, setSigninEmailValue] = useState("");
  const [signinPasswordValue, setSigninPasswordValue] = useState("");
  const [signinConfirmPasswordValue, setSigninConfirmPasswordValue] = useState("");
  const {signin} = UseSignin()
  const [captchaChange, setCaptchaChange] = useState(false)
  const {dispatch} = useContext(AuthContext)
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
  const signinHandler = async () => {
   setCaptchaChange(!captchaChange)
    setErrorReport([]);
    const error = [];
    const validate = () => {
      if (signinNameValue !== "" && signinEmailValue !== "" && signinPasswordValue !== "" && signinConfirmPasswordValue !== "") {
        if (captcha === captchaValue) {
          const emailpattern =
            /^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
          const namePattern = /^([a-zA-Z\s]+)$/;
          const passwordPattern = /^(?=.*[a-z])(?=.*\d).{8,}$/i;
          if (!namePattern.test(signinNameValue)) {
            error.push("Please enter a valid full name");
          }
          if (!emailpattern.test(signinEmailValue)) {
            error.push("Please enter a valid email");
          }
          if (signinPasswordValue.length < 8) {
            error.push("The password must be more than 7 characters.");
          }
          if (!passwordPattern.test(signinPasswordValue)) {
            error.push("Password must be include both letters and numbers");
          }
          if (signinPasswordValue !== signinConfirmPasswordValue) {
            error.push("Passwords do not match");
            setErrorReport(error);
            return(false)
          }
        }else{
          error.push("captcha invalid");
          setErrorReport(error);
          return(false)
        }
      } else {
        error.push("Please fill in all the fields");
        setErrorReport(error);
        return(false)
      }
      return(true)
      
    };
    validate();
    if(validate){
      const data = await signin(signinNameValue, signinEmailValue, signinPasswordValue)
      if (data === "information was successfully added"){
        dispatch({ type: "login", payload: signinEmailValue });
        setErrorReport([])
        setSigninNameValue("")
        setSigninEmailValue("")
        setSigninPasswordValue("")
        setSigninConfirmPasswordValue("")
        
      }
    }
    if (captcha === captchaValue.toLowerCase()) {
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
      <Captcha oncaptchaValue={setCaptchaValue} onCaptcha={setCaptcha} captchaChange={captchaChange} />
      <Button btnType="green" clicked={signinHandler}>
        Signin
      </Button>
    </>
  );
};

export default Signin;
