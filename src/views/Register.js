import React from 'react'
import ReactLogoAnimation from '../components/ReactLogoAnimation';
// import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import './Form.scss'

function Register() {
  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {/* <Loader /> */}
        <h2 className='text-center mb-4 text-info'>Register</h2>
        <form className="form">
          <input
            type="text"
            className='form-control form-control-lg'
            placeholder="Enter name"
            required />

          <input
            type="text"
            className='form-control form-control-lg'
            placeholder="Enter Frist Name"
            required />

          <input
            type="text"
            className='form-control form-control-lg'
            placeholder="Enter Last Name"
            required />

          <input
            type="email"
            className='form-control form-control-lg'
            placeholder="Enter Email Id"
            required />

          <input
            type="password"
            className='form-control form-control-lg'
            placeholder="Enter Password"
            required />


          <button type="submit" className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>

          {/* <div className={error ? "alert alert-danger mb-0" : "d-none"} role="alert">{errorMessage}</div> */}
          {/* <div className={profileCreated ? 'alert alert-success' : 'd-none'}>
            Your profile has been created successfully. Please login with your email address and password.
          </div> */}

        </form>
      </div>
      <p className='mt-4 text-secondary text-center'>
        Already have an Account?
        <br />
        <Link to="/login" className='btn btn-outline-info mt-3 px-4 btn-sm'>Login</Link>
      </p>
    </div>
  )
}

export default Register