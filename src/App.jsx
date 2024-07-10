import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
const App = () => {
  const [token,setToken] = useState('')
  return (
    
    <div>
      <BrowserRouter>
      <div>
        <ToastContainer />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path ='/profile' element ={<Profile token = {token}/>} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;