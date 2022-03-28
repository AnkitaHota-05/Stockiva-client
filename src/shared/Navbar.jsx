import React from 'react';
import {
  Link
} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-2" href="#">STOCKIVA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-lg-auto me-lg-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/Funds' className="nav-link active" aria-current="page" href="#">Funds</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Prices' className="nav-link active" aria-current="page" href="#">Prices</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Buy' className="nav-link active" aria-current="page" href="#">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/watchlist' className="nav-link active" aria-current="page" href="#">Watch List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Portfolio' className="nav-link active" aria-current="page" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Transactions' className="nav-link active" aria-current="page" href="#">Transactions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/logout' className="nav-link text-success" aria-current="page" href="#">logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar