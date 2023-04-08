import React from 'react';
import Banner from '../Banner/Banner';
import ProductLists from '../ProductLists/ProductLists';
import Subscribe from '../Subscribe/Subscribe';
import WhyAreWeDifferent from '../WhyAreWeDifferent/WhyAreWeDifferent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductLists></ProductLists>
            <WhyAreWeDifferent></WhyAreWeDifferent>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;