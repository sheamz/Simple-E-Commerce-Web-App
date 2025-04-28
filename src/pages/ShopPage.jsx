import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarHome from '../component/NavBarHome';
import Dropdown from 'react-bootstrap/Dropdown';
import Filter from '../component/Filter';
import Atom from '../assets/atomic.jpg';
import Subtle from '../assets/subtle.jpg';
import Convi from '../assets/convi.jpg';
import Better from '../assets/better.jpg';
import Fault from '../assets/fault.jpg';

import Everything from '../assets/everything.jpg';
import Friends from '../assets/friends.jpg';
import Idiots from '../assets/idiots.jpg';
import Power from '../assets/power.jpg';
import Seven from '../assets/seven.jpg';
import Talk from '../assets/talk.jpg';
import Save from '../assets/save.jpg';


const ShopPage = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([
        {
            id: 1,
            image: Atom,
            genre: 'Non-Fiction',
            title: 'Atomic Habits',
            author: 'James Clear',
            price: 300,
            sellCount: 150,
        },
        {
            id: 2,
            image: Subtle,
            genre: 'Self-Help',
            title: 'The Subtle Art of Not Giving a F*ck',
            author: 'Mark Manson',
            price: 350,
            sellCount: 50,
        },
        {
            id: 3,
            image: Convi,
            genre: 'Fiction',
            title: 'Convenience Store Woman',
            author: 'Sayaka Murata',
            price: 280,
            sellCount: 200,
        },
        {
            id: 4,
            image: Better,
            genre: 'Romance',
            title: 'Better Than the Movies',
            author: 'Lynn Painter',
            price: 320,
            sellCount: 30,
        },
        {
            id: 5,
            image: Fault,
            genre: 'Romance',
            title: 'The Fault in Our Stars',
            author: 'John Green',
            price: 300,
            sellCount: 300,
        },
        {
            id: 6,
            image: Everything,
            genre: 'Romance',
            title: 'Everything is F*cked: A Book About Hope',
            author: 'Mark Manson',
            price: 350,
            sellCount: 350,
        },
        {
            id: 7,
            image: Friends,
            genre: 'Non-Fiction',
            title: 'How to Win Friends and Influence People',
            author: 'Dale Carnegie',
            price: 400,
            sellCount: 400,
        },
        {
            id: 8,
            image: Idiots,
            genre: 'Non-Fiction',
            title: 'Surrounded by Idiots',
            author: 'Thomas Erikson',
            price: 390,
            sellCount: 390,
        },
        {
            id: 9,
            image: Power,
            genre: 'Non-Fiction',
            title: 'The 48 Laws of Power',
            author: 'Robert Greene',
            price: 310,
            sellCount: 310,
        },
        {
            id: 10,
            image: Seven,
            genre: 'Romance',
            title: 'Seven Husbands of Evelyn Hugo',
            author: 'Taylor Jenkins Reid',
            price: 600,
            sellCount: 600,
        },
        {
            id: 11,
            image: Talk,
            genre: 'Non-Fiction',
            title: 'How To Talk to Anyone',
            author: 'Leil Lowndes',
            price: 380,
            sellCount: 900,
        },
        {
            id: 12,
            image: Save,
            genre: 'Non-Fiction',
            title: 'Stop Chasing Influencers',
            author: 'Kimanzi Constable & Jared Easley',
            price: 200,
            sellCount: 0,
        },
    ]);

    const [selectedFilter, setSelectedFilter] = useState('Newest');
    const [visibleProducts, setVisibleProducts] = useState(20);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 20);
    };

    return (
        <div>
            <NavBarHome />
            <div className="container-fluid  py-4">
                <div className="row">
                    <div className="col-12 col-md-3 mb-4">
                        <Filter />
                    </div>

                    <div className="col-12 p-5 col-md-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h1 className="fw-bold">Shop</h1>
                                <p className="text-muted" style={{ fontSize: '14px' }}>
                                    Browse our collection of books and find your next favorite read!
                                </p>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    style={{ backgroundColor: '#8d27ae', border: 'none'}}
                                    id="dropdown-basic"
                                >
                                    {selectedFilter}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setSelectedFilter('Newest')}>Newest</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedFilter('Oldest')}>Oldest</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedFilter('Best Seller')}>Best Seller</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                            {products.slice(0, visibleProducts).map((product) => (
                                <div className="col" key={product.id}>
                                    <div
                                        className="card h-100 border-0"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => navigate(`/product-details`)}
                                    >
                                        {product.sellCount > 300 && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '10px',
                                                    backgroundColor: 'yellow',
                                                    color: 'black',
                                                    padding: '5px 10px',
                                                    borderRadius: '5px',
                                                    fontWeight: 'bold',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                Best Seller
                                            </div>
                                        )}
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                            style={{
                                                height: '650px', 
                                                width: '100%', 
                                                objectFit: 'cover', 
                                                borderRadius: '10px',
                                                border: '1px solid #ddd',
                                            }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-genre fw-bold" style={{ color: '#8d27ae' }}>
                                                {product.genre}
                                            </h6>
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.author}</p>
                                            <p className="card-price fw-bold" style={{ color: '#8d27ae' }}>
                                                ₱ {product.price}
                                            </p>
                                            <button
                                                className="btn btn-primary"
                                                style={{ backgroundColor: '#8d27ae', border: 'none' }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    console.log(`Add to Cart: ${product.id}`);
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleProducts < products.length && (
                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-secondary"
                                    onClick={loadMoreProducts}
                                    style={{ backgroundColor: '#8d27ae', border: 'none', color: '#fff' }}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;