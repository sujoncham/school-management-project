import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;