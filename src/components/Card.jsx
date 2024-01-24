import React from "react";
import PropTypes from "prop-types";

function Card({ title = "Titre", ...props }) {
  return (
    <article className="card" {...props}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
