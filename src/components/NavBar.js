import React from 'react';

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-lg bg-secondary '>
            <div className='container'>
                <a href='../App.js' className='navbar-brand text-decoration-none text-light'>Expense Tracker</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav text-light me-0 mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a href='./Status.js' className='nav-link active text-light'>Dashboard</a>
                        </li>
                        <li className='nav-item'>
                            <a href='./HistoryList.js' className='nav-link text-light'>Add Expense</a>
                        </li>
                        <li className='nav-item'>
                            <a href='./TransactionInput.js' className='nav-link text-light'>History</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;