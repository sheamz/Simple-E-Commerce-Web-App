import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaChevronDown, FaHome, FaShoppingBag, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/logoWhite.jpg'; 

const NavBarHome = () => {
    const navigate = useNavigate(); 
    const userName = "Shamiah Mendoza"; 
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); 

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        setShowLogoutConfirm(true); 
    };

    const confirmLogout = () => {
        console.log('User logged out');
        setShowLogoutConfirm(false); 
        navigate('/'); 
    };

    const cancelLogout = () => {
        setShowLogoutConfirm(false); 
    };

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
                                placeholder="Search here..."
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
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3" style={{ cursor: 'pointer' }}>
                        <div
                            className="d-flex align-items-center"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/cart')}
                        >
                            <FaShoppingCart size={20} style={{ color: '#8d27ae' }} />
                            <span className="ms-2 fw-bold" style={{ color: '#8d27ae' }}>Cart</span>
                        </div>

                        <div className="position-relative" style={{ cursor: 'pointer' }}>
                            <div
                                className="d-flex align-items-center"
                                style={{ cursor: 'pointer' }}
                                onClick={toggleDropdown}
                            >
                                <span className="fw-bold" style={{ color: '#8d27ae' }}>{userName}</span>
                                <FaChevronDown size={16} style={{ color: '#8d27ae', marginLeft: '5px' }} />
                            </div>
                            {dropdownOpen && (
                                <div
                                    className="position-absolute shadow rounded p-2"
                                    style={{
                                        top: '100%',
                                        right: 0,
                                        zIndex: 1000,
                                        minWidth: '150px',
                                        backgroundColor: '#9c8af1',
                                        border: '1px solid #ddd',
                                    }}
                                >
                                    <div
                                        className="dropdown-item py-2 px-3"
                                        style={{ cursor: 'pointer', color: 'white' }}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Profile Setting
                                    </div>
                                    <div
                                        className="dropdown-item py-2 px-3"
                                        style={{ cursor: 'pointer', color: 'white' }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-12 d-flex flex-wrap justify-content-center py-2"
                        style={{ backgroundColor: '#8d27ae', gap: '10%' }}
                    >
                        <span
                            className="d-flex align-items-center text-white fw-bold"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/home')}
                        >
                            <FaHome className="me-2" />
                            Home
                        </span>
                        <span
                            className="d-flex align-items-center text-white fw-bold"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/shop')}
                        >
                            <FaShoppingBag className="me-2" />
                            Shop
                        </span>
                        <span
                            className="d-flex align-items-center text-white fw-bold"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/add-product')}
                        >
                            <FaPlus className="me-2" />
                            Add Product
                        </span>
                    </div>
                </div>
            </div>

            {showLogoutConfirm && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1050,
                    }}
                >
                    <div
                        className="bg-white p-4 rounded shadow"
                        style={{ minWidth: '300px' }}
                    >
                        <h5 className="text-center mb-3">Are you sure you want to logout?</h5>
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-secondary"
                                onClick={cancelLogout}
                            >
                                No
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={confirmLogout}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {`
                .d-flex span:hover {
                    text-decoration: underline;
                }
                `}
            </style>
        </header>
    );
};

export default NavBarHome;