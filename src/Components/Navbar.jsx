import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger p-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <i class="bi bi-cart-check"></i> Ecommerce</a>
                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-5 fs-5">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link text-light active" aria-current="page"><i className='bi bi-house-door'> </i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link text-light active" ><i className="bi bi-question-circle"></i> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/products'} className="nav-link text-light active"><i className="bi bi-basket-fill"></i> products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link text-light active"><i className="bi bi-phone-fill"></i> Contact </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar