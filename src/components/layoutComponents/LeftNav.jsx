import React, { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);
    return (
        <div>
            <h1 className="font-bold">All Catagories:({categories.length})</h1>
            <div className='flex flex-col mt-5'>
                {
                    categories.map((category) => <button className='btn h-full text-lg hover:text-black text-[#9F9F9F]  hover:bg-[#E7E7E7]  py-7' key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNav;