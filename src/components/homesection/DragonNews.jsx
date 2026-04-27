import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ item }) => {
    console.log(item);

    return (
        <div className=" mx-auto bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden font-sans">

            <h2 className='text-2xl font-bold ml-5 mt-5 mb-5'>Dragon News Home</h2>

            {/* Header Section */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                        src={item.author.img}
                        alt={item.author}
                        width={40}
                        height={40}

                    />
                    <div>
                        <h4 className="text-[15px] font-bold text-gray-800 leading-tight">{item.author.name}</h4>
                        <p className="text-xs text-gray-500">{item.author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-4 text-gray-400">
                    <FaRegBookmark className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
                    <FaShareAlt className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
                </div>
            </div>

            {/* Title Section */}
            <div className="px-4 pb-3">
                <h2 className="text-[22px] font-extrabold text-gray-800 leading-[1.3]">
                    {item.title}
                </h2>
            </div>

            {/* Image Section */}
            <div className="px-4">
                <Image
                    className="w-full h-[240px] object-cover rounded-xl"
                    src={item.image_url}
                    alt={item.title}
                    width={300}
                    height={300}
                />
            </div>

            {/* Content Section */}
            <div className="p-4">
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {item.details}
                </p>
                <button className="mt-2 text-[#FF8C42] font-bold text-sm hover:underline">
                    Read More
                </button>
            </div>

            <hr className="mx-4 border-gray-100" />

            {/* Footer Section */}
            <div className="px-4 py-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-[#FF8C42] w-4 h-4" />
                        ))}
                    </div>
                    <span className="text-sm font-bold text-gray-600 ml-1">{item.rating.number}</span>

                    <div className="flex items-center gap-2 text-gray-500">
                    <FaEye className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.total_view}</span>
                </div>

                

                </div>

                <div className='flex items-center '>
                    <Link href={`/news/${item._id}`}>
                    <button className='btn'>See Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;