import React from 'react'

import { Phone } from '@mui/icons-material'
import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

function PhoneCard() {
  return (
      <div className="base-card">
          <h6>Sign Up For a New Account</h6>
          <div className="d-flex align-items-center">
              <Phone />
              <input type="text" className="base-input" />
          </div>
          <Link to="/register/otp">
            <Button className='base-btn'>Get OPT</Button>
          </Link>
      </div>
  )
}

export default PhoneCard