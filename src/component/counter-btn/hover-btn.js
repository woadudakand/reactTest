import React from 'react';
import btnCounter from '../../helper/btn-counter';
import { Button } from '../btn/btn';

const HoverBtn = (props) => { 
    const {count, event } = props;
    return(
        <Button 
            click={ event } text={`Count By Hover ${ count }`}
            type='hover'
        />
    );   
}
export default btnCounter(HoverBtn);
