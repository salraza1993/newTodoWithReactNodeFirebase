import React, { /* useRef, useState */ useReducer } from 'react'
import ReactLogoAnimation from '../components/ReactLogoAnimation';
// import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import './Form.scss'
import { useUserAuthContext } from '../contexts/AuthContexts';

function Register() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SetUserName": return {...state, username: {value: action.value, hasErrors: false, isChecked: true}}
      case "SetFirstName": return {...state, firstName: {value: action.value, hasErrors: false, isChecked: true}}
      case "SetLastName": return {...state, lastName: {value: action.value, hasErrors: false, isChecked: true}}
      case "SetEmail": return {...state, email: {value: action.value, hasErrors: false, isChecked: true}}
      case "SetPassword": return { ...state, password: {value: action.value, hasErrors: false, isChecked: true}}
      case "ValidateFields": {
        return validateForm(state);
      }
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    username: {
      value: "",
      errorMessage: "",
      hasErrors: true,
      isChecked: false
    },
    firstName: {
      value: "",
      errorMessage: "",
      hasErrors: true,
      isChecked: false
    },
    
    lastName: {
      value: "",
      errorMessage: "",
      hasErrors: true,
      isChecked: false
    },
    email: {
      value: "",
      errorMessage: "",
      hasErrors: true,
      isChecked: false
    },
    password: {
      value: "",
      errorMessage: "",
      hasErrors: true,
      isChecked: false
    },
    hasErrors: true
  })
  // const [userName, setUserName] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { userRegistration, emailValidFormat } = useUserAuthContext();
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ValidateFields"})
    if (state.hasErrors) {
      console.log("form is not valid", state)
    } else {
      console.log(state.hasErrors)
    }
    // console.log(emailValidFormat);
    
    // if (userName && firstName && lastName && email && password) {
      
    //   formResetValues()
    // } else {

    // }

    // console.log(userName, firstName, lastName, email, password);
    // userRegistration('sadfsadf');
  }

  // const formResetValues = () => {
  //   setUserName('');
  //   setFirstName('');
  //   setLastName('');
  //   setEmail('');
  //   setPassword('')
  // }

  return (
    <div className="form_container flex-column">
      <ReactLogoAnimation />
      <div className="form_sub_container">
        {/* <Loader /> */}
        <h2 className='text-center mb-4 text-info'>Register</h2>
        <form className="form">
          <input
            type="text"
            onChange={e => dispatch({type: "SetUserName", value: e.target.value}) }
            className={state.username.isChecked && state.username.hasErrors ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'}
            placeholder="Enter name"
            required />

          <input
            type="text"
            onChange={e => dispatch({ type: "SetFirstName", value: e.target.value }) }
            className='form-control form-control-lg'
            placeholder="Enter Frist Name"
            required />

          <input
            type="text"
            onChange={e => dispatch({ type: "SetLastName", value: e.target.value }) }
            className='form-control form-control-lg'
            placeholder="Enter Last Name"
            required />

          <input
            type="email"
            onChange={e => dispatch({ type: "SetEmail", value: e.target.value }) }
            className='form-control form-control-lg'
            placeholder="Enter Email Id"
            required />

          <input
            type="password"
            onChange={e => dispatch({ type: "SetPassword", value: e.target.value }) }
            className='form-control form-control-lg'
            placeholder="Enter Password"
            required />


          <button
            onClick={e => handlerSubmit(e)}
            className="btn btn-info px-4 fw-bold btn-lg text-uppercase"
            type="submit">
            Login
          </button>

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

  function validateForm(state) {
    const updatedState = state;
    if (state.username.hasErrors) {
      updatedState.username.errorMessage = "Username cannot be empty";
    }
    if (state.firstName.hasErrors) {
      updatedState.firstName.errorMessage = "First Name cannot be empty";

    }
    if (state.lastName.hasErrors) {
      updatedState.lastName.errorMessage = "Last Name cannot be empty";

    }
    if (state.email.hasErrors) {
      updatedState.email.errorMessage = "Email cannot be empty";
    }
    if (state.password.hasErrors) {
      updatedState.password.errorMessage = "Passowrd cannot be empty";
    }
    if (!updatedState.password.hasErrors || !updatedState.username.hasErrors || !updatedState.firstName.hasErrors || !updatedState.lastName.hasErrors || !updatedState.email.hasErrors) {
      updatedState.hasErrors = true;
    }
    return updatedState;
  }
}

export default Register