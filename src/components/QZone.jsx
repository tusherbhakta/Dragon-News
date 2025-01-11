import React from 'react';
import swimming from '../assets/swimming.png';
import clas from '../assets/class.png';
import playground from '../assets/playground.png';
import bg from '../assets/bg.png'

const QZone = () => {
    return (
        <div className='mt-10'>
            <h2 className="font-bold text-lg mb-8">Q-Zone</h2>
            <div>
                <div className='p-2 border-dashed border-2 mb-5 border-slate-500 '>
                    <img src={swimming} alt="" className="w-full" />
                </div>
                <div className='p-2 border-dashed border-2 mb-5 border-slate-500 '>
                    <img src={clas} alt="" className="w-full" />
                </div>
                <div className='p-2 border-dashed border-2 border-slate-500 '>
                    <img src={playground} alt="" className="w-full" />
                </div>
            </div>
            <div className='mt-9'>
                <img src={bg} className='w-full' alt="" />
            </div>
        </div>
    );
};

export default QZone;