import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';
import Atom from '../assets/atomic.jpg';
import Subtle from '../assets/subtle.jpg';

const YourOrders = () => {
    const [currentOrders, setCurrentOrders] = useState([
        {
            id: 1,
            title: 'Atomic Habits',
            price: '₱300',
            status: 'Processing',
            image: Atom,
        },
        {
            id: 2,
            title: 'The Subtle Art of Not Giving a F*ck',
            price: '₱350',
            status: 'In Transit',
            image: Subtle,
        },
    ]);

    const markAsShipped = (orderId) => {
        setCurrentOrders(currentOrders.filter((order) => order.id !== orderId));
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Your Orders</h1>
                <div className="mb-4">
                    <h3 style={{ color: 'purple' }}>Order Summary</h3>
                    <p style={{ color: 'purple' }}><strong>Total Current Orders:</strong> {currentOrders.length}</p>
                    <Link to="/past-orders" className="btn btn-link text-decoration-none d-flex align-items-center" style={{ color: 'purple' }}>
                        View Past Orders <FaArrowRight className="ms-2" style={{ color: 'purple' }} />
                    </Link>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <h3>Current Orders</h3>
                    </div>
                    <div className="card-body">
                        {currentOrders.length > 0 ? (
                            <ul className="list-group list-group-flush">
                                {currentOrders.map((order) => (
                                    <li key={order.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={order.image}
                                                alt={order.title}
                                                style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                                            />
                                            <div>
                                                <span className="fw-bold">{order.title}</span>
                                                <p className="text-muted mb-0">{order.price}</p>
                                                <p className="text-muted mb-0">{order.status}</p>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => markAsShipped(order.id)}
                                        >
                                            Mark as Shipped
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No current orders.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrders;