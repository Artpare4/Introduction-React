import React from "react";
import PropTypes from "prop-types";

function Button({ children = null, className = "",onClick=()=>{},...props }) {
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
