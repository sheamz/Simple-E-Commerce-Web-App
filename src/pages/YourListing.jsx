import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';
import atomic from '../assets/atomic.jpg';
import subtle from '../assets/subtle.jpg';
import convenience from '../assets/convi.jpg';
import better from '../assets/better.jpg';

const YourListing = () => {
    const navigate = useNavigate();

    const [listings, setListings] = useState([
        { id: 1, name: 'Atomic Habits', price: '₱300', description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones', category: 'Non-Fiction', author: 'James Clear', image: atomic },
        { id: 2, name: 'The Subtle Art of Not Giving a F*ck', price: '₱350', description: 'A Counterintuitive Approach to Living a Good Life', category: 'Self-Help', author: 'Mark Manson', image: subtle },
        { id: 3, name: 'Convenience Store Woman', price: '₱280', description: 'A quirky and heartwarming story', category: 'Fiction', author: 'Sayaka Murata', image: convenience },
        { id: 4, name: 'Better Than the Movies', price: '₱320', description: 'A romantic comedy novel', category: 'Romance', author: 'Lynn Painter', image: better },
    ]);

    const deleteListing = (id) => {
        setListings(listings.filter((listing) => listing.id !== id));
    };

    const editListing = (id) => {
        alert(`Edit functionality for listing ID: ${id} is not implemented yet.`);
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Your Listings</h1>
                <p><strong>Total Listings:</strong> {listings.length}</p>
                <div className="row">
                    {listings.map((listing) => (
                        <div className="col-md-3 mb-4" key={listing.id}>
                            <div className="card h-100">
                                <img
                                    src={listing.image}
                                    className="card-img-top"
                                    alt={listing.name}
                                    style={{ height: '450px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{listing.name}</h5>
                                    <p className="text-muted mb-1">{listing.author}</p>
                                    <p className="text-muted mb-1">{listing.category}</p>
                                    <p className="text-muted mb-2">{listing.description}</p>
                                    <p className="fw-bold text-purple">{listing.price}</p>
                                    <div className="mt-auto d-flex justify-content-between">
                                        <button
                                            className="btn btn-primary btn-sm me-2 d-flex align-items-center"
                                            onClick={() => editListing(listing.id)}
                                        >
                                            <FaEdit className="me-1" />
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm d-flex align-items-center"
                                            onClick={() => deleteListing(listing.id)}
                                        >
                                            <FaTrash className="me-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="btn btn-success mt-4"
                    onClick={() => navigate('/add-product')}
                >
                    Add New Listing
                </button>
            </div>
        </div>
    );
};

export default YourListing;