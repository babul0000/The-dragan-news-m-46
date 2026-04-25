import AllCategory from '@/components/homesection/AllCategory';
import DragonNews from '@/components/homesection/DragonNews';
import RightSidebar from '@/components/homesection/LoginSection';

import React from 'react';

const category = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data;
}

const HomePage = async() => {

const text = await category();
    const value = text.data.news_category;
    console.log(value);


    return (
        <div className='grid grid-cols-12 container mx-auto gap-4 mt-8 mb-10'>

            <div className='bg-gray-100 col-span-3 rounded-md'>
                <AllCategory categories={value} active={"01"}/>
            </div>
            <div className='bg-green-200 p-10  col-span-6 rounded-md'>
                <DragonNews/>
            </div>
            <div className=' p-3 col-span-3 rounded-md'>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default HomePage;