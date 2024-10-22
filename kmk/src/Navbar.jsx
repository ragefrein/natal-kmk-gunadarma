import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-emerald-900 fixed w-full top-0 left-0 z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img 
                            src="./img/logo.png" 
                            alt="Logo" 
                            className="h-16 w-auto mr-2" 
                        />
                        <span className="text-white font-bold text-xl">KMK</span>
                    </div>
                    <div className="hidden md:flex space-x-4 font-title">
                        <button 
                            onClick={() => handleScroll('home')} 
                            className="text-gray-300 hover:bg-purple-800 hover:text-white px-3 py-2 rounded"
                        >
                            Halaman Utama
                        </button>
                        <button 
                            onClick={() => handleScroll('tentang')} 
                            className="text-gray-300 hover:bg-purple-800 hover:text-white px-3 py-2 rounded"
                        >
                            Tentang
                        </button>
                        <button 
                            onClick={() => handleScroll('pendaftaran')} 
                            className="text-gray-300 hover:bg-purple-800 hover:text-white px-3 py-2 rounded"
                        >
                            Pendaftaran
                        </button>
                        <button 
                            onClick={() => handleScroll('kontak')} 
                            className="text-gray-300 hover:bg-purple-800 hover:text-white px-3 py-2 rounded"
                        >
                            Kontak
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 px-3 py-2 rounded">
                            {isOpen ? '✖' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            <div 
                className={`md:hidden bg-amber-600 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <button 
                    onClick={() => handleScroll('home')} 
                    className="block text-white hover:bg-purple-600 hover:text-white px-4 py-2"
                >
                    Halaman Utama
                </button>
                <button 
                    onClick={() => handleScroll('tentang')} 
                    className="block text-white hover:bg-purple-600 hover:text-white px-4 py-2"
                >
                    Tentang
                </button>
                <button 
                    onClick={() => handleScroll('pendaftaran')} 
                    className="block text-white hover:bg-purple-600 hover:text-white px-4 py-2"
                >
                    Pendaftaran
                </button>
                <button 
                    onClick={() => handleScroll('kontak')} 
                    className="block text-white hover:bg-purple-600 hover:text-white px-4 py-2"
                >
                    Kontak
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
