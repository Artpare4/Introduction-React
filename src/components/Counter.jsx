import React, {useState} from "react";
import PropTypes from "prop-types";

function Counter({before=null,after=null,className="",...props}){
    const [cpt, addOne] = useState(0);
    const clickHandler = () => {
        addOne(cpt + 1);
    };
}

Counter.propTypes={
    before: PropTypes.node,
    after: PropTypes.node,
    className:PropTypes.string
}