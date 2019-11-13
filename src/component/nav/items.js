import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const ItemList = () => {
    return (
        <Fragment>
            <ul id="navBar">
                <li>
                    <NavLink to="/">Counter</NavLink>                    
                </li>
                <li>
                    <NavLink to="/inc_dec">Inc & Dec</NavLink>                    
                </li>                           
            </ul>
        </Fragment>
    )
}

export default ItemList;
