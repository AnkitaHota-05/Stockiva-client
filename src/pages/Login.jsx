import React from 'react'

import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="base-card text-left">
      <h4>Hi Sagar</h4>
      <p className='mb-4'>Welcome back</p>
      <h6>Enter Your 6 Digit PIN</h6>
      <input type="text" className="base-input form-control mb-5" placeholder='6 digit OTP'/>
      <Link to="/register/personaldetails">
        <Button className='base-btn'>Log in</Button>
      </Link>
    </div>
  )
}

export default Login