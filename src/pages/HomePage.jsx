import React from 'react';
import NavBarHome from '../component/NavBarHome'; 
import { FaTruck, FaShieldAlt, FaAward, FaUndoAlt } from 'react-icons/fa';
import SlideLanding from '../component/SlideLanding'; 
import One from '../assets/atomic.jpg'; 
import Two from '../assets/better.jpg';
import Three from '../assets/convi.jpg'; 
import Four from '../assets/fault.jpg'; 
import Five from '../assets/subtle.jpg';


const HomePage = () => {
    return (
        <div>
            <NavBarHome />


            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <SlideLanding />

            <div className="container mt-5" style={{ flex: '1', textAlign: 'center' }}>
                <h3 className="text-center fw-bold">Trending this week</h3>
                <p className="text-center">"Discover the hottest picks of the week — the most talked-about <br /> books everyone’s reading right now!"</p>

                <div className='container mt-5'> 
                    <div className="row row-cols-1 row-cols-md-5 g-4 justify-content-center">
                        <div className="col">
                            <div className="card h-100 border-0">
                                <img src={One} className="card-img-top" alt="Book 1" style={{ borderRadius: '10px' }} />
                                <div className="card-body d-flex flex-column justify-content-between text-center mt-4" style={{ height: '230px' }}>
                                    <div>
                                        <h6 className="card-category fw-bold" style={{ color: '#8d27ae' }}>Non-Fiction</h6>
                                        <h5 className="card-title mt-3 fw-bold">Atomic Habits</h5>
                                        <p className="card-text">James Clear</p>
                                    </div>
                                    <p className="card-price mt-4 mx-auto" style={{ color: '#8d27ae', border: '1px solid #8d27ae', width: '100px', textAlign: 'center', borderRadius: '5px' }}>₱ 300.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-0">
                                <img src={Two} className="card-img-top" alt="Book 2" style={{ borderRadius: '10px' }} />
                                <div className="card-body d-flex flex-column justify-content-between text-center mt-4" style={{ height: '230px' }}>
                                    <div>
                                        <h6 className="card-category fw-bold" style={{ color: '#8d27ae' }}>Romance</h6>
                                        <h5 className="card-title mt-3 fw-bold">Better Than the Movies</h5>
                                        <p className="card-text">Lynn Painter</p>
                                    </div>
                                    <p className="card-price mt-4 mx-auto" style={{ color: '#8d27ae', border: '1px solid #8d27ae', width: '100px', textAlign: 'center', borderRadius: '5px' }}>₱ 300.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-0">
                                <img src={Three} className="card-img-top" alt="Book 3" style={{ borderRadius: '10px' }} />
                                <div className="card-body d-flex flex-column justify-content-between text-center mt-4" style={{ height: '230px' }}>
                                    <div>
                                        <h6 className="card-category fw-bold" style={{ color: '#8d27ae' }}>Fiction</h6>
                                        <h5 className="card-title mt-3 fw-bold">Convenience Store Woman</h5>
                                        <p className="card-text">Sayaka Murata</p>
                                    </div>
                                    <p className="card-price mt-4 mx-auto" style={{ color: '#8d27ae', border: '1px solid #8d27ae', width: '100px', textAlign: 'center', borderRadius: '5px' }}>₱ 300.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-0">
                                <img src={Four} className="card-img-top" alt="Book 4" style={{ borderRadius: '10px' }} />
                                <div className="card-body d-flex flex-column justify-content-between text-center mt-4" style={{ height: '230px' }}>
                                    <div>
                                        <h6 className="card-category fw-bold" style={{ color: '#8d27ae' }}>Romance</h6>
                                        <h5 className="card-title mt-3 fw-bold">The Fault in Our Stars</h5>
                                        <p className="card-text">John Green</p>
                                    </div>
                                    <p className="card-price mt-4 mx-auto" style={{ color: '#8d27ae', border: '1px solid #8d27ae', width: '100px', textAlign: 'center', borderRadius: '5px' }}>₱ 300.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-0">
                                <img src={Five} className="card-img-top" alt="Book 5" style={{ borderRadius: '10px' }} />
                                <div className="card-body d-flex flex-column justify-content-between text-center mt-4" style={{ height: '230px' }}>
                                    <div>
                                        <h6 className="card-category fw-bold" style={{ color: '#8d27ae' }}>Non-Fiction</h6>
                                        <h5 className="card-title mt-3 fw-bold">The Subtle Art of Not Giving a F*ck</h5>
                                        <p className="card-text">Mark Manson</p>
                                    </div>
                                    <p className="card-price mt-4 mx-auto" style={{ color: '#8d27ae', border: '1px solid #8d27ae', width: '100px', textAlign: 'center', borderRadius: '5px' }}>₱ 300.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 mt-5" style={{ backgroundColor: '#dad2ff', padding: '50px' }}>
                <div className="container text-start">
                    <div className="row">
                        <div className="col-md-3">
                            <FaTruck size={50} style={{ color: '#8d27ae' }} />
                            <h5 className="fw-bold mt-3">Quick Delivery</h5>
                            <p>Get your favorite books delivered to your doorstep in no time with our fast and reliable shipping.</p>
                        </div>
                        <div className="col-md-3">
                            <FaShieldAlt size={50} style={{ color: '#8d27ae' }} />
                            <h5 className="fw-bold mt-3">Secure Payment</h5>
                            <p>Shop with confidence using our safe and encrypted payment system.</p>
                        </div>
                        <div className="col-md-3">
                            <FaAward size={50} style={{ color: '#8d27ae' }} />
                            <h5 className="fw-bold mt-3">Best Quality</h5>
                            <p>Enjoy top-notch books curated with care and guaranteed quality.</p>
                        </div>
                        <div className="col-md-3">
                            <FaUndoAlt size={50} style={{ color: '#8d27ae' }} />
                            <h5 className="fw-bold mt-3">Return Guarantee</h5>
                            <p>Not satisfied? We offer hassle-free returns to ensure your complete satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 w-100">
                <h3 className="fw-bold">Best Sellers</h3>
                <div className="row row-cols-1 row-cols-md-4 mt-3" style={{ gap: '12%' }}>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={One} className="card-img-top" alt="Book 1" style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <h6 className="fw-bold">Non-Fiction</h6>
                                <h5 className="card-title">Atomic Habits</h5>
                                <p className="card-price" style={{ color: '#8d27ae' }}>₱ 300.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={Two} className="card-img-top" alt="Book 2" style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <h6 className="fw-bold">Romance</h6>
                                <h5 className="card-title">Better than the Movies</h5>
                                <p className="card-price" style={{ color: '#8d27ae' }}>₱ 300.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={Three} className="card-img-top" alt="Book 3" style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <h6 className="fw-bold">Fiction</h6>
                                <h5 className="card-title">Convinience Store by the Sea</h5>
                                <p className="card-price" style={{ color: '#8d27ae' }}>₱ 300.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h3 className="fw-bold">Categories</h3>
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Fiction</h5>
                                <p className="card-text">124+ items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Non-Fiction</h5>
                                <p className="card-text">98+ items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Romance</h5>
                                <p className="card-text">42+ items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Mystery and Thriller</h5>
                                <p className="card-text">56+ items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Sci-Fi</h5>
                                <p className="card-text">78+ items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#8d27ae', color: '#fff' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Fantasy</h5>
                                <p className="card-text">65+ items</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>


        </div>
    );
};

export default HomePage;