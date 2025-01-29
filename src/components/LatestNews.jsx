import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 bg-[#F3F3F3] p-3 '>
            <p className="text-black px-6 py-2 justify-center items-center bg-[#D72050]">Latest</p>
            <Marquee className="space-x-10" pauseOnHover={true} speed={70}>
                <Link to='/news'>
                    Match Highlights: Germany vs Spain — as it happened!  Match Highlights: Germany vs Spain as
                </Link>
                <Link to='/news'>
                    Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs
                </Link>
                <Link to='/news'>
                    Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;