import React from "react";
import "./style.css";

const Login = () => {
  const handleClick = () => {
    window.location.href = process.env.REACT_APP_SERVER_BASE_URL + "/login";
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
