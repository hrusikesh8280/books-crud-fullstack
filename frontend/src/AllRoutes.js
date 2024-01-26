import React from 'react'
import {Routes,Route} from "react-r"
import HomePage from './pages/HomePage'
import AddBookPage from './pages/AddBookPage'
import EditBookPage from './pages/EditBookPage'
import BookDetailsPage from './pages/BookDetailsPage'
const AllRoutes = () => {

  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="add-book" element={<AddBookPage />} />
    <Route path="edit-book/:id" element={<EditBookPage />} />
    <Route path="book/:id" element={<BookDetailsPage />} />
    <Route path="*" element={<NoMatch />} />
</Routes>
  )
}

export default AllRoutes