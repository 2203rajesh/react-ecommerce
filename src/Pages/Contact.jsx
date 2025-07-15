import React from 'react'

function Contact() {
  return (
    <div className='container my-5'>
      <h2 className='text-danger text-center'><i className="bi bi-phone" ></i> Contact </h2>
      <div className='row'>
        <div className='col-md-6 offset-3'>
          <form action=""></form>
          <p>Enter Name: <input type="text" className='form-control bg-warning' placeholder='Enter Name' /></p>
          <p>Enter Email: <input type="text" className='form-control bg-warning' placeholder='Enter Email' /></p>
          <p> Message: <textarea name="" id="" className='form-control bg-warning'></textarea></p>
          <p className='text-center'>
            <button className='btn btn-danger'>Contact</button>
          </p>


        </div>

      </div>
    </div>
  )
}

export default Contact