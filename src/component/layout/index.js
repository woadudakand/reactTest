import React, {lazy, Suspense} from 'react';
import './style.css';

const HeaderLogo = lazy(() => import('../nav/header_logo'));
const NavItems = lazy(() => import('../nav/items'));

const NavLayout = () => {
    return (
        <nav>
            <Suspense fallback={<div>Loading...</div>}>
                <HeaderLogo />
                <NavItems />
            </Suspense>
        </nav>
    );
}

export default NavLayout;
