import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneVerify from "./PhoneVerify";
import OTPverify from "./OTPverify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PhoneVerify />} />
          <Route exact path="/otp" element={<OTPverify />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
