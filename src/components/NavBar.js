import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-lg bg-secondary '>
            <div className='container'>
                <Link to='/' className='navbar-brand text-light'>Expense Tracker</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav text-light me-0 mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/' className='text-light nav-link'>Dashboard</Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to="/add_expense" className='text-light nav-link'>Add Expense</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/history' className='text-light nav-link'>History</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;