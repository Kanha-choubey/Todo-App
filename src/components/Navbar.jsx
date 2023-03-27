import React from "react";
import PropTypes from "prop-types";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-1">
        <a href="#" className="brand-logo center">
          "Ultimate Todo List"
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.defaultProps = {
  brandName: "I am Default Value",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  version: PropTypes.number,
};
