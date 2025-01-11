import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <h2>{data.length}category news</h2>
        </div>
    );
};

export default CategoryNews;