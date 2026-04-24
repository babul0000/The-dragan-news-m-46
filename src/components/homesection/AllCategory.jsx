import React from 'react';

const category = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data;
}


const AllCategory = async() => {
    const text = await category();
    const value = text.data.news_category;
    console.log(value);
    
    
    return (
        <div>
            <h2 className="font-bold mt-3 ml-3.5">All Category</h2>

            <div className="flex flex-col gap-2 p-4">
                {
                    value.map(val => (
                        <span
                            key={val.category_id}
                            className="bg-white shadow-sm rounded-md px-3 py-2 text-sm text-center  "
                        >
                            {val.category_name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCategory;