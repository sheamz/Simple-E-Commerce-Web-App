import React from 'react';
import { useNavigate } from 'react-router-dom';
import Registerpic from '../assets/registerpic.png'; 
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        navigate('/home');
    };

    return (
        <div className="container-fluid vh-100 d-flex flex-column flex-md-row">
            <div className="d-flex flex-column justify-content-center align-items-center w-50 w-md-50 bg-white px-4 px-md-5 py-4">
                <h2 className="text-start w-75 w-lg-50 fw-bold">Welcome Back</h2>
                <p className="mb-5 text-start w-75 w-lg-50 fw-normal">Enter your credentials to access your account</p>
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <label htmlFor="password" className="form-label">Password</label>
                        <a href="/forgot-password" className="text-decoration-none">Forgot password?</a>
                    </div>
                    <input
                        type="password"
                        className="form-control mb-3"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">
                            Remember for 30 days
                        </label>
                    </div>
                    <button type="submit" className="btn fw-bold w-100 mb-3" style={{backgroundColor: '#8d27ae', color: 'white'}}>Login</button>
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
                <div className="text-center mt-3">
                    <span>
                        Don’t have an account?{' '}
                        <a href="/register" className="text-decoration-none">Sign Up</a>
                    </span>
                </div>
            </div>

            <div className="d-none d-md-flex flex-column w-50 text-white justify-content-center align-items-center px-4">

                <div className="text-center w-100">
                    <img
                        src={Registerpic}
                        alt="Books"
                        className="img-fluid"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;