import Link from 'next/link';
import React from 'react';




const AllCategory = async ({ categories, active }) => {



    return (
        <div>
            <h2 className="font-bold mt-3 ml-3.5">All Category</h2>

            <div className="flex flex-col gap-2 p-4">
                {
                    categories.map(val => (
                        <span
                            key={val.category_id}
                            className={`${active === val.category_id ? "bg-gray-400 text-white" : "bg-white"
                                } shadow-sm rounded-md px-3 py-2 text-sm text-center`}
                        >
                            <Link href={`/category/${val.category_id}`}>
                                {val.category_name}
                            </Link>

                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCategory;