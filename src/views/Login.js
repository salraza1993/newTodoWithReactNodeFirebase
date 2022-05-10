import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from '../components/Loader';
import ReactLogoAnimation from '../components/ReactLogoAnimation';

const Login = () => {
  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {/* <Loader /> */}
        <h2 className='text-center mb-4 text-info'>Sign In</h2>
        <form className="form">
          <input 
            type="email" 
            className='form-control form-control-lg' 
            placeholder="Enter Email Id / Username" 
            required />
          <input 
            type="password" 
            className='form-control form-control-lg' 
            placeholder="Enter Password" 
            required />

          <button type="submit" className="btn btn-info px-4 fw-bold btn-lg text-uppercase">Login</button>

          <Link className='forget_password d-inline-block' href to="/reset-password">Forgot Password?</Link>
        </form>
      </div>
      <p className='mt-4 text-secondary text-center'>
        Don't have an Account?
        <br />
        <Link to="/signup" className='btn btn-outline-info mt-3 px-4 btn-sm'>Register</Link>
      </p>
    </div>
  );
}

export default Login;
