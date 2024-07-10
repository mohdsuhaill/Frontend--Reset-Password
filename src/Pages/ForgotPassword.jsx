import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email,setEmail] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response=await axios.post("http://localhost:5000/api/user/forgot-password",{email})
        if(response.data.status===200){
            toast.success(response.data.message)
            navigate("/login")
        } 
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
    }
  }


    return (
        <div className='d-flex justify-content-center align-items-center bg-gradient'>
            <div className='bg-white p-3 rounded w-28'>
                 <h4>Forgot password</h4>
                 <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                         <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                         <input type="email" className="form-control rounded-0" id="email" placeholder='enter your email'   onChange={(e)=>setEmail(e.target.value)}/>
                     </div>
                     <button type="submit" className="btn btn-success w-100 rounded-0">Send</button>
                 </form>
            </div>
            
        </div>
    );
};

export default ForgotPassword;