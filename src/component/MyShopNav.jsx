import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { FaTachometerAlt, FaList, FaClipboardList, FaCog } from 'react-icons/fa'; // Import relevant icons

const MyShopNav = () => {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <div className="container-fluid">
            <div className="row">
                <div
                    className="col-12 d-flex justify-content-center align-items-center py-2"
                    style={{ backgroundColor: '#CBC3E3', gap: '5%' }}
                >
                    <span
                        className="d-flex align-items-center text-white fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/seller-dashboard')}
                    >
                        <FaTachometerAlt className="me-2" />
                        Seller Dashboard
                    </span>
                    <span
                        className="d-flex align-items-center text-white fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/your-listing')}
                    >
                        <FaList className="me-2" />
                        Your Listing
                    </span>
                    <span
                        className="d-flex align-items-center text-white fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/your-orders')}
                    >
                        <FaClipboardList className="me-2" />
                        Your Orders
                    </span>
                    <span
                        className="d-flex align-items-center text-white fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/shop-setting')}
                    >
                        <FaCog className="me-2" />
                        Shop Setting
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyShopNav;