import React from 'react';
import { Box, Container, Text, Stack, Icon, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box bg="gray.100" color="gray.700">
            <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
                <Text>© {new Date().getFullYear()} Bookstore. All rights reserved.</Text>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'#'}><Icon as={FaFacebook} w={5} h={5} /></Link>
                    <Link href={'#'}><Icon as={FaTwitter} w={5} h={5} /></Link>
                    <Link href={'#'}><Icon as={FaInstagram} w={5} h={5} /></Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
