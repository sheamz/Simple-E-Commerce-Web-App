import React, { useState } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Regto from '../assets/regto.jpg';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const [showModal, setShowModal] = useState(false); 
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        setShowModal(true); 
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/login'); 
    };

    return (
        <div className="d-flex flex-column flex-lg-row vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 w-lg-50 bg-white px-4 px-lg-5 p-5">
                <h2 className="mb-4 text-start w-75 w-lg-50 fw-bold">Get Started Now</h2>
                <form className="w-75 w-lg-50" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label fw-medium fs-6 mb-0">Full Name</label>
                        <input
                            type="text"
                            className="form-control rounded-2 mt-0"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            style={{ fontSize: '14px' }}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="middleName" className="form-label fw-medium fs-6 mb-0">Middle Name</label>
                        <input
                            type="text"
                            className="form-control rounded-2 mt-0"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            placeholder="Enter your middle name"
                            style={{ fontSize: '14px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label fw-medium fs-6 mb-0">Last Name</label>
                        <input
                            type="text"
                            className="form-control rounded-2 mt-0"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            style={{ fontSize: '14px' }}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-medium fs-6 mb-0">Email address</label>
                        <input
                            type="email"
                            className="form-control rounded-2"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={{ fontSize: '14px' }}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-medium fs-6 mb-0">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword.password ? 'text' : 'password'}
                                className="form-control rounded-2"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                style={{ fontSize: '14px' }}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => togglePasswordVisibility('password')}
                            >
                                {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label fw-medium fs-6 mb-0">Confirm Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword.confirmPassword ? 'text' : 'password'}
                                className="form-control rounded-2"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                style={{ fontSize: '14px' }}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="terms" required />
                        <label
                            className="form-check-label fw-bold mb-3"
                            htmlFor="terms"
                            style={{ fontSize: '14px' }}
                        >
                            I agree to the <a href="/terms">terms & policy</a>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn w-100 mb-3 rounded-2 fw-bold"
                            style={{ backgroundColor: '#8d27ae', color: 'white' }}
                        >
                            Signup
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">or</div>
                <div className="d-flex flex-column flex-sm-row justify-content-between w-50 w-lg-50 gap-3 mt-3">
                    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 text-black">
                        <FaGoogle /> Sign in with Google
                    </button>
                    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 text-black">
                        <FaApple /> Sign in with Apple
                    </button>
                </div>
                <div className="text-center mt-4 fw-bold">
                    <span>Have an account? <a href="/login">Sign In</a></span>
                </div>
            </div>


            <div className="d-flex flex-column justify-content-center align-items-center w-100 w-lg-50 text-white px-4 px-lg-5">
                <div className="text-center w-100 mt-4">
                    <img
                        src={Regto}
                        alt="Books"
                        className="img-fluid"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                </div>
            </div>


            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Full Name:</strong> {formData.fullName}</p>
                    <p><strong>Middle Name:</strong> {formData.middleName}</p>
                    <p><strong>Last Name:</strong> {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RegisterPage;