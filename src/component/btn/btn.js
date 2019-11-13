import React from 'react';

const btn = {
    padding: '5px',
    margin: '5px'
}

export const Button = (props) => {
    if(props.type === 'click') return <button onClick={props.click} style={btn}>{ props.text }</button> 
    else if (props.type === 'hover') return <button onMouseOver={props.click} style={btn}>{ props.text }</button>
    else if (props.type === 'dbl') return <button onDoubleClick={props.click} style={btn}>{ props.text }</button>
}