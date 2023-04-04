import React from 'react'

import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
   <footer className="text-center text-lg-start bg-dark text-white">
  <section className="d-flex justify-content-center justify-content-lg-between p-1">

  </section>
  <section className>
    <div className="container text-center text-md-start mt-6">
 
      <div className="row mt-3">
 
        <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-2">

          <h6 className="text-uppercase fw-bold mb-2">
            <i className="fas fa-gem me-3" /><h2> " CAR SELLING COMPANY "</h2>
          </h6>
          <h3> My definition of ‘innovative’ is <br/>providing value to the customer
          </h3>
        </div>
        <div className="col-md-2 ">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">SUV Cars</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Sports Cars</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3" />CDAC ACTS PATNA, BIHAR</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@carsellingcompany.com
          </p>
          <p><i className="fas fa-phone me-3" /> +91 7770025901</p>
          <p><i className="fas fa-print me-3" /> +91 234 567 89</p>
          
        </div>
      </div>
    </div>
    <center><h5>© 2023 Cars Selling Company. All Rights Reserved. | Email: helpdesk@carsselling.com</h5></center>
    <br/>  <br/>  

  </section>
</footer>
  )
}

export default Footer