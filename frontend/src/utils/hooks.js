import { useState, useEffect } from 'react';
import api from './api';
import { API_ENDPOINTS } from './constants';

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await api.get(API_ENDPOINTS.BOOKS);
                setBooks(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading, error };
};
