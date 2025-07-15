import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <div class='card text-center text-light bg-danger'>
    <div className='card-header'>
      <i className='bi bi-cart-plus'></i>Ecommerce App
    </div>
    <div className='card-body'>
      <p className='card-text'>With supporting text below as a natural lead in to additional content.</p> 
      <Link className='text-warning' to={'/'}>Home</Link>
    </div>
    <div className='card-footer text-light'>
      Copyright &copy;2025

    </div>

</div>
  )
}

export default Footer