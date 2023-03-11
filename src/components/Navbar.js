import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' position='fixed'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><MDBIcon fas icon="comments" />  REVIEWSJET</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          
          <MDBNavbarNav >
           <div className=' d-flex align-items-center '>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='#'>About</MDBNavbarLink>
            <MDBNavbarLink href='#'>Product Details</MDBNavbarLink>
            {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'> */}
              <MDBNavbarLink href='#'>Reviews
            </MDBNavbarLink>
            </div>
            <div className='ms-auto d-flex'>
            <MDBNavbarLink href='#'><MDBBtn>Write a Review</MDBBtn></MDBNavbarLink>
            <MDBNavbarLink href='#'><MDBBtn>For Companies</MDBBtn></MDBNavbarLink>
            </div>
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}