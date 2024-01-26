import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
    if (!books || books.length === 0) {
        return <p>No books available.</p>;
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="40px">
            {books.map(book => (
                <BookCard key={book._id} book={book} />
            ))}
        </SimpleGrid>
    );
};

export default BookList;
