import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            genre: 'Fiction',
            title: 'Sample Book',
            author: 'John Doe',
            price: 300,
            sellCount: 50,
        },
    ]);

    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
};