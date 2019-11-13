import React from 'react';
import btnCounter from '../../helper/btn-counter';
import { Button } from '../btn/btn';

const DblClickBtn =  (props) => {    
    const {count, event } = props
    return(
        <Button 
            click={ event } text={`Count By dbl click ${ count }`}
            type="dbl"
        />
    )    
}
export default btnCounter(DblClickBtn);
