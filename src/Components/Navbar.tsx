import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-semibold text-xl">Logo</div>
                    <div className="md:hidden">
                        {/* Tombol Hamburger untuk tampilan mobile */}
                        <button className="text-white">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {/* Tautan-tautan menu */}
                        <a href="#" className="text-white">Beranda</a>
                        <a href="#" className="text-white">Tentang</a>
                        <a href="#" className="text-white">Kontak</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar