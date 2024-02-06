import React from "react";
import PropTypes from "prop-types";

function Card({
  children = "Content",
  title = "Titre",
  classname = "",
  onClick = () => {},
  ...props
}) {
  return (
    <button onClick={onClick} className={`card ${classname}`} {...props}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </button>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  classname: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
