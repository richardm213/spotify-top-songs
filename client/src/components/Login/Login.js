import React from "react";

const Login = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:8888/login";
  };
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
