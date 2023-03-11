import React from 'react';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <Navbar/>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Every Review is an Experience!</h1>
              <h5 className='mb-3'>Check Ratings of Businesses, Read Reviews & Buy...</h5>

              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                We Welcome You Here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
