import React from 'react';
import Image from 'next/image';
import { newParams } from '@/lib/data';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';


const NewsDetails = async({params }) => {
    const { id } = await params;
    const news = await newParams(id)

    console.log(news);
    

    return (
        <div className="max-w-4xl mx-auto p-5 border border-gray-200 rounded-lg bg-white shadow-sm">

            {/* 1. Main Image */}
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src={news.image_url} 
                    alt="News Details"
                    fill
                    className="object-cover rounded-md"
                    priority
                />
            </div>

            {/* 2. News Title */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                {news.title}
            </h2>

            {/* 3. News Content / Description */}
            <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-justify">
                <p>
                    {news.details}
                </p>
                
            </div>

             {/* 4. Navigation Button */}
                <div className="mt-6">
                <Link href={`/category/${news?.category_id}`}>
                    <button className="flex items-center gap-2 bg-[#D72050] hover:bg-[#b01a42] text-white px-6 py-3 rounded-none font-semibold transition-all">
                        <FaArrowLeft />
                        All news in this category
                    </button>
                </Link>
            </div> 

        </div>
    );
};

export default NewsDetails;