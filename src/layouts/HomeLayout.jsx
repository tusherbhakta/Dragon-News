import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/layoutComponents/LeftNav';
import RightNav from '../components/layoutComponents/RightNav';
import CenterContent from '../components/layoutComponents/CenterContent';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-9'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 pt-20 gap-5'>
                <aside className='left col-span-3'><LeftNav></LeftNav></aside>
                <aside className='col-span-6'><Outlet></Outlet></aside>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;