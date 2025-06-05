import "./Captcha.css";
import React, { useState, useEffect } from "react";

const Captcha = (props) => {
  const [captchaArray, setCaptchaArray] = useState(["", "", "", ""]);
  const [styles, setStyles] = useState([{}, {}, {}, {}]);
  const [captchaValue, setCaptchaValue] = useState("");
  const createCaptcha = () => {
    const sample = "abcdefghijklmnopqrstuvwxyz0123456789";
    const newCaptchaArray = captchaArray.map(
      () => sample[Math.trunc(Math.random() * sample.length)]
    );

    const newStyles = newCaptchaArray.map(() => ({
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      transform: `rotate(${Math.random() * 90}deg)`,
    }));
    setCaptchaArray(newCaptchaArray);
    setStyles(newStyles);
    props.onCaptcha(newCaptchaArray.join(""));
  };

  const captchaHandler = (event) => {
    props.oncaptchaValue(event.target.value);
    setCaptchaValue(event.target.value);
  };
  useEffect(() => {
    createCaptcha();
  }, [props.captchaChange]);
  return (
    <div className="captcha-conteiner">
      <div>
        {captchaArray.map((elem,index)=>{
            return <span key={index} style={styles[index]}>{elem}</span>
        })}
      </div>
      <i className="fa-solid fa-arrows-rotate" onClick={createCaptcha}></i>
      <input
        type="text"
        placeholder="enter the captcha "
        onChange={captchaHandler}
        value={captchaValue}
      />
    </div>
  );
};

export default Captcha;


