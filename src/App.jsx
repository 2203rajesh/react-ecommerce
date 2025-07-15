import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Product />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
            <Footer/>
        </BrowserRouter >





    )
}

export default App