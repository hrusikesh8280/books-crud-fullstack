# Online Bookstore Web Application

A web application for an online bookstore, where users can browse, search, add, edit, and delete books.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse and search for books
- Add new books
- Edit existing books
- Delete books
- View detailed information about a book

## Technologies Used

### Frontend

- React.js
- Chakra UI
- React Router
- Axios (for API requests)

### Backend

The backend of the Online Bookstore web application is built using Node.js and Express.js. It serves as the server-side logic to manage books and handle CRUD (Create, Read, Update, Delete) operations.

### Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- RESTful API

### API Endpoints

The backend provides the following API endpoints to interact with the application:

#### 1. Get All Books

- **Endpoint:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books available in the bookstore.
- **Response:** Returns a JSON array of book objects.

#### 2. Get Book by ID

- **Endpoint:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieves detailed information about a specific book based on its ID.
- **Response:** Returns a JSON object representing the book.

#### 3. Add a New Book

- **Endpoint:** `/api/books`
- **Method:** `POST`
- **Description:** Adds a new book to the bookstore.
- **Request Body:** Should contain the book details (title, author, publication year, genre, price, description).
- **Response:** Returns the newly created book object.

#### 4. Update a Book

- **Endpoint:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Updates the details of a specific book based on its ID.
- **Request Body:** Should contain the updated book details (title, author, publication year, genre, price, description).
- **Response:** Returns the updated book object.

#### 5. Delete a Book

- **Endpoint:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a specific book based on its ID.
- **Response:** Returns a success message.

### Environment Variables

To run the backend, you need to set the following environment variables in a `.env` file:

- `PORT`: The port on which the server will run (e.g., `5000`).
- `MONGODB_URI`: The MongoDB connection string for storing book data

## Getting Started

### Frontend Setup

1. Clone the repository:

   git clone https://github.com/hrusikesh8280/books-crud-fullstack.git
   cd online-bookstore/frontend
   npm install
Create a .env file in the frontend directory and set the following environment variables:
    REACT_APP_API_BASE_URL=http://localhost:7000/api
npm start
The application will be available at http://localhost:3000.



