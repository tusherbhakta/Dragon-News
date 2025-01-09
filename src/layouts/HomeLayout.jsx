import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-9'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </section>
            <nav>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;