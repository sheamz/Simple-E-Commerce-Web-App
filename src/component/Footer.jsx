import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaStore, FaUsers, FaBook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#3b0a57', color: '#fff', padding: '20px', marginTop: '50px' }}>
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-4">
                            <FaStore size={40} style={{ color: '#fff' }} />
                            <h3 className="fw-bold mt-2">268</h3>
                            <p>Our stores around the world</p>
                        </div>

                        <div className="col-md-4">
                            <FaUsers size={40} style={{ color: '#fff' }} />
                            <h3 className="fw-bold mt-2">25,634</h3>
                            <p>Our happy customers</p>
                        </div>

                        <div className="col-md-4">
                            <FaBook size={40} style={{ color: '#fff' }} />
                            <h3 className="fw-bold mt-2">68+k</h3>
                            <p>Book Collections</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#8d27ae', color: '#fff', padding: '40px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3 className="fw-bold">Subscribe our newsletter for newest books updates</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex">
                                <input
                                    type="email"
                                    className="form-control me-2"
                                    placeholder="Type your email here"
                                    style={{ borderRadius: '20px', backgroundColor: '#a34dbf', color: '#fff', border: 'none' }}
                                />
                                <button
                                    className="btn btn-light"
                                    style={{ borderRadius: '20px', color: '#8d27ae', fontWeight: 'bold' }}
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ backgroundColor: '#e1d7e4', color: '#333',fontSize: '14px' }}>
                <Container>
                    <Row className="mb-4">
                        <Col md={3}>
                            <h5 className="fw-bold" style={{ fontSize: '24px', color: '#6c63ff' }}>BOOK NOOK</h5>
                            <p className="mb-3">
                                BOOK NOOK is an online bookstore website that sells all genres of books from around the world. Find your book here now.
                            </p>
                            <h6 className="fw-bold">Follow Us</h6>
                            <div className="d-flex mb-3 gap-3 mt-2">
                                <FaFacebookF style={{ color: '#6c63ff', fontSize: '20px' }} />
                                <FaYoutube style={{ color: '#6c63ff', fontSize: '20px' }} />
                                <FaTwitter style={{ color: '#6c63ff', fontSize: '20px' }} />
                                <FaLinkedin style={{ color: '#6c63ff', fontSize: '20px' }} />
                                <FaInstagram style={{ color: '#6c63ff', fontSize: '20px' }} />
                            </div>
                        </Col>

                        <Col md={2}>
                            <h6 className="fw-bold">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Products</li>
                                <li>Login</li>
                                <li>Sign Up</li>
                            </ul>
                        </Col>

                        <Col md={2}>
                            <h6 className="fw-bold">Customer Area</h6>
                            <ul className="list-unstyled">
                                <li>My Account</li>
                                <li>Orders</li>
                                <li>Tracking List</li>
                                <li>Terms</li>
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                            </ul>
                        </Col>

                        <Col md={5}>
                            <h6 className="fw-bold">Don’t miss the newest books</h6>
                            <p>Subscribe to our newsletter to stay updated on the latest books and offers.</p>
                            <div className="d-flex">
                                <input
                                    type="email"
                                    className="form-control me-2"
                                    placeholder="Type your email here"
                                    style={{ borderRadius: '20px' }}
                                />
                                <button className="btn btn-primary" style={{ borderRadius: '20px', backgroundColor: '#6c63ff', border: 'none' }}>
                                    Subscribe
                                </button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center pt-3" style={{ borderTop: '1px solid #ddd', fontSize: '12px', color: '#666' }}>
                            Book Nook © 2025 All Rights Reserved. Made with ❤️ by Lors and Sheamz.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;