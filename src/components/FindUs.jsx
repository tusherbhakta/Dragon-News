import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='mt-10'>
            <h2 className="text-lg font-bold">Find Us On</h2>
            <div className="join join-vertical mt-4 w-full">
                <button className="btn h-auto py-4 text-lg rounded-sm hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-200 text-black-500 border join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn h-auto py-4 text-lg rounded-sm hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-200 text-black-500 border join-item"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn h-auto py-4 text-lg rounded-sm hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-200 text-black-500 border join-item"><FaX></FaX> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;