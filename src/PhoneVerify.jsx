import React, { useState } from "react";

const PhoneVerify = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");

  const handleGenerateOTP = () => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    setOTP(OTP);
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

  console.log("otp ===", OTP);

  return (
    <>
      <div>
        <h1>Phone Verification</h1>
        <label htmlFor="phone-number-input">Enter your phone number : </label>
        <br />
        <input
          type="tel"
          id="phone-number-input"
          name="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <br />
        {phoneNumber && !isPhoneNumberValid && (
          <p style={{ color: "red" }}>
            Please enter a valid 10-digit phone number
          </p>
        )}
        <br />
        <button onClick={handleVerifyClick}>Get OTP</button>
        <h1>{OTP}</h1>
        <br />
      </div>
    </>
  );
};

export default PhoneVerify;
