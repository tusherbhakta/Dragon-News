import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginWith = () => {
    return (
        <div>
            <h2 className="font-bold text-lg">Login With</h2>
            <div className='flex flex-col mt-4 gap-2'>
                <button className="py-2 rounded-lg hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-400 text-black-500 border-2 btn"><FaGoogle></FaGoogle> Login with google</button>
                <button className="py-2 rounded-lg hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-400 text-black-500 border-2 btn"><FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default LoginWith;