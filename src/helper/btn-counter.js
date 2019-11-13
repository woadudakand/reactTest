import React, { useState } from 'react';

const BtnCounter = (OrginalProps) => {

    const Counter = () => {
        const [count, setCount ] = useState(0);
        const handaleChange = () => {
            setCount(count + 1);
        }       
        return (
            <OrginalProps event={handaleChange} count={count} />
        );       
    }
    return Counter;      
}
export default BtnCounter;
