import React from 'react';
import Shoe1 from '../assets/shoe1.jpg';
import Shoe2 from '../assets/shoe2.jpg';
import Shoe3 from '../assets/shoe3.jpg';
import Shoe4 from '../assets/shoe4.jpg';
import Shoe5 from '../assets/shoe5.jpg';
import Shoe6 from '../assets/shoe6.jpg';

function Products() {
  const Product = [
    {
      id: 1,
      productName: 'Shoes',
      color: 'pink',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe1,
    },
    {
      id: 2,
      productName: 'Shoes',
      color: 'brown',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe2,
    },
    {
      id: 3,
      productName: 'Shoes',
      color: 'brown',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe3,
    },
    {
      id: 4,
      productName: 'Shoes',
      color: 'Red',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe4,
    },
    {
      id: 5,
      productName: 'Shoes',
      color: 'blue',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe5,
    },
    {
      id: 6,
      productName: 'Shoes',
      color: 'white',
      sizes: '7,8,9,10',
      oldprice: 2199,
      newprice: 1199,
      productImage: Shoe6,
    },
  ];

  return (
    <div className='container my-4'>
      <h2 className='text-danger text-center mb-4'>
        <i className='bi bi-fire'></i> Products
      </h2>

      <div className='row g-4'>
        {Product.map((product, index) => (
          <div className='col-12 col-sm-6 col-lg-4 col-xl-3' key={index}>
            <div className='card h-100 shadow-sm'>
              <img
                src={product.productImage}
                className='card-img-top'
                alt={product.productName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{product.productName}</h5>
                <p className='card-text mb-1'>Color: {product.color}</p>
                <p className='card-text mb-1'>Sizes: {product.sizes}</p>
                <p className='card-text text-danger text-decoration-line-through mb-1'>
                  Old Price: ₹{product.oldprice}
                </p>
                <p className='card-text fw-bold text-success mb-3'>
                  New Price: ₹{product.newprice}
                </p>
                <a href='#' className='btn btn-warning mt-auto w-100'>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
