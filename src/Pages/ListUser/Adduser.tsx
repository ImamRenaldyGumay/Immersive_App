import React from 'react';

import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

const Adduser = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Dashboard</h1>
                    </div>
                    <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
                        <h1 className='text-blue-dark text-center text-2xl'>NEW USER</h1>
                        
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-gray-700 font-semibold">Fullname</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Enter your fullname"
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />
                        </div>

                        <div className="mb-4 flex flex-row items-center justify-center">
                            <div className="mr-4">
                                <label htmlFor="team" className="block text-gray-700 font-semibold">Team</label>
                                <select
                                    id="team"
                                    className="border border-gray-300 p-2 rounded-md"
                                >
                                    <option value="">Select Team</option>
                                    <option value="team1">Team 1</option>
                                    <option value="team2">Team 2</option>
                                </select>
                            </div>

                            <div className="mr-4">
                                <label htmlFor="role" className="block text-gray-700 font-semibold">Role</label>
                                <select
                                    id="role"
                                    className="border border-gray-300 p-2 rounded-md"
                                >
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="status" className="block text-gray-700 font-semibold">Status</label>
                                <select
                                    id="status"
                                    className="border border-gray-300 p-2 rounded-md"
                                >
                                    <option value="">Select Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">No-Active</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Adduser;
