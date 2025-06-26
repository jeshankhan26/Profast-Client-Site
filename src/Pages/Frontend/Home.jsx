import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../../Components/Frontend/Home/Banner';
import Feathers from '../../Components/Frontend/Home/Feathers';
import Services from '../../Components/Frontend/Home/Services';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Profast | Home Page
            </title>
        </Helmet>
        <div className='bg-[#EAECED]'>
            <Banner></Banner>
        <Feathers></Feathers>
        <Services></Services>
        </div>
            
        </>
    );
};

export default Home;