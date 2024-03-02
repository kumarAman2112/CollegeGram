import "./login.css";
import { useState } from "react";
import Signup from "../signup/signup";
export default function Login(props) {
  const [isSignIn, setisSignIn] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const LoginHandler = () => {
    if (Email !== "" && Password !== "") {
      props.login(true);
    }
  };
  const AccountHandler = () => {
    setisSignIn(false);
  };
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Collegegram</h3>
          <span className="logindesc">
            Connect with friends and the world around you on Collegegram.
          </span>
        </div>
        {!isSignIn ? (
          <Signup sign={setisSignIn} />
        ) : (
          <div className="loginright">
            <div className="loginbox">
              <input
                placeholder="Email"
                type="email"
                className="loginInput"
                onChange={EmailHandler}
              />
              <input
                placeholder="Password"
                type="password"
                className="loginInput"
                onChange={PasswordHandler}
              />
              <button
                value="Submit"
                className="loginbutton"
                onClick={LoginHandler}
              >
                Log In
              </button>
              <span className="forgot">Forget Password?</span>
              <button className="newaccount" onClick={AccountHandler}>
                Create a New Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
