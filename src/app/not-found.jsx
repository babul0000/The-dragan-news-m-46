import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            <div className="text-center">
                {/* Simple Icon or Illustration */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full">
                        <svg
                            className="w-16 h-16 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Path-ti paoya jayni
                </h2>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                    Duhkhito, apni bodhoy bhul rasta-e chole esechen. Ei path-ti ekhon ar nei.
                </p>

                {/* CTA Button */}
                <Link
                    href="/"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
                >
                    Home-e Fire Jan
                </Link>
            </div>
        </div>
    );
};

export default NotFound;