import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (filters = {}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('YOUR_API_ENDPOINT', { params: filters });
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [filters]);

    return { products, loading, error };
};

export default useFetchProducts;