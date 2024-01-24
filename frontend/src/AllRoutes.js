import React from 'react'
import {Routes,Route} from "react-r"
const AllRoutes = () => {

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  )
}

export default AllRoutes