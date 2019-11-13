import React, { Fragment, lazy, Suspense } from 'react';
const Layout = lazy(() => import('../../component/layout'));
const Counter = lazy(() => import('../../component/up-down/incriment-decrement'));

const About = () => {
    return (
        <Fragment>
            <Suspense fallback={<div className="loader">Loading........</div>}>
                <Layout />
            </Suspense>            
            <Suspense fallback={<div className="loader">Loading........</div>}>
                <Counter />
            </Suspense>
        </Fragment>
    );
} 


export default About;
