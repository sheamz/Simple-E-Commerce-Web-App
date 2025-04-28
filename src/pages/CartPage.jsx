import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import NavBarHome from '../component/NavBarHome';
import Atomic from '../assets/atomic.jpg';
import Subtle from '../assets/subtle.jpg';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 300, quantity: 1, image: Atomic },
        { id: 2, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', price: 350, quantity: 2, image: Subtle },
    ]);

    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        console.log('Proceeding to checkout...');
    };

    return (
        <div>
            <NavBarHome />
            <div className="container mt-5">
                <h3 className="text mb-4">
                    Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                </h3>
                <div className="row">
                    <div className="col-md-8">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="d-flex align-items-center justify-content-between border p-3 mb-3"
                                    style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100px',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '10px',
                                                marginRight: '15px',
                                            }}
                                        />
                                        <div>
                                            <h5 className="fw-bold mb-1">{item.title}</h5>
                                            <p className="mb-1" style={{ color: 'gray', fontSize: '14px' }}>
                                                {item.author}
                                            </p>
                                            <p className="fw-bold mb-0">₱ {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center me-3">
                                            <button
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => handleDecreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => handleIncreaseQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">Your cart is empty.</p>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="col-md-4">
                            <div
                                className="border p-3"
                                style={{
                                    borderRadius: '10px',
                                    backgroundColor: '#f8f9fa',
                                }}
                            >
                                <h5 className="fw-bold mb-3">Order Summary</h5>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Total Items</span>
                                    <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal</span>
                                    <span>₱ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold mb-3">
                                    <span>Total</span>
                                    <span>₱ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                                </div>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ backgroundColor: '#8d27ae', border: 'none' }}
                                    onClick={handleCheckout}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;