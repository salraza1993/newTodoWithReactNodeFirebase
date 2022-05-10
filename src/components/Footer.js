import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const curretYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-3">
          <p className="mb-0 col-md-4 mb-0 text-muted">© {curretYear}, All rights reserved</p>

          <p className='mb-0 text-muted text-end fs-6'>
            Developed & Maintened by:
            <b> <Link to="http://salraza.com" className='text-info text-decoration-none'>Salman Raza</Link></b>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            In collaboration with:
            <b> <Link to="#" className='text-info text-decoration-none'>Azeem Mirza Baig</Link></b>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
