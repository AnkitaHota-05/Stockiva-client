import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="p-4 bg-main">
            <div className="container row d-flex align-items-center m-auto bg-main footer">
                <div className="col-lg-6 col-12">
                    <h4>STOCKIVA</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus cum tempore odit amet at quis maiores hic cumque, praesentium corrupti nesciunt vitae facilis, voluptate maxime in illo architecto rerum.</p>
                    <div className="d-flex mb-4 mb-lg-0">
                        <input type="text" className="form-input p-2" placeholder='your email goes here' />
                        <button className="btn btn-success">SUBSCRIBE !</button>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="row w-75">
                        <h6 className="col-2">Phone</h6>
                        <div className="col-9 color-main-b">+91 9668376407</div>
                    </div>
                    <div className="row w-75">
                        <h6 className="col-2">Phone</h6>
                        <div className="col-9 color-main-b">+91 9668376407</div>
                    </div>
                    <div className="row w-75">
                        <h6 className="col-2">Phone</h6>
                        <div className="col-9 color-main-b">+91 9668376407</div>
                    </div>
                    <div className="row w-75">
                        <div className="col-lg-2 col-0"></div>
                        <div className="col-8">
                            <div className="d-flex align-items-center justify-content-between">
                                <TwitterIcon className='color-main-b' />
                                <FacebookIcon className='color-main-b' />
                                <InstagramIcon className='color-main-b' />
                                <LinkedInIcon className='color-main-b'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer