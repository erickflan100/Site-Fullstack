import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import { PrivateRoute } from './auth/privateRoute'
import Product from './pages/products'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          }
        />
        <Route path='/products' element={<Product/>} />
      </Routes>
    </Router>
  )
}

export default App;