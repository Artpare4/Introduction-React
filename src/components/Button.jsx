import React from "react";
import PropTypes from "prop-types";

function Button({ children = null, className = "", ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default Button;
