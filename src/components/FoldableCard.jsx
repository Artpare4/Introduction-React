import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";

function FoldableCard({
  children = "Content",
  title = "Titre",
  opened = false,
  ...props
}) {
  let classe = "foldable";
  if (!opened) {
    children = "";
  } else {
    classe += " shown";
    console.log(classe);
  }
  return (
    <Card title={title} classname={classe}>
      {children}
    </Card>
  );
}
FoldableCard.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  opened: PropTypes.bool,
};

export default FoldableCard;
