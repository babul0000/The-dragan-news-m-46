import AutoRun from '@/components/shared/AutoRun';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <AutoRun/>
            <Navbar />

            {children}
        </>
    );
};

export default MainLayout;