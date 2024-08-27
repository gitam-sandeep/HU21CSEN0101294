import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.company}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>{product.available ? 'In Stock' : 'Out of Stock'}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductItem;
