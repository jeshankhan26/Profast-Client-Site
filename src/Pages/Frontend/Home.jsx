import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../../Components/Frontend/Home/Banner';
import Feathers from '../../Components/Frontend/Home/Feathers';
import Services from '../../Components/Frontend/Home/Services';
import Brands from '../../Components/Frontend/Home/Brands';
import Testimonial from '../../Components/Frontend/Home/Testimonial';
import FAQ from '../../Components/Frontend/Home/FAQ';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Fast-Track | Home Page
            </title>
        </Helmet>
        <div className='bg-[#EAECED]'>
            <Banner></Banner>
        <Feathers></Feathers>
        <Services></Services>
        <Brands></Brands>
        <Testimonial></Testimonial>
        <FAQ></FAQ>
        </div>
            
        </>
    );
};

export default Home;