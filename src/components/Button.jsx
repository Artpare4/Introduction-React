import React from "react";
import PropTypes from "prop-types";

function Button({ children = null, className = "", onClick = null, ...props }) {
  function stopPropagation(func) {
    func.stopPropagation();
    if (onClick != null) {
      onClick();
    }
  }
  return (
    <button onClick={stopPropagation} className={className} {...props}>
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
