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
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 pt-20 gap-3'>
                <aside className='left col-span-3'>left navbar</aside>
                <aside className='col-span-6'>center content</aside>
                <aside className='col-span-3'>right navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;