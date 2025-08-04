import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Login.css"



function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <h1>Welcome to <span>SheCan</span> Foundation !!</h1>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
       <Link to={"/dashboard"}>
        <button type="submit">Login</button>
     </Link>
        <p className="forgot-password">Forgot your password?</p>
      </form>
    </div>
  );
}


export default Login;