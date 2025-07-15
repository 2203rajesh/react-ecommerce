import React from 'react';
import abouting from '../assets/shoebasket.jpg';

function About() {
  return (
    <div className='container my-5'>
      <h2 className='text-warning text-center mb-4'>
        <i className='bi bi-question-circle'></i> About Us
      </h2>

      <div className='row align-items-center g-4'>
        {/* Left Image */}
        <div className='col-12 col-md-6'>
          <img
            src={abouting}
            className='img-fluid rounded shadow-sm'
            style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            alt='About Us'
          />
        </div>

        {/* Right Text */}
        <div className='col-12 col-md-6'>
          <p className='text-secondary text-justify lh-lg'>
            <strong>E-commerce</strong> (electronic commerce) refers to the buying and selling of goods and services online. From shirts and t-shirts to electronic gadgets,
            almost everything is now available at your fingertips. This transformation has revolutionized the way industries operate.
            <br /><br />
            One such product is our <strong>all-cotton flannel shirt</strong> — soft, breathable, and stylish. Made from 100% cotton, it’s perfect for cooler days. The button-up closure and classic plaid design make it a versatile addition to any wardrobe.
            <br /><br />
            Proudly <strong>Made in Italy</strong>, this shirt brings you comfort, durability, and timeless fashion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
