import React from "react";
import PropTypes from "prop-types";

import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    var icon = faCirclePlus;
  } else {
    classe += " shown";
    var icon = faCircleMinus;
  }
  return (
    <Card
      title={
        <>
          {title}
          <FontAwesomeIcon icon={icon} />
        </>
      }
      classname={classe}
    >
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