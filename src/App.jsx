import React from 'react'
import './style/css/bootstrap.css'
import './style/css/style.css'
 
import Nav from './layouts/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import CategoryBooks from './pages/categoryBooks'


function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='technical-support' element={<CategoryBooks />} />
        <Route path='Office-administration' element={<CategoryBooks />} />
        <Route path='Electronics-management' element={<CategoryBooks />} />
        <Route path='Mechanics-management' element={<CategoryBooks />} />
      </Routes>
    </React.Fragment>
  )
}

export default App