import React, { Fragment, lazy, Suspense } from 'react';

const Layout = lazy(() => import('../../component/layout'));
const Click = lazy(() => import('../../component/counter-btn/click-btn'));
const Hover = lazy(() => import('../../component/counter-btn/hover-btn'));
const Dbl = lazy(() => import('../../component/counter-btn/dbl-click-btn'));
const style = {
    width : '400px', 
    height : '400px',
    margin: '100px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

const index = () => {
    return (
        <Fragment>            
            <Suspense fallback={<div className="loader">Loading........</div>}>
                <Layout />
                <div style={style}>
                    <h3>Increment Button</h3>
                    <div className="btn-group">
                        <Click />           
                        <Hover />           
                        <Dbl />
                    </div>
                </div>               
            </Suspense>            
        </Fragment>
    );
}
export default index;
