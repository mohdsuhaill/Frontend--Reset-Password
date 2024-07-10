import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, email, password,role };
    await axios
      .post("http://localhost:5000/api/user/register-user", payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
       toast.error(error.response.data.message);
      });
    
      setEmail('')
      setPassword('')
      setUsername('')
      setRole('')
      
    
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-gradient'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-center">
            <h3>User Registration</h3>
          </legend>
          <p>
            <label htmlFor="username"><strong>User Name:</strong> </label>
            <input
            className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="email"><strong>Email:</strong></label>
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
            <label htmlFor="password"> <strong>Password:</strong></label>
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
          <p>
            <label htmlFor="password"> <strong>Role:</strong></label>
            <input
             className="form-control"
              type="text"
              name="role"
              id="role"
              placeholder="Enter user role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </p>
          <button type="submit" className="btn btn-primary">Register</button>
          <br />
      <button className="btn btn-info m-3"><Link to='/'>Back</Link></button>
      <button className="btn btn-success m-3"><Link to='/login'>Login</Link></button>
        </fieldset>
      </form>

    </div>
    </div>
  );
};

export default Register;