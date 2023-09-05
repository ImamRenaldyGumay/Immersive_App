import React from 'react'

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Breadcrumb from '../Components/Layout/Breadcrumb';
import CardDashboard from '../Components/Layout/CardDashboard';

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Dashboard</h1>
                        <Breadcrumb />
                    </div>
                    <div>
                        <CardDashboard/>
                    </div>


                </main>
            </div>
        </>
    );
}

export default Dashboard