import React from "react";
import "./style.css";

const Login = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:8888/login";
  };
  return (
    <div id="login">
      <button id="" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
