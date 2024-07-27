import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar() {

    // TODO: add username in header
    return (
        <header>
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        
                        <button type="button" className="btn btn-warning col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">Add New Workorder</button>
                        
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" class="form-control form-control-dark" placeholder="Search work orders by ID..." aria-label="Search"/>
                        </form>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                                    <i className="bi bi-speedometer2 fs-4"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>                            
                                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                                    <i className="bi bi-table fs-4"></i>
                                    <span>My Work Orders</span>
                                </a>
                            </li>
                            <li className='dropdown nav-link text-white d-flex flex-column align-items-start'>
                                <a className="d-flex align-items-center" href="#" id="dropdownUser2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle fs-4"></i>
                                    <i className="bi bi-caret-down-fill ms-1 fs-6"></i>
                                </a>
                                <span>User</span>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                    <li><a className="dropdown-item" href="#">New Work Order...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );    

}

export default Navbar;
