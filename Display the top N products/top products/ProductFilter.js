import React from 'react';

const ProductFilter = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="product-filter">
            <select name="category" onChange={handleChange}>
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
            </select>
            <select name="company" onChange={handleChange}>
                <option value="">All Companies</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
            </select>
            <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                onChange={handleChange}
            />
            <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                onChange={handleChange}
            />
            <select name="rating" onChange={handleChange}>
                <option value="">All Ratings</option>
                <option value="4">4 & up</option>
                <option value="3">3 & up</option>
            </select>
            <select name="availability" onChange={handleChange}>
                <option value="">All</option>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
            </select>
        </div>
    );
};

export default ProductFilter;