import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  useColorModeValue,
  Stack,
  Button
} from '@chakra-ui/react';
import { formatCurrency } from '../utils/FormatHelper';
import IMG from "../utils/Brown Rusty Mystery Novel Book Cover (1).png";

const BookCard = ({ book }) => {
  const {
    title = 'Unknown Title',
    author = 'Unknown Author',
    publicationYear,
    genre = 'General',
    price,
    description,
    imageUrl
  } = book || {};

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p="4"  // Reduced padding
      maxW="280px"  // Reduced max width
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      borderColor={borderColor}
      boxShadow="md"
    >
      <Image
        src={IMG}
        alt={`Cover of ${title}`}
        borderRadius="md"
        objectFit="cover"
        htmlWidth="100%"
        htmlHeight="140px" 
      />
      <Box p="4"> 
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {genre}
          </Badge>
          {publicationYear && (
            <Text as="span" ml="2" color="gray.600" fontSize="sm">
              {publicationYear}
            </Text>
          )}
        </Box>
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Text>
        <Text as="p" fontSize="sm" color="gray.600">
          {author}
        </Text>
        {price !== undefined && (
          <Text as="p" fontSize="sm" color="gray.800">
            {formatCurrency(price)}
          </Text>
        )}
        {description && (
          <Text mt="2" fontSize="sm" color="gray.600">
            {description.length > 100 ? description.substring(0, 100) + '...' : description}
          </Text>
        )}

        <Stack direction="row" spacing="4" align="center" mt="3"> 
          <Button colorScheme="blue" size="sm">
            Details
          </Button>
          <Button colorScheme="red" size="sm">
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookCard;
