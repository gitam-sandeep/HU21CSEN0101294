import React from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useFetchProducts({ id });

    if (!products.length) return <p>Loading...</p>;

    const product = products[0]; // Since ID is unique, there's only one product

    return (
        <div className="product-details">
            <img src={`https://picsum.photos/400?random=${product.id}`} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.company}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>{product.available ? 'In Stock' : 'Out of Stock'}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
