import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/logoWhite.jpg'; 

const Header = () => {
    const navigate = useNavigate(); 

    return (
        <header>
            <div className="container-fluid py-3 border-bottom">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
                        <img
                            src={logoWhite}
                            alt="Book Nook Logo"
                            style={{ width: '80px', height: '80px', marginRight: '10px' }}
                        />
                        <div
                            className="fw-bold text-uppercase"
                            style={{ color: '#8d27ae', fontSize: '30px', letterSpacing: '1px' }}
                        >
                            BOOK NOOK
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Fully Booked"
                                style={{ outlineColor: '#8d27ae' }}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                style={{ borderColor: '#8d27ae' }}
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3">
                        <button
                            className="btn"
                            style={{ border: '1px solid #8d27ae', color: '#8d27ae' }}
                            onClick={() => navigate('/login')} 
                        >
                            Sign In
                        </button>
                        <button
                            className="btn"
                            style={{ backgroundColor: '#8d27ae', color: '#ffffff' }}
                            onClick={() => navigate('/register')} 
                        >
                            Create an Account
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;