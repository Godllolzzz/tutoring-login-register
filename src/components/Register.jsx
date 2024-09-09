import React, { useState } from "react";
import loginImage from "../assets/tutroing.png";
import userImg from "../assets/user.png";
import lockImg from "../assets/lock.png";
import mailImg from "../assets/envelope.png";
import lock2Img from "../assets/lock2.png";
import facebookLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import twitterLogo from "../assets/twitter.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    setIsFullNameValid(value.trim().length > 0);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(value.includes("@"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.trim().length > 0);
    console.log(isPasswordValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(value === password);
  };

  const registerHandler = () => {
    if (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    } else {
      console.log("Validation failed. Please check your inputs.");
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#EDECF2]">
      <div className="absolute w-[100vw] bg-gradient-to-r from-[#e4f3fc] to-[#084699] h-[100vh]"></div>
      <div className="bg-[#ffffff] w-[55rem] h-[30rem] z-10 flex flex-row rounded-lg p-4">
        <div className="flex flex-[4] flex-col items-center">
          <img className="h-[80%] mt-[10%]" src={loginImage} alt="Login" />
          <div className="flex flex-row gap-2">
            <div className="text-gray-500 font-light text-sm">
              Already have an account?
            </div>
            <div className="cursor-pointer text-blue-500 text-sm">
              <Link to="/">Login</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-[4] flex-col items-center border-l-2">
          <div className="text-3xl p-8 font-bold items-center">Sign Up</div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-row gap-4 border-b-2 pb-1">
              <img src={userImg} className="w-4 h-4" alt="User" />
              <input
                type="text"
                placeholder="Your Full Name"
                className={`placeholder-gray-400 text-sm cursor-text ""
                }`}
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="flex flex-row gap-4 border-b-2 pb-1">
              <img src={mailImg} className="w-4 h-4" alt="Email" />
              <input
                type="text"
                placeholder="Your Email"
                className={`placeholder-gray-400 text-sm cursor-text`}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-row gap-4 border-b-2 pb-1">
              <img src={lock2Img} className="w-4 h-4" alt="Password" />
              <input
                type="password"
                placeholder="Enter Password"
                className={`placeholder-gray-400 text-sm cursor-text`}
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex flex-row gap-4 border-b-2 pb-1">
              <img src={lockImg} className="w-4 h-4" alt="Confirm Password" />
              <input
                type="password"
                placeholder="Confirm Password"
                className={`placeholder-gray-400 text-sm cursor-text`}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} 
              />
            </div>
            {!isConfirmPasswordValid && (
              <p className="text-red-500 text-xs">*Passwords do not match</p>
            )}
            {(!isFullNameValid || !isPasswordValid || !isEmailValid) && (
              <p className="text-red-500 text-sm -m-3">
                *Please enter the valid details.
              </p>
            )}
            <div className="flex justify-center mt-2">
              <div
                className="bg-[#094971] w-40 text-xs text-white text-center py-2 rounded-3xl cursor-pointer hover:bg-[#0b5c8f] shadow-md shadow-[#094971] active:bg-[#094971]"
                onClick={registerHandler} 
              >
                Register
              </div>
            </div>
            <div className="text-sm text-gray-400">——————— or ———————</div>
            <div className="flex flex-row gap-6 mt-2 justify-center">
              <img
                src={googleLogo}
                className="w-8 h-8 mt-2 cursor-pointer"
                alt="Google"
              />
              <img
                src={facebookLogo}
                className="w-8 h-8 mt-2 ml-2 cursor-pointer"
                alt="Facebook"
              />
              <img
                src={twitterLogo}
                className="w-12 h-12 cursor-pointer"
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
