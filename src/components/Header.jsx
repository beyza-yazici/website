import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <header className="bg-[#383838] text-white h-[100px] flex items-center">
                <div className="container mx-auto px-1 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-light pl-1">
                        <Link to="/">LOGO</Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex items-center gap-10">
                        <nav className="flex space-x-10">
                            <Link to="/about-us" className="hover:text-gray-300 transition duration-300 text-2xl">
                                About Us
                            </Link>
                            <Link to="/services" className="hover:text-gray-300 transition duration-300 text-2xl">
                                Services
                            </Link>
                            <Link to="/projects" className="hover:text-gray-300 transition duration-300 text-2xl">
                                Projects
                            </Link>
                            <Link to="/sustainability" className="hover:text-gray-300 transition duration-300 text-2xl">
                                Sustainability
                            </Link>
                            <Link to="/contact" className="hover:text-gray-300 transition duration-300 text-2xl">
                                Contact
                            </Link>
                        </nav>

                        {/* Search Icon */}
                        <button
                            onClick={toggleSearch}
                            className="text-white cursor-pointer hover:text-gray-300 transition duration-300 ml-6 mr-1"
                        >
                            <BiSearch size={25} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Search Dropdown */}
            <div className={`w-full bg-white shadow-lg border-t overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen
                ? 'max-h-24 opacity-100'
                : 'max-h-0 opacity-0'
                }`}>
                <div className="container mx-auto px-4 py-6">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full text-gray-800 text-4xl focus:outline-none border-b-2 border-gray-300 pb-2 placeholder-gray-400"
                    />
                    <button className="ml-4">

                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;