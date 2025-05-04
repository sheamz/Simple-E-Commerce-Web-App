import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';
import Convi from '../assets/convi.jpg';
import Better from '../assets/better.jpg';

const PastOrders = () => {
    const [pastOrders] = useState([
        {
            id: 3,
            title: 'Convenience Store Woman',
            price: 280, 
            status: 'Delivered',
            image: Convi,
        },
        {
            id: 4,
            title: 'Better Than the Movies',
            price: 320, 
            status: 'Delivered',
            image: Better,
        },
    ]);

    const totalIncome = pastOrders.reduce((sum, order) => sum + order.price, 0);

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Past Orders</h1>

                <div
                    className="p-3 mb-4"
                    style={{
                        backgroundColor: '#f3e5f5', 
                        borderRadius: '8px',
                    }}
                >
                    <h5 className="mb-2">Summary</h5>
                    <p className="mb-1"><strong>Total Past Orders:</strong> {pastOrders.length}</p>
                    <p className="mb-0"><strong>Total Income:</strong> ₱{totalIncome}</p>
                </div>
                <div className="mb-4">
                    <Link to="/your-orders" className="btn btn-link text-decoration-none d-flex align-items-center" style={{ color: 'purple' }}>
                        <FaArrowLeft className="me-2" /> Back
                    </Link>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <h3>Past Orders</h3>
                    </div>
                    <div className="card-body">
                        {pastOrders.length > 0 ? (
                            <ul className="list-group list-group-flush"> 
                                {pastOrders.map((order) => (
                                    <li key={order.id} className="list-group-item d-flex align-items-center">
                                        <img
                                            src={order.image}
                                            alt={order.title}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                                        />
                                        <div>
                                            <span className="fw-bold">{order.title}</span>
                                            <p className="text-muted mb-0">₱{order.price}</p>
                                            <p className="text-muted mb-0">{order.status}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No past orders.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastOrders;