import React, { useContext, useEffect, useState } from "react";
import Button from "../../button";
import "./SignIn.css";
import { AuthContext } from "../../../../../context/auth/authContext";

const SignIn = (props) => {
  const [cap1, setcap1] = useState();
  const [cap2, setcap2] = useState();
  const [cap3, setcap3] = useState();
  const [cap4, setcap4] = useState();
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();
  const [style4, setStyle4] = useState();
  const [captchaValue, setCaptchaValue] = useState("");
  const [errorReport, setErrorReport] = useState();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { dispatch } = useContext(AuthContext);
  const createCaptcha = () => {
    const sample = "abcdefghijklmnopqrstuvwxyz0123456789";
    setcap1(sample[Math.trunc(Math.random() * 36)]);
    setcap2(sample[Math.trunc(Math.random() * 36)]);
    setcap3(sample[Math.trunc(Math.random() * 36)]);
    setcap4(sample[Math.trunc(Math.random() * 36)]);
    setStyle1({
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255},${
        Math.random() * 255
      })`,
      transform: `rotate(${Math.random() * 90}deg)`,
    });
    setStyle2({
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255},${
        Math.random() * 255
      })`,
      transform: `rotate(${Math.random() * 90}deg)`,
    });
    setStyle3({
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255},${
        Math.random() * 255
      })`,
      transform: `rotate(${Math.random() * 90}deg)`,
    });
    setStyle4({
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255},${
        Math.random() * 255
      })`,
      transform: `rotate(${Math.random() * 90}deg)`,
    });
  };
  useEffect(() => {
    createCaptcha();
    setErrorReport("");
  }, [props.show]);
  const validate = () => {
    const emailpattern =
      /^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
    if (emailpattern.test(emailValue) && passwordValue.length > 7) {
      return true;
    } else {
      return false;
    }
  };
  const emailChangeHandler = (event) => {
    setEmailValue((event.target.value).trim());
  };
  const passwordChangeHandler = (event) => {
    setPasswordValue(event.target.value);
  };
  const captchaHandler = (event) => {
    setCaptchaValue(event.target.value);
  };
  const loginHandler = async () => {
    setErrorReport("");
    const captcha = `${cap1}${cap2}${cap3}${cap4}`;
    if (captcha === captchaValue.toLowerCase()) {
      const validateResult = validate();
      if (validateResult) {
        try {
          const res = await fetch("http://localhost/student/user_login.php", {
            method: "POST",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailValue,
              password: passwordValue,
            }),
          });
          const data = await res.json();
          if (data === "Data Matched") {
            dispatch({type:'login',payload: emailValue})
            setEmailValue("");
            setPasswordValue("");
            setCaptchaValue("");
          } else {
            setErrorReport(data);
            setCaptchaValue("");
          }
        } catch (error) {
          alert(error.message);
        }
      } else {
        setErrorReport("email or password is invalid");
      }
    } else {
      setErrorReport("captcha invalid");
    }
    createCaptcha();
    setCaptchaValue("");
  };

  return (
    <>
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
      <div className="captcha-conteiner">
        <div>
          <span style={style1}>{cap1}</span>
          <span style={style2}>{cap2}</span>
          <span style={style3}>{cap3}</span>
          <span style={style4}>{cap4}</span>
        </div>
        <i className="fa-solid fa-arrows-rotate" onClick={createCaptcha}></i>
        <input
          type="text"
          placeholder="enter the captcha "
          onChange={captchaHandler}
          value={captchaValue}
        />
      </div>
      <Button btnType="green" clicked={loginHandler}>
        Login
      </Button>
    </>
  );
};
export default React.memo(SignIn);
