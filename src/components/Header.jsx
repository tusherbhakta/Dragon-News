import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-5'>
            <div>
                <img className='max-w-[400px]' src={logo} alt="" />
            </div>
            <h1 className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h1>
            <p>
                {moment().format("dddd, MMMM DD, YYYY")}
            </p>
        </div>
    );
};

export default Header;