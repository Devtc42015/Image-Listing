import React from 'react';
import logo from './../logo.svg';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/"><img src={logo} /></a>
      {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> */}
      <div className="siteTitle">
        <p className="">Image Listing</p>
      </div>
      {/* </div> */}
    </nav>
  </div>
)

export default Header;