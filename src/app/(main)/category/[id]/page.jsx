import AllCategory from '@/components/homesection/AllCategory';
import DragonNews from '@/components/homesection/DragonNews';
import RightSidebar from '@/components/homesection/LoginSection';
import { category, categoryId } from '@/lib/data';
import React from 'react';





const CategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "id");

    const text = await category();
    const value = text.data.news_category;

    const news = await categoryId(id);
    console.log(news);

    return (
        <div className='grid grid-cols-12 container mx-auto gap-4 mt-8 mb-10'>

            <div className='bg-gray-100 col-span-3 rounded-md'>
                <AllCategory categories={value} active={id} />
            </div>
            <div className=' p-5 col-span-6 rounded-md'>
                {news?.data?.length > 0 ? (
                    news.data.map(item => (
                        <DragonNews key={item._id} item={item} />
                    ))
                ) : (
                    <div>No news found</div>
                )}
            </div>
            <div className=' p-3 col-span-3 rounded-md'>
                <RightSidebar />
            </div>
        </div>
    );
};

export default CategoryPage;