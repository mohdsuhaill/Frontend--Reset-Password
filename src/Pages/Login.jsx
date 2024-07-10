import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("http://localhost:5000/api/user/login-user", payload)
      .then((res) => {
       toast.success(res.data.message);
        setToken(res.data.token);
        navigate("/profile")
})

      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail('')
    setPassword('')
  
  };
  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center bg-gradient">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-center">
            <strong>User Login</strong>
          </legend>
          <p>
            <label htmlFor="email"><strong> Email: </strong></label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password"><strong> Password:</strong></label>
            <input
             className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <button className="btn btn-primary" type="submit">Login</button>
          <br />
      <button className="btn btn-info m-3" >
        <Link to="/">Back</Link>
      </button>
      <button  className="btn btn-success m-3">
        <Link to="/forgot-password">Forgot Password  ?</Link>
      </button>
        </fieldset>
      </form>

    </div>
    </div>
  );
};

export default Login;