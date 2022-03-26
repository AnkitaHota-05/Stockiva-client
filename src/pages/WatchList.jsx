import React from 'react'

import { SearchRounded } from '@mui/icons-material'

function WatchList() {
  return (
      <div className="base-card w-50 w-sm-100 m-3">
          <h5>My Watch List</h5>
          <div className="d-flex align-items-center border p-3 pt-0 pb-0">
              <SearchRounded />
              <input type="text" className="base-input" />
          </div>
          <div className="row">
              <div className="col-4">
                  <b>NAME</b>
              </div>
              <div className="col-3">
                  <b>PRICE</b>
              </div>
              <div className="col-3">
                  <b>24H CHANGE</b>
              </div>
              <div className="col-4">
                  TATAMOTORS
              </div>
              <div className="col-3">432.40</div>
              <div className="col-3 text-danger">-0.80 (0.18%)</div>
          </div>
      </div>
  )
}

export default WatchList