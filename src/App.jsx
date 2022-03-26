import './App.css';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import {PhoneCard, BankDetails, OTP, PersonalDetails} from './pages/register'
import Login from './pages/Login';
import WatchList from './pages/WatchList';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className="body d-flex align-ites-center justify-content-center">
        <Routes>
          <Route path="register">
            <Route exact path="" element={<PhoneCard />} />
            <Route exact path="/register/otp" element={<OTP />} />
            <Route exact path="personaldetails" element={<PersonalDetails />} />
            <Route exact path="bankdetails" element={<BankDetails />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="watchlist" element={<WatchList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
