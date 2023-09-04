import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 m-3 rounded-md">
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
                        <button>
                            <p className='text-white'>Hello, John Doe</p>
                        </button>


                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar