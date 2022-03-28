import React from 'react'

import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

function BankDetails() {
  return (
    <div className="base-card m-2">
      <h2 className='text-base text-left'>Hey, </h2>
      <h4 className='text-base text-left'>Enter Your Bank Details</h4>
      <p className="text-fade text-left">
        We will transfer a small amount to your bank account to verify.
      </p>
      <input type="text" className="base-input form-control" placeholder='Account holder name *' />
      <input type="text" className="base-input form-control" placeholder='IFSC Code *' />
      <input type="text" className="base-input form-control" placeholder='Password' />
      <input type="text" className="base-input form-control" placeholder='Bank Account Number *' />
      <input type="text" className="base-input form-control mb-5" placeholder='Re-Enter Bank Account Number *' />
      <div className="text-left">
        <Link to="/login" className='me-3'>
          <Button className='base-btn'>Save</Button>
        </Link>
        <Link to="/register/logout">
          <Button className='ghost-btn'>Exit</Button>
        </Link>
      </div>
    </div>
  )
}

export default BankDetails