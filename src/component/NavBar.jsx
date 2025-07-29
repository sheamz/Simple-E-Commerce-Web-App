import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/logoWhite.jpg'; 

const Header = () => {
    const navigate = useNavigate(); 

    return (
        <header>
            <div className="container-fluid py-2 py-md-3 border-bottom">
                <div className="row align-items-center">
                    {/* Logo Section - Optimized for mobile */}
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
                        <img
                            src={logoWhite}
                            alt="Book Nook Logo"
                            style={{ width: '60px', height: '60px', marginRight: '8px' }}
                            className="d-block d-md-none"
                        />
                        <img
                            src={logoWhite}
                            alt="Book Nook Logo"
                            style={{ width: '80px', height: '80px', marginRight: '10px' }}
                            className="d-none d-md-block"
                        />
                        <div
                            className="fw-bold text-uppercase"
                            style={{ 
                                color: '#8d27ae', 
                                fontSize: 'clamp(20px, 4vw, 30px)', 
                                letterSpacing: '1px' 
                            }}
                        >
                            BOOK NOOK
                        </div>
                    </div>
                    
                    {/* Search Section - Full width on mobile */}
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search books..."
                                style={{ 
                                    outlineColor: '#8d27ae',
                                    fontSize: '14px'
                                }}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                style={{ 
                                    borderColor: '#8d27ae',
                                    color: '#8d27ae',
                                    minWidth: '44px',
                                    minHeight: '44px'
                                }}
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    
                    {/* Buttons Section - Stacked on small mobile, side by side on larger screens */}
                    <div className="col-12 col-md-4 d-flex flex-column flex-sm-row justify-content-center justify-content-md-end gap-2">
                        <button
                            className="btn"
                            style={{ 
                                border: '1px solid #8d27ae', 
                                color: '#8d27ae',
                                fontSize: '14px',
                                minHeight: '44px',
                                flex: '1',
                                maxWidth: '160px'
                            }}
                            onClick={() => navigate('/login')} 
                        >
                            Sign In
                        </button>
                        <button
                            className="btn"
                            style={{ 
                                backgroundColor: '#8d27ae', 
                                color: '#ffffff',
                                fontSize: '14px',
                                minHeight: '44px',
                                flex: '1',
                                maxWidth: '160px'
                            }}
                            onClick={() => navigate('/register')} 
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;