import React from 'react';
import Banner from '../Banner/Banner';
import ProductLists from '../ProductLists/ProductLists';
import Subscribe from '../Subscribe/Subscribe';
import TopServices from '../TopServices/TopServices';
import WhyAreWeDifferent from '../WhyAreWeDifferent/WhyAreWeDifferent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductLists></ProductLists>
            <TopServices></TopServices>
            <WhyAreWeDifferent></WhyAreWeDifferent>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;