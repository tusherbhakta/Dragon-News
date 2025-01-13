import React from 'react';
import { FaEye, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const {
        author,
        title,
        thumbnail_url,
        details,
        rating,
        total_view,
        category_id,
    } = news;

    return (
        <div className="border rounded-lg shadow-md p-6 bg-white mb-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h4 className="font-bold text-gray-800">{author.name}</h4>
                        <p className="text-sm text-gray-500">{new Date(author.published_date).toDateString()}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-400 cursor-pointer" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>

            {/* Thumbnail */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-52 object-cover rounded-lg mb-4"
            />

            {/* Details */}
            <p className="text-gray-700 text-sm mb-4">
                {details.length > 150 ? `${details.slice(0, 150)}...` : details}
                <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer"> Read More</Link>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {Array.from({ length: Math.floor(rating.number) }, (_, i) => (
                            <FaStar key={i} />
                        ))}
                        {rating.number % 1 > 0 && <FaStarHalfAlt />}
                    </div>
                    <span className="text-gray-600">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
