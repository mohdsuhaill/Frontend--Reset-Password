import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ResetPassword = () => {
   const [password,setPassword] = useState()
   const navigate = useNavigate()
   const {id,token}=useParams()

 const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`http://localhost:5000/api/user/reset-password/${id}/${token}`,{password})

        navigate("/login")
    }
     catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
    }
    
 }

    return (
       <div className='d-flex justify-content-center align-items-center bg-gradient'>
            <div className='bg-white p-3 rounded w-28'>
                 <h4>Reset password</h4>
                 <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                         <label htmlFor="password" className="form-label"><strong>New Password</strong></label>
                         <input type="password" name="password"  className="form-control rounded-0" id="password" placeholder='enter your password'   onChange={(e)=>setPassword(e.target.value)}/>
                     </div>
                     <button type="submit" className="btn btn-success w-100 rounded-0">Update</button>
                 </form>
            </div>
            
        </div>
    );
};

export default ResetPassword;