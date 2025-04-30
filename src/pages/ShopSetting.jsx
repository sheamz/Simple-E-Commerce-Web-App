import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';

const ShopSetting = () => {
    // Default data for the form
    const defaultData = {
        shopName: 'My Awesome Store',
        shopDescription: 'We sell the best products at the best prices.',
        shopAddress: '123 Main Street, Cityville, Country',
        contactEmail: 'store@example.com',
        contactNumber: '+1234567890',
        businessHours: 'Mon-Fri: 9 AM - 5 PM',
        shippingSchedule: 'Orders are shipped within 2-3 business days.',
        returnPolicy: 'Returns are accepted within 30 days of purchase.',
    };

    // State to manage form data
    const [formData, setFormData] = useState(defaultData);

    // State to toggle edit mode
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Settings saved successfully!');
        setIsEditing(false); // Exit edit mode after saving
    };

    const handleEdit = () => {
        setIsEditing(true); // Enable edit mode
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Shop Settings</h1>
                {!isEditing ? (
                    <div>
                        {/* Display the current settings */}
                        <div className="mb-4">
                            <h3>Personal Information</h3>
                            <p><strong>Store Name:</strong> {formData.shopName}</p>
                            <p><strong>Description:</strong> {formData.shopDescription}</p>
                            <p><strong>Address:</strong> {formData.shopAddress}</p>
                        </div>
                        <div className="mb-4">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> {formData.contactEmail}</p>
                            <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
                        </div>
                        <div className="mb-4">
                            <h3>Business Hours / Shipping Schedule</h3>
                            <p><strong>Business Hours:</strong> {formData.businessHours}</p>
                            <p><strong>Shipping Schedule:</strong> {formData.shippingSchedule}</p>
                        </div>
                        <div className="mb-4">
                            <h3>Return / Refund Policy</h3>
                            <p>{formData.returnPolicy}</p>
                        </div>
                        <button className="btn btn-secondary" onClick={handleEdit}>
                            Edit Settings
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Personal Information */}
                        <div className="mb-4">
                            <h3>Personal Information</h3>
                            <div>
                                <label htmlFor="shopName">Store Name:</label>
                                <input
                                    type="text"
                                    id="shopName"
                                    name="shopName"
                                    value={formData.shopName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <label htmlFor="shopDescription">Description:</label>
                                <textarea
                                    id="shopDescription"
                                    name="shopDescription"
                                    value={formData.shopDescription}
                                    onChange={handleChange}
                                    className="form-control"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="shopAddress">Address:</label>
                                <input
                                    type="text"
                                    id="shopAddress"
                                    name="shopAddress"
                                    value={formData.shopAddress}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-4">
                            <h3>Contact Information</h3>
                            <div>
                                <label htmlFor="contactEmail">Email:</label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <label htmlFor="contactNumber">Contact Number:</label>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        {/* Business Hours / Shipping Schedule */}
                        <div className="mb-4">
                            <h3>Business Hours / Shipping Schedule</h3>
                            <div>
                                <label htmlFor="businessHours">Business Hours:</label>
                                <input
                                    type="text"
                                    id="businessHours"
                                    name="businessHours"
                                    value={formData.businessHours}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <label htmlFor="shippingSchedule">Shipping Schedule:</label>
                                <input
                                    type="text"
                                    id="shippingSchedule"
                                    name="shippingSchedule"
                                    value={formData.shippingSchedule}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        {/* Return / Refund Policy */}
                        <div className="mb-4">
                            <h3>Return / Refund Policy</h3>
                            <div>
                                <label htmlFor="returnPolicy">Policy:</label>
                                <textarea
                                    id="returnPolicy"
                                    name="returnPolicy"
                                    value={formData.returnPolicy}
                                    onChange={handleChange}
                                    className="form-control"
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Save Settings
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ShopSetting;