import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../../Components/Frontend/Home/Banner';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Profast | Home Page
            </title>
        </Helmet>
        <Banner></Banner>
            
        </>
    );
};

export default Home;