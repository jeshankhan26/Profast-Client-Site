import React from 'react';
import Navbar from '../../Components/Frontend/Common/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
            
        </>
    );
};

export default Root;