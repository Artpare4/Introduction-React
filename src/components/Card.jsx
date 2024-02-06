import React from "react";
import PropTypes from "prop-types";

function Card({
  children = "Content",
  title = "Titre",
  classname = "",
  ...props
}) {
  return (
    <article className={`card ${classname}`} {...props}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  classname: PropTypes.string,
};

export default Card;
