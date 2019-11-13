import React from 'react';
import btnCounter from '../../helper/btn-counter';
import { Button } from '../btn/btn';
const ClickBtn = (props) => {           
    const { count, event } = props;    
    return(
        <Button 
            click={ event } text={`Count By Click ${ count }`} 
            type='click'
        />
    );    
}
export default btnCounter(ClickBtn);
