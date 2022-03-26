import React from 'react'

import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

function PersonalDetails() {
  return (
    <div className="base-card m-2">
      <h2 className='text-base text-left'>Sir / Ma'am </h2>
      <h4 className='text-base text-left'>Enter Your Personal Details</h4>
      <p className="text-fade text-left">
        Please provide your (correct) details <br />
        This information will be verified.
      </p>
      <div className="d-flex align-items-center" style={{ maxWidth: '300px' }}>
        <input type="text" className="base-input me-2" placeholder='First Name' />
        <input type="text" className="base-input" placeholder='Last Name' />
      </div>
      <input type="text" className="base-input form-control" placeholder='Email ID' />
      <input type="text" className="base-input form-control" placeholder='PAN Number' />
      <input type="text" className="base-input form-control" placeholder='Password' />
      <input type="text" className="base-input form-control mb-5" placeholder='Confirm Password' />
      <div className="text-left">
        <Link to="/register/bankdetails" className='me-3'>
          <Button className='base-btn'>Save</Button>
        </Link>
        <Link to="/register/bankdetails">
          <Button className='ghost-btn'>Exit</Button>
        </Link>
      </div>
    </div>
  )
}

export default PersonalDetails