import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';

const ShopSetting = () => {
    const defaultData = {
        shopName: 'Book Nook',
        shopDescription: 'We sell the best book at the best prices.',
        shopAddress: 'Silang, Cavite, Philippines',
        contactEmail: 'booknook@gmail.com',
        contactNumber: '+1234567890',
        businessHours: 'Mon-Fri: 9 AM - 5 PM',
        shippingSchedule: 'Orders are shipped within 2-3 business days.',
        returnPolicy: 'Returns are accepted within 30 days of purchase.',
    };

    const [formData, setFormData] = useState(defaultData);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Settings saved successfully!');
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1 className="text-center">Shop Settings</h1>
                {!isEditing ? (
                    <div className="text-center">
                        <div className="mb-4">
                            <h3 style={{ color: 'purple' }}>Personal Information</h3>
                            <p><strong>Store Name:</strong> {formData.shopName}</p>
                            <p><strong>Description:</strong> {formData.shopDescription}</p>
                            <p><strong>Address:</strong> {formData.shopAddress}</p>
                        </div>
                        <div className="mb-4">
                            <h3 style={{ color: 'purple' }}>Contact Information</h3>
                            <p><strong>Email:</strong> {formData.contactEmail}</p>
                            <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
                        </div>
                        <div className="mb-4">
                            <h3 style={{ color: 'purple' }}>Business Hours / Shipping Schedule</h3>
                            <p><strong>Business Hours:</strong> {formData.businessHours}</p>
                            <p><strong>Shipping Schedule:</strong> {formData.shippingSchedule}</p>
                        </div>
                        <div className="mb-4">
                            <h3 style={{ color: 'purple' }}>Return / Refund Policy</h3>
                            <p>{formData.returnPolicy}</p>
                        </div>
                        <button className="btn btn-secondary" style={{ backgroundColor: 'purple', borderColor: 'purple' }} onClick={handleEdit}>
                            Edit Settings
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                        <div className="mb-4">
                            <h3 className="text-center" style={{ color: 'purple' }}>Personal Information</h3>
                            <div>
                                <label htmlFor="shopName" style={{ color: 'purple' }}>Store Name:</label>
                                <input
                                    type="text"
                                    id="shopName"
                                    name="shopName"
                                    value={formData.shopName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="shopDescription" style={{ color: 'purple' }}>Description:</label>
                                <textarea
                                    id="shopDescription"
                                    name="shopDescription"
                                    value={formData.shopDescription}
                                    onChange={handleChange}
                                    className="form-control"
                                ></textarea>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="shopAddress" style={{ color: 'purple' }}>Address:</label>
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
                        <div className="mb-4">
                            <h3 className="text-center" style={{ color: 'purple' }}>Contact Information</h3>
                            <div>
                                <label htmlFor="contactEmail" style={{ color: 'purple' }}>Email:</label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="contactNumber" style={{ color: 'purple' }}>Contact Number:</label>
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
                        <div className="mb-4">
                            <h3 className="text-center" style={{ color: 'purple' }}>Business Hours / Shipping Schedule</h3>
                            <div>
                                <label htmlFor="businessHours" style={{ color: 'purple' }}>Business Hours:</label>
                                <input
                                    type="text"
                                    id="businessHours"
                                    name="businessHours"
                                    value={formData.businessHours}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="shippingSchedule" style={{ color: 'purple' }}>Shipping Schedule:</label>
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
                        <div className="mb-4">
                            <h3 className="text-center" style={{ color: 'purple' }}>Return / Refund Policy</h3>
                            <div>
                                <label htmlFor="returnPolicy" style={{ color: 'purple' }}>Policy:</label>
                                <textarea
                                    id="returnPolicy"
                                    name="returnPolicy"
                                    value={formData.returnPolicy}
                                    onChange={handleChange}
                                    className="form-control"
                                ></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary me-2" style={{ backgroundColor: 'purple', borderColor: 'purple' }}>
                                Save Settings
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                style={{ backgroundColor: '#e0e0e0', color: 'purple' }}
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ShopSetting;