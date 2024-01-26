import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const ErrorMessageBox = ({ message }) => {
    if (!message) return null;

    return (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
};

export default ErrorMessageBox;
