import AllCategory from '@/components/homesection/AllCategory';
import DragonNews from '@/components/homesection/DragonNews';
import LoginSection from '@/components/homesection/LoginSection';
import React from 'react';

const HomePage = () => {
    return (
        <div className='grid grid-cols-12 container mx-auto gap-4 mt-8 mb-10'>

            <div className='bg-gray-100 col-span-3 rounded-md'>
                <AllCategory/>
            </div>
            <div className='bg-green-200 p-10 col-span-6 rounded-md'>
                <DragonNews/>
            </div>
            <div className='bg-green-500 p-10 col-span-3 rounded-md'>
                <LoginSection/>
            </div>
        </div>
    );
};

export default HomePage;