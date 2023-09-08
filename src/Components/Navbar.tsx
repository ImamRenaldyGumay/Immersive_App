import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

import Dropdown from './Layout/DropDown';

const Navbar = () => {

    const navigate = useNavigate(); 

  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('token');
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Successfully Logout',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((response) => {
      if (response?.isConfirmed) {
        navigate('/Login'); 
      }
    });
  };

    return (
        <nav className="bg-blue-700 p-4 m-3 rounded-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-semibold text-xl">Immersive Dashboard</div>
                    <div className="md:hidden">
                        {/* Tombol Hamburger untuk tampilan mobile */}
                        <button className="text-white">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="">
                        {/* Tautan-tautan menu */}
                        <Dropdown/>

                    </div>
                    <div className="py-2">
                  <a
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar