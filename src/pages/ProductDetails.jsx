import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';
import AtomicImage from '../assets/atomic.jpg'; // Import the image for Atomic Habits

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of Atomic Habits to the cart.`);
    };

    return (
        <div>
            <NavBarHome />
            <div className="container mt-5 d-flex flex-column">
                <div className="row w-100 d-flex justify-content-center">
                    <div className="col-md-4 d-flex flex-column">
                        <div className="main-image mb-3">
                            <img
                                src={AtomicImage}
                                alt="Atomic Habits"
                                style={{
                                    width: '300px',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className="d-flex gap-2">
                            <img
                                src={AtomicImage}
                                alt="Thumbnail 1"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                            />
                            <img
                                src={AtomicImage}
                                alt="Thumbnail 2"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                            />
                            <img
                                src={AtomicImage}
                                alt="Thumbnail 3"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                        <h1 className="fw-bold">Atomic Habits</h1>
                        <p className="text-muted">by James Clear</p>
                        <p className="text-muted">150 buyers purchased this book</p>
                        <p className="mt-3">
                            Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.
                        </p>
                        <div className="d-flex mt-4">
                            <h2 className="fw-bold me-3" style={{ color: '#8d27ae' }}>₱ 300</h2>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={handleDecreaseQuantity}
                            >
                                -
                            </button>
                            <span className="mx-3">{quantity}</span>
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={handleIncreaseQuantity}
                            >
                                +
                            </button>
                        </div>
                        <div className="d-flex align-items-center mt-4 gap-3">
                            <button
                                className="btn btn-primary"
                                style={{ backgroundColor: '#8d27ae', border: 'none' }}
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn btn-outline-secondary"
                                style={{ border: '1px solid #8d27ae', color: '#8d27ae' }}
                            >
                                ♥
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-5 w-100" style={{ marginLeft: '110px' }}>
                    <h4 className="fw-bold">Details</h4>
                    <div className="row">
                        <div className="col-md-3 text-muted">
                            <p>Book Title</p>
                            <p>Author</p>
                            <p>ISBN</p>
                            <p>Edition Language</p>
                            <p>Book Format</p>
                            <p>Date Published</p>
                            <p>Publisher</p>
                        </div>
                        <div className="col-md-6">
                            <p>Atomic Habits</p>
                            <p>James Clear</p>
                            <p>123456789 (ISBN13: 123456789)</p>
                            <p>English</p>
                            <p>Paperback, 320 Pages</p>
                            <p>October 16th 2018</p>
                            <p>Avery</p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 w-100" style={{ marginLeft: '110px' }}>
                    <h4 className="fw-bold">Related Books</h4>
                    <div className="d-flex gap-3">
                        <div
                            className="card"
                            style={{
                                width: '150px',
                                border: '1px solid #ddd',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                            }}
                        >
                            <img
                                src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398529489/powerless-9781398529489_hr.jpg"
                                alt="Related Book 2"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <div className="p-2">
                                <h6 className="fw-bold">Deep Work</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;