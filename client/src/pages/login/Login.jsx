import React from "react";
import Header from "../../components/header/Header"; 
import './Login.css'

function Login() {
  return (
    <div className="login">
      <Header />
      <div className="l-form">
        <form action="" method="post">
          <input type="text" placeholder="Email / Mobile no" />
          <input type="text" placeholder="passsword" />
          <button type="submit">Login</button>
          <h3>you have no account</h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
