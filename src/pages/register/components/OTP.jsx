import React from 'react'

import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

function OTP() {
  return (
    <div className="base-card">
      <h6>Enter OTP</h6>
      <input type="text" className="base-input form-control" placeholder='6 digit OTP'/>
      <Link to="/register/personaldetails">
        <Button className='base-btn'>Confirm OPT</Button>
      </Link>
    </div>
  )
}

export default OTP