import React from "react";
import "./signup.css";
import {useState} from "react";
export default function Signup(props) {
    const [Username,setUsername]=useState("");
    const [Countryname,setCountryname]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const UsernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const CountrynameHandler = (event) => {
        setCountryname(event.target.value);
    }
    const EmailHandler = (event) => {
        setEmail(event.target.value);
    }
    const PasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const SignupHandler = () => {
        if(Username!=="" && Countryname!=="" && Email!=="" && Password!=="")
        props.sign(true);
    }
  return (
        <div className="loginright">
          <div className="loginbox">
            <input placeholder="username" type="text" className="loginInput" onChange={UsernameHandler} />
            <input placeholder="country" type="text" className="loginInput" onChange={CountrynameHandler} />
            <input placeholder="Email" type="email" className="loginInput"  onChange={EmailHandler}/>
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              onChange={PasswordHandler}
            />
            <button  className="loginbutton" onClick={SignupHandler}>
              Sign In
            </button>
          </div>
        </div>
  );
}
