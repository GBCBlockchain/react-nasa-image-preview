import React from 'react';


const Navbar = function(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
              <img src="../nasa.png" height="60" alt=""/>
          </a>
      </nav>
    );
};

export default Navbar;