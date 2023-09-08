import React from 'react';
import Cookies from 'js-cookie';

import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import User from '../../Components/Tabel/User';
import Search from '../../Components/Search';
import Btnuser from '../../Components/Btnuser';

const Userlist = () => {
  const email = Cookies.get('email');
  const token = Cookies.get('token');
  const role = Cookies.get('role'); 
  console.log(email)
  console.log(token)
  console.log(role)

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <Navbar />
          {/* Konten Utama Dashboard */}
          <div className="content-header flex justify-between m-4">
            <h1 className="text-3xl font-bold leading-none tracking-tight">Dashboard</h1>
          </div>
          <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
            <div className="flex justify-end">
              <Search />
              <Btnuser label="Add User" role={role} />
            </div>
            <User role={role} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Userlist;
