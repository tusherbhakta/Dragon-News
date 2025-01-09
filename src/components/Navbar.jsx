import React from 'react';
import { Link } from 'react-router-dom';
import loginIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="">
            </div>
            <div className="text-[#706F6F] text-lg space-x-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className=" flex gap-4 items-center">
                <div className=''>
                    <img src={loginIcon} alt="" className='w-full' />
                </div>
                <button className='bg-[#403F3F] font-bold text-white px-5 py-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;