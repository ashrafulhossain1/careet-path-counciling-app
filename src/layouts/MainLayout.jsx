import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className=' '>
            <div className=' bg-teal-700 sticky top-0 z-50 backdrop-blur-xl'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-320px)] '>
                <Outlet></Outlet>
            </div>
            <div className='bg-teal-700'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;