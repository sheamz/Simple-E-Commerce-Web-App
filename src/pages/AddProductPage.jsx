import React, { useState } from 'react';
import NavBarHome from '../component/NavBarHome';

const AddProductPage = () => {
    const [product, setProduct] = useState({
        title: '',
        author: '',
        price: '',
        images: [], 
        primaryImage: '', 
    });

    const [message, setMessage] = useState(''); 
    const [imageSource, setImageSource] = useState('url'); 
    const [newImage, setNewImage] = useState(''); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProduct((prev) => ({
                    ...prev,
                    images: [...prev.images, reader.result],
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddImage = () => {
        if (newImage) {
            setProduct((prev) => ({
                ...prev,
                images: [...prev.images, newImage],
            }));
            setNewImage('');
        }
    };

    const handleSetPrimaryImage = (image) => {
        setProduct((prev) => ({
            ...prev,
            primaryImage: image,
        }));
    };

    const handleRemoveImage = (image) => {
        setProduct((prev) => ({
            ...prev,
            images: prev.images.filter((img) => img !== image),
            primaryImage: prev.primaryImage === image ? '' : prev.primaryImage,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.title || !product.author || !product.price || !product.primaryImage) {
            setMessage('All fields are required, and a primary image must be selected.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                setMessage('Product added successfully!');
                setProduct({
                    title: '',
                    author: '',
                    price: '',
                    images: [],
                    primaryImage: '',
                }); 
            } else {
                setMessage('Failed to add product. Please try again.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <NavBarHome />
            <div className="container mt-5">
                <h1 className="text fw-bold" style={{ fontSize: '30px', marginBottom: '50px' }}>Add New Product</h1>
                {message && (
                    <p
                        className="text-center"
                        style={{ color: message.includes('successfully') ? 'green' : 'red' }}
                    >
                        {message}
                    </p>
                )}
                <div className="row mt-4">
                    <div className="col-md-8" style={{ paddingRight: '70px' }}>
                        <h5 className="fw" style={{marginBottom: '50px'}}>General Information</h5>
                        <form onSubmit={handleSubmit} className="mt-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Book Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder='Enter Book Title'
                                    style={{ fontSize: '14px' }}
                                    value={product.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">
                                    Author
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    placeholder='Enter Author Name'
                                    style={{ fontSize: '14px' }}
                                    value={product.author}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    placeholder='Enter Price'
                                    style={{ fontSize: '14px' }}
                                    value={product.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genre" className="form-label">
                                    Genre
                                </label>
                                <select
                                    className="form-select"
                                    id="genre"
                                    name="genre"
                                    style={{ fontSize: '14px' }}
                                    value={product.genre || ''}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Genre</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Science">Romance</option>
                                    <option value="History">Mystery and Thriller</option>
                                    <option value="Fantasy">Sci-Fi</option>
                                    <option value="Biography">Fantasy</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder="Enter a description about the book"
                                    style={{ fontSize: '14px' }}
                                    value={product.description || ''}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="mt-5">
                            <h5 className="fw" style={{marginBottom: '50px'}}>Manage Stock</h5>
                                <label htmlFor="stock" className="form-label">
                                    Stock Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="stock"
                                    name="stock"
                                    placeholder="Enter Stock Number"
                                    style={{ fontSize: '14px' }}
                                    value={product.stock || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn mb-3 btn-primary"
                                style={{ backgroundColor: '#8d27ae', border: 'none', marginTop: '50px' }}
                            >
                                Add Product
                            </button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <h5 className="fw" style={{marginBottom: '50px'}}>Product Images</h5>
                        <div
                            className="border p-3"
                            style={{
                                borderRadius: '10px',
                                backgroundColor: '#f8f9fa',
                                textAlign: 'center',
                            }}
                        >
                            <div className="mb-3">
                                <label className="form-label">Choose Image Source</label>
                                <select
                                    className="form-select"
                                    value={imageSource}
                                    onChange={(e) => setImageSource(e.target.value)}
                                >
                                    <option value="url">URL</option>
                                    <option value="local">Local Upload</option>
                                </select>
                            </div>
                            {imageSource === 'url' ? (
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Image URL"
                                        value={newImage}
                                        onChange={(e) => setNewImage(e.target.value)}
                                    />
                                </div>
                            ) : (
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            )}
                            <div className="mt-3">
                                <h6 className="fw-bold">Uploaded Images</h6>
                                {product.images.length > 0 ? (
                                    <div className="d-flex flex-wrap gap-2">
                                        {product.images.map((image, index) => (
                                            <div key={index} style={{ position: 'relative' }}>
                                                <img
                                                    src={image}
                                                    alt={`Uploaded ${index}`}
                                                    style={{
                                                        width: '150px',
                                                        height: 'auto',
                                                        objectFit: 'cover',
                                                        borderRadius: '5px',
                                                        border: product.primaryImage === image ? '2px solid green' : '1px solid #ddd',
                                                    }}
                                                    onClick={() => handleSetPrimaryImage(image)}
                                                />
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    style={{
                                                        position: 'absolute',
                                                        top: '-5px',
                                                        right: '-5px',
                                                        borderRadius: '50%',
                                                    }}
                                                    onClick={() => handleRemoveImage(image)}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No images uploaded yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;