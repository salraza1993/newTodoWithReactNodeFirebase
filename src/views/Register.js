import React, { useEffect, useState } from 'react'
import ReactLogoAnimation from '../components/ReactLogoAnimation';
// import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import './Form.scss'
import { useUserAuthContext } from '../contexts/AuthContexts';
import axios from 'axios';

function Register() {
  
  const { userRegistration, emailValidFormat } = useUserAuthContext();
  
  const formFields = { username: '', firstName: '', lastName: '', email: '', password: '' }
  const [ formValues, setFormValues ] = useState(formFields);
  const [ error, setError ] = useState(false)
  const [ formError, setFormError ] = useState({})

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleInput = (event) => {
    const { name, value } = event.target 
    setFormValues({ ...formValues, [name]: value })
  }
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormError(formValidation(formValues))
    setError(true);
    
    if (!error) {
      axios.post('http://localhost:5000/auto-config-vue/us-central1/auth/register', {
        username: formValues.username,
        email: formValues.email,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        passwordOne: formValues.password,
        todos: [{
          todo: 'First Todo registeration'
        }]
      }).then(response => {
        console.log(response.data.message);
      }).catch(error => {
        console.log(error.response);
      });      
    }
    
  }
  const resetForm = () => setFormValues(formFields);
  const formValidation = (value) => {
    const errors = {};
    if (!value.username) {
      errors.username = "User name is required"
    }
    if (!value.firstName) {
      errors.firstName = "First name is required"
    }
    if (!value.lastName) {
      errors.lastName = "Last name is required"
    }
    if (!value.password) {
      errors.password = "Password is required"
    } else if (value.password.length <= 5) {
      errors.password = "Password must be at least 6 characters"
    }
    if (!value.email) {
      errors.email = "Email address is required"
    } else if (!regex.test(value.email)) {
      errors.email = "This email is not a valid format"
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formError).length === 0 && error) {}
  }, [formValues]);

  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {/* <Loader /> */}

        <h2 className='text-center mb-4 text-info'>Register</h2>
        <form className="form" onSubmit={handlerSubmit} noValidate>
          <input
            autoComplete='off'
            type="text"
            name="username"
            value={ formValues.username }
            onChange={ handleInput }
            className={
              formError.username ? 'form-control form-control-lg is-invalid' :
              !formError.usernam && error ? 'form-control form-control-lg is-valid' : 'form-control form-control-lg'
            }
            placeholder="Enter name" />
          <p className={ formError.username ? "text-danger mb-0" : "d-none" } role="alert">{ formError.username }</p>

          <input
            autoComplete='off'
            type="text"
            name="firstName"
            value={ formValues.firstName }
            onChange={ handleInput }
            className={
              formError.firstName ? 'form-control form-control-lg is-invalid' :
              !formError.firstName && error ? 'form-control form-control-lg is-valid' : 'form-control form-control-lg'
            }
            placeholder="Enter Frist Name" />
          <p className={ formError.firstName ? "text-danger mb-0" : "d-none" } role="alert">{ formError.firstName }</p>


          <input
            autoComplete='off'
            type="text"
            name="lastName"
            value={ formValues.lastName }
            onChange={ handleInput }
            className={
              formError.lastName ? 'form-control form-control-lg is-invalid' :
              !formError.lastName && error ? 'form-control form-control-lg is-valid' : 'form-control form-control-lg'
            }
            placeholder="Enter Last Name" />
          <p className={ formError.lastName ? "text-danger mb-0" : "d-none" } role="alert">{ formError.lastName }</p>

          <input
            autoComplete='off'
            type="email"
            name="email"
            value={ formValues.email }
            onChange={ handleInput }
            className={
              formError.email ? 'form-control form-control-lg is-invalid' :
              !formError.email && error ? 'form-control form-control-lg is-valid' : 'form-control form-control-lg'
            }
            placeholder="Enter Email Id" />
          <p className={ formError.email ? "text-danger mb-0" : "d-none" } role="alert">{ formError.email }</p>

          <input
            autoComplete='off'
            type="password"
            name="password"
            value={ formValues.password }
            onChange={ handleInput }
            className={
              formError.password ? 'form-control form-control-lg is-invalid' :
              !formError.password && error ? 'form-control form-control-lg is-valid' : 'form-control form-control-lg'
            }
            placeholder="Enter Password" />
          <p className={ formError.password ? "text-danger mb-0" : "d-none"} role="alert">{ formError.password }</p>          

          <button
            className="btn btn-info px-4 fw-bold btn-lg text-uppercase"
            type="submit">
            Login
          </button>
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