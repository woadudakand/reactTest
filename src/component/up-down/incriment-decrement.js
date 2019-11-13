import React, { useState } from 'react';
import './style.css';
const UpDown = () => {
    const [ count, setCount ] = useState(0);
    const Increment = () => setCount(count + 1);
    const Decrement = () => {        
       count > 0 && setCount(count - 1);
    };
    return (
        <div className="wraper">
            <h3>Click on Plus and Minus</h3>
            <div>
                <button onClick={Decrement}>-</button>
                <span>{count}</span>
                <button onClick={Increment}>+</button>
            </div>
        </div>
    );
}

export default UpDown;
