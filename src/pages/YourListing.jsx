import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';

const YourListing = () => {
    const navigate = useNavigate();

    // State for managing listings
    const [listings, setListings] = useState([
        { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
    ]);

    // Function to delete a listing
    const deleteListing = (id) => {
        setListings(listings.filter((listing) => listing.id !== id));
    };

    // Function to edit a listing (placeholder for now)
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

                {/* Listings Table */}
                <div className="card">
                    <div className="card-header">
                        <h3>Current Listings</h3>
                    </div>
                    <div className="card-body">
                        {listings.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listings.map((listing, index) => (
                                        <tr key={listing.id}>
                                            <td>{index + 1}</td>
                                            <td>{listing.name}</td>
                                            <td>{listing.price}</td>
                                            <td>{listing.description}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm me-2"
                                                    onClick={() => editListing(listing.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteListing(listing.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No listings available.</p>
                        )}
                    </div>
                </div>

                {/* Add New Listing Button */}
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