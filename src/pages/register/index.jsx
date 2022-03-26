// import React from 'react'

// import {PhoneCard, BankDetails, OTP, PersonalDetails} from './components'

// import {
//   Routes,
//   Route,
// } from "react-router-dom";

// function Register() {
//   return (
//     <Routes>
//       <Route exact path="" element={<PhoneCard />} />
//       <Route exact path="/register/otp" element={<OTP />} />
//       <Route exact path="personaldetails" element={<PersonalDetails />} />
//       <Route exact path="bankdetails" element={<BankDetails />} />
//     </Routes>
//     /* <Phone /> */
//     /* <OTP /> */
//     /* <PersonalDetails /> */
//     /* <BankDetails /> */
//   )
// }

// export default Register


import PhoneCard from './components/PhoneCard' 
import OTP from './components/OTP';
import BankDetails from './components/BankDetails';
import PersonalDetails from './components/PersonalDetails';

export {
    PhoneCard,
    OTP,
    BankDetails,
    PersonalDetails
};