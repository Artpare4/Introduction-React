import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

function Counter({before=null,after=null,className="",onChange=null,...props}){
    const [cpt, addOne] = useState(0);
    const clickHandler = () => {
        addOne(cpt + 1);
    };
    useEffect(()=>{
        if(onChange!=null){
            onChange(cpt);
        }
    })
    return (<Button className={className} onClick={clickHandler}>{before}{cpt}{after}</Button> );
}

Counter.propTypes={
    before: PropTypes.node,
    after: PropTypes.node,
    className:PropTypes.string,
    onChange:PropTypes.func
}

export default Counter;