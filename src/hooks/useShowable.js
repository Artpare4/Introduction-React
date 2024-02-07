import { useState } from "react";
import { bool } from "prop-types";

function useShowable(show = bool, baseClassName = "") {
  const [isShown, setIsShown] = useState(show);
  const clickHandler = () => {
    setIsShown(!isShown);
  };
  const className= baseClassName+ (isShown ? " shown" : "")

  return {
    isShown,
    clickHandler,
    setIsShown,
    className,
  };
}

export default useShowable;
