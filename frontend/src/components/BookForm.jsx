import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  Button,
  Stack,
  Box,
  Flex
} from '@chakra-ui/react';
import { GENRES } from '../utils/constants';
import ErrorMessageBox from './ErrorMessageBox';

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [bookData, setBookData] = useState(initialData);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookData);
  };

  return (
    <Flex alignItems="center" justifyContent="center" p={5}>
      <Box width={{ base: "full", md: "600px" }} borderWidth="1px" borderRadius="lg" p={5}>
        <form onSubmit={handleSubmit}>
        {error && <ErrorMessageBox message={error} />}
          <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input id="title" name="title" value={bookData.title || ''} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="author">Author</FormLabel>
            <Input id="author" name="author" value={bookData.author || ''} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="publicationYear">Publication Year</FormLabel>
            <NumberInput max={new Date().getFullYear()} min={1000}>
              <NumberInputField id="publicationYear" name="publicationYear" value={bookData.publicationYear || ''} onChange={handleChange} />
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <Select id="genre" name="genre" value={bookData.genre || ''} onChange={handleChange} placeholder="Select genre">
              {GENRES.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Price</FormLabel>
            <NumberInput precision={2} step={0.01}>
              <NumberInputField id="price" name="price" value={bookData.price || ''} onChange={handleChange} />
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea id="description" name="description" value={bookData.description || ''} onChange={handleChange} />
          </FormControl>

          <Button colorScheme="blue" type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
    </Flex>
  );
};

export default BookForm;
