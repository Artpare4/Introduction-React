import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

function Counter({before=null,after=null,className="",...props}){
    const [cpt, addOne] = useState(0);
    const clickHandler = () => {
        addOne(cpt + 1);
    };
    console.log(before);
    return (<Button className={className} onClick={clickHandler}>{props.before}{cpt}{props.after}</Button> );
}

Counter.propTypes={
    before: PropTypes.node,
    after: PropTypes.node,
    className:PropTypes.string
}

export default Counter;