import React from 'react';
import Classes from './Button.css';
const button = (props) => {
    let style;
    if (props.disabled) {
        style = {
            cursor: 'not-allowed'
        };
    }
    return (
        <button disabled={props.disabled} className={[Classes.Button, Classes[props.btnType]].join(' ')}
            onClick={props.clicked} style={style}>
            {props.children}
        </button>
    );

};
export default button;