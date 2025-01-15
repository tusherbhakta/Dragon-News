import React from 'react';
import Header from '../Header';
import RightNav from '../layoutComponents/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon

const News = () => {
    const data = useLoaderData();
    const news = data.data[0];
    // console.log(data);

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
                <section className="col-span-1 lg:col-span-9">
                    <h2 className="font-semibold text-xl mb-4 text-left">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        {/* Image Section */}
                        <figure className="w-full p-8">
                            <img
                                src={news.image_url}
                                alt={news.title}
                                className="rounded-t-xl w-full h-auto object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="card-body text-left">
                            <h2 className="card-title text-lg font-bold">{news.title}</h2>
                            <p className="mt-2">{news.details}</p>
                            <div className="card-actions">
                                <Link
                                    to={`/category/${news?.category_id}`}
                                    className="btn mt-8 flex items-center gap-2 btn-primary"
                                >
                                    <FaArrowLeft /> Back to Category
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-1 lg:col-span-3">
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default News;
