import React, { useState } from "react";
import PropTypes from "prop-types";

import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card.jsx";
import useShowable from "../hooks/useShowable.js";

function FoldableCard({
  children = "Content",
  title = "Titre",
  opened = false,
  onToggleOpened = null,
  ...props
}) {
  const classe = "foldable";
  const show = useShowable(opened, classe);
  if (!show.isShown) {
    children = "";
    var icon = faCirclePlus;
  } else {
    var icon = faCircleMinus;
  }
  return (
    <Card
      onClick={show.clickHandler}
      title={
        <>
          {title}
          <FontAwesomeIcon icon={icon} />
        </>
      }
      classname={show.className}
    >
      {children}
    </Card>
  );
}
FoldableCard.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  opened: PropTypes.bool,
  onToggleOpened: PropTypes.func,
};

export default FoldableCard;
