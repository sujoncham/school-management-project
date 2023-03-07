import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import LatestNews from '../LatestNews/LatestNews';
import LeftSideBar from '../LeftSideBar';
import RightSideBar from '../RightSideBar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto px-5 flex'>
            <div className='w-[20%]'>
                <LeftSideBar />
            </div>
            <div className='w-[60%]'>
                <Banner></Banner>
                <Services></Services>
                <Features></Features>
                <LatestNews></LatestNews>
            </div>
            <div className='w-[20%]'>
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;