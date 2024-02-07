import React, { useState } from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard.jsx";

function Cards(cardsData = null, ...props) {
  const [openedId] = useState(1);
  const FoldableCardArray = cardsData.cardsData.map((item) => (
    <FoldableCard opened={openedId === item.id} title={item.title}>
      {item.content}
    </FoldableCard>
  ));
  return <div className="cards">{FoldableCardArray}</div>;
}

Cards.propTypes = {
  cardsData: [PropTypes.arrayOf(PropTypes.shape(FoldableCard))],
};
export default Cards;
