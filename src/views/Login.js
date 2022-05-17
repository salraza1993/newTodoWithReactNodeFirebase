import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Loader from '../components/Loader';
import ReactLogoAnimation from '../components/ReactLogoAnimation';
import { useUserAuthContext } from '../contexts/AuthContexts';

const Login = () => {

  const { userLogin } = useUserAuthContext();

  // const formFields = { email: '', password: '' }
  const formFields = { email: 'mirza@test.com', password: 'test12345' }
  const [formValues, setFormValues] = useState(formFields)
  const [formErrorMessage, setFormErrorMessage] = useState(null)

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (formValues.email && formValues.password) {
      setFormErrorMessage(null)         
      userLogin(formValues.email, formValues.password)
    } else {
      setFormErrorMessage('All fields are required')
    }
  }

  useEffect(() => {
  }, [formValues]);

  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {/* <Loader /> */}
        <h2 className='text-center mb-4 text-info'>Sign In</h2>
        <form className="form" onSubmit={onSubmit} noValidate>
          <input 
            autoComplete='off'
            onInput={inputHandle}
            value={formValues.email}
            type="email" 
            name="email" 
            className='form-control form-control-lg' 
            placeholder="Enter Email Id / Username" />
          <input 
            autoComplete='off'
            onInput={inputHandle}
            value={formValues.password}
            type="password" 
            name="password" 
            className='form-control form-control-lg' 
            placeholder="Enter Password" />

          <div className={formErrorMessage ? "alert alert-danger" : "d-none"}>{ formErrorMessage }</div>

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
