import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Filter = () => {
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    const [formatOpen, setFormatOpen] = useState(true);
    const [priceRange, setPriceRange] = useState([145, 430]);

    const toggleCategories = () => setCategoriesOpen(!categoriesOpen);
    const toggleFormat = () => setFormatOpen(!formatOpen);

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = e.target.value;
        setPriceRange(newPriceRange);
    };

    return (
        <div className="filter-container p-5 bg-white rounded shadow-sm">
            <h3 className="fw-bold">Filter</h3>

            <div className="filter-section mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold">Categories</h5>
                    <button
                        className="btn btn-link p-0"
                        onClick={toggleCategories}
                        style={{ color: '#8d27ae', textDecoration: 'none' }}
                    >
                        {categoriesOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                </div>
                {categoriesOpen && (
                    <ul className="list-unstyled mt-3" style={{ fontSize: '14px', color: 'grey' }}>
                        <li>
                            <input type="radio" id="all-genres" name="categories" defaultChecked />
                            <label htmlFor="all-genres" className="ms-2">All Genres</label>
                        </li>
                        <li>
                            <input type="radio" id="arts" name="categories" />
                            <label htmlFor="arts" className="ms-2">Fiction</label>
                        </li>
                        <li>
                            <input type="radio" id="biographies" name="categories" />
                            <label htmlFor="biographies" className="ms-2">Non-Fiction</label>
                        </li>
                        <li>
                            <input type="radio" id="children" name="categories" />
                            <label htmlFor="children" className="ms-2">Romance</label>
                        </li>
                        <li>
                            <input type="radio" id="cookbook" name="categories" />
                            <label htmlFor="cookbook" className="ms-2">Mystery and Thriller</label>
                        </li>
                        <li>
                            <input type="radio" id="history" name="categories" />
                            <label htmlFor="history" className="ms-2">Sci-Fi</label>
                        </li>
                        <li>
                            <input type="radio" id="literature" name="categories" />
                            <label htmlFor="literature" className="ms-2">Fantasy</label>
                        </li>
                    </ul>
                )}
            </div>

            <div className="filter-section mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold">Book Format</h5>
                    <button
                        className="btn btn-link p-0"
                        onClick={toggleFormat}
                        style={{ color: '#8d27ae', textDecoration: 'none' }}
                    >
                        {formatOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                </div>
                {formatOpen && (
                    <ul className="list-unstyled mt-3" style={{ fontSize: '14px', color: 'grey' }}>
                        <li>
                            <input type="radio" id="all-format" name="format" defaultChecked />
                            <label htmlFor="all-format" className="ms-2">All Format</label>
                        </li>
                        <li>
                            <input type="radio" id="hardcover" name="format" />
                            <label htmlFor="hardcover" className="ms-2">Hard Cover</label>
                        </li>
                        <li>
                            <input type="radio" id="paperback" name="format" />
                            <label htmlFor="paperback" className="ms-2">Paper Back</label>
                        </li>
                        <li>
                            <input type="radio" id="ebook" name="format" />
                            <label htmlFor="ebook" className="ms-2">E-Book</label>
                        </li>
                        <li>
                            <input type="radio" id="largeprint" name="format" />
                            <label htmlFor="largeprint" className="ms-2">Large Print</label>
                        </li>
                    </ul>
                )}
            </div>

            <div className="filter-section mt-4">
                <h5 className="fw-bold">Price Range</h5>
                <div className="mt-3">
                    <input
                        type="range"
                        min="100"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="form-range"
                    />
                    <input
                        type="range"
                        min="100"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="form-range"
                    />
                    <div className="d-flex justify-content-between mt-2">
                        <span>₱{priceRange[0]}</span>
                        <span>₱{priceRange[1]}</span>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <button className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#8d27ae', border: 'none' }}>
                    Refine Search
                </button>
                <button className="btn btn-outline-secondary w-100">
                    Reset Filter
                </button>
            </div>
        </div>
    );
};

export default Filter;