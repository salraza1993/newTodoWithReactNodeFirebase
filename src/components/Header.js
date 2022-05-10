import React from 'react';
import './Header.scss'
import appLogo from '../assets/app-logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-dark text-white d-flex justify-content-between align-items-center">
      <div className="logo-container">
        <Link to='/'>
          <img src={appLogo} width="130" alt="" />
        </Link>
      </div>
      <div className="text-end d-flex gap-3">
        <Link to="/login" type="button" className="btn btn-lg btn-outline-info d-flex align-items-center">
          <i className="fa-solid fa-user me-3"></i>
          Login
        </Link>
        <Link to='/signup' type="button" className="btn btn-lg btn-info d-flex align-items-center">
          <i className="fa-solid fa-user-edit me-2"></i>
          Sign-up
        </Link>
      </div>
    </header>
  );
}

export default Header;
