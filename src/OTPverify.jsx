import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/OTP.css";

const OTPVerify = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // const location = useLocation();
  // const OTP = location.state.OTP;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    const key = event.key;

    // Move focus to the previous input on backspace key press
    if (key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    }

    // Move focus to the previous or next input on arrow key press
    if (key === "ArrowLeft" && index > 0) {
      event.target.previousSibling.focus();
    } else if (key === "ArrowRight" && index < 5) {
      event.target.nextSibling.focus();
    }
  };

  // console.log("zzzzzzzzz", OTP);

  return (
    <>
      <div className="row">
        {/* <h1>{OTP}</h1> */}
        <div className="wrapper">
          <h2>Verify your identity</h2>
          <p>OTP has been sent to mobile number 889933XXXX</p>

          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="password"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            <button
              className="btn btn-secondary mr-2"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default OTPVerify;
