import React, { useState } from "react";
import loginImage from "../assets/tutroing.png";
import lockImg from "../assets/lock.png";
import mailImg from "../assets/envelope.png";
import facebookLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim().length == 0 || !e.target.value.includes("@")) {
      setIsEmailOk(false);
    } else setIsEmailOk(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim().length == 0) {
      setIsPasswordOk(false);
    } else setIsPasswordOk(true);
  };

  const loginHandler = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    if (email.trim().length == 0 || !email.includes("@")) {
      setIsEmailOk(false);
      return;
    }
    if (password.trim().length == 0) {
      setIsPasswordOk(false);
      return;
    }
    if (isEmailOk && isPasswordOk) navigate("home");
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#EDECF2]">
      <div className="absolute w-[100vw] bg-gradient-to-r from-[#e4f3fc] to-[#084699] h-[100vh]"></div>
      <div className="bg-[#ffffff] w-[55rem] h-[30rem] z-10 flex flex-row rounded-lg p-4">
        <div className="flex flex-[4] flex-col items-center">
          <img className="h-[80%] mt-[10%]" src={loginImage} alt="Login" />
          <div className="flex flex-row gap-2">
            <div className="text-gray-500 font-light text-sm">
              Doesn't have an account
            </div>
            <div className="cursor-pointer text-blue-500 text-sm">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-[4] flex-col items-center border-l-2">
          <div className="text-3xl p-8 font-bold items-center">Login</div>
          <div className="flex flex-col justify-center gap-6 items-center">
            <div className="flex flex-row gap-4 border-b-2 pb-2">
              <img src={mailImg} className="w-4 h-4" alt="Mail" />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="placeholder-gray-400 text-sm cursor-text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {!isEmailOk && (
              <p className="text-red-500 text-sm -m-5">
                *Please enter the valid email.
              </p>
            )}
            <div className="flex flex-row gap-4 border-b-2 pb-2">
              <img src={lockImg} className="w-4 h-4" alt="Lock" />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="placeholder-gray-400 text-sm cursor-text"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {!isPasswordOk && (
              <p className="text-red-500 text-sm -m-5">
                *Password can't be empty..
              </p>
            )}
            <div className="flex justify-center">
              <div
                className="bg-[#094971] w-40 text-xs text-white text-center py-2 rounded-3xl cursor-pointer hover:bg-[#0b5c8f] shadow-md shadow-[#094971] active:bg-[#094971]"
                onClick={loginHandler}
              >
                Login
              </div>
            </div>
            <div className="text-sm text-gray-400">——————— or ———————</div>
            <div className="h-8 cursor-pointer flex flex-row gap-4 border-[#4889F4] w-56 border-2 p-4 rounded-3xl justify-center items-center">
              <img src={googleLogo} className="w-6 h-6" alt="Google" />
              <div className="text-sm text-[#4889F4]">Login with Google</div>
            </div>
            <div className="h-8 cursor-pointer flex flex-row gap-4 border-[#415E9B] w-56 border-2 p-4 rounded-3xl justify-center items-center">
              <img src={facebookLogo} className="w-6 h-6" alt="Facebook" />
              <div className="text-sm text-[#415E9B]">Login with Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
