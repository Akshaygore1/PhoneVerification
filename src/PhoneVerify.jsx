import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Phone.css";
import img from "./assets/bg2.png";

const PhoneVerify = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  // const navigate = useNavigate();

  const handleGenerateOTP = () => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    setOTP(OTP);
    setShowOTP(true);

    setTimeout(() => {
      setShowOTP(false);
    }, 10000);

    // navigate("/verify", { state: OTP });
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value.replace(/\D/g, ""));
  };

  const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

  const handleVerifyClick = () => {
    if (isPhoneNumberValid) {
      handleGenerateOTP();
      setPhoneNumber("");
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  // console.log("otp ===", OTP);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <img className="img" src={img} alt="" />
        <h1>Verify Your Phone Number</h1>

        <label htmlFor="phone-number-input">Enter your phone number : </label>
        <br />
        <input
          type="tel"
          className="input"
          id="phone-number-input"
          name="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {phoneNumber && !isPhoneNumberValid && (
          <p style={{ color: "red", fontWeight: "800px" }}>
            Please enter a valid 10-digit phone number
          </p>
        )}
        <br />

        <button onClick={handleVerifyClick} style={{ width: "100px" }}>
          Get OTP
        </button>
        {showOTP && <h1>{OTP}</h1>}
        {showOTP && (
          <button
            onClick={() =>
              navigator.clipboard.writeText(alert("Copied to clipboard!", OTP))
            }
          >
            Copy
          </button>
        )}
      </div>
    </>
  );
};

export default PhoneVerify;
