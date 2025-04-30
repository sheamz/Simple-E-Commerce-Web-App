import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';

const YourOrders = () => {
    // State for current and past orders
    const [currentOrders, setCurrentOrders] = useState([
        { id: 1, description: 'Order #1 - Processing', status: 'Processing' },
        { id: 2, description: 'Order #2 - In Transit', status: 'In Transit' },
    ]);

    const [pastOrders, setPastOrders] = useState([
        { id: 3, description: 'Order #3 - Delivered', status: 'Delivered' },
    ]);

    // Function to mark an order as fulfilled and shipped
    const markAsShipped = (orderId) => {
        const orderToShip = currentOrders.find((order) => order.id === orderId);
        if (orderToShip) {
            // Update the order status and move it to past orders
            orderToShip.status = 'Shipped';
            setPastOrders([...pastOrders, orderToShip]);
            setCurrentOrders(currentOrders.filter((order) => order.id !== orderId));
        }
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Your Orders</h1>

                {/* Totals */}
                <div className="mb-4">
                    <h3>Order Summary</h3>
                    <p><strong>Total Current Orders:</strong> {currentOrders.length}</p>
                    <p><strong>Total Past Orders:</strong> {pastOrders.length}</p>
                </div>

                {/* Current Orders */}
                <div className="card mb-4">
                    <div className="card-header">
                        <h3>Current Orders</h3>
                    </div>
                    <div className="card-body">
                        {currentOrders.length > 0 ? (
                            <ul className="list-group">
                                {currentOrders.map((order) => (
                                    <li key={order.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{order.description}</span>
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

                {/* Past Orders */}
                <div className="card mb-4">
                    <div className="card-header">
                        <h3>Past Orders</h3>
                    </div>
                    <div className="card-body">
                        {pastOrders.length > 0 ? (
                            <ul className="list-group">
                                {pastOrders.map((order) => (
                                    <li key={order.id} className="list-group-item">
                                        {order.description}
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

export default YourOrders;