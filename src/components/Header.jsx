import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const dropdownRef = useRef(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('userLanguage', lng);
        setIsLangMenuOpen(false);
    };

    return (
        <>
            <header className="bg-[#383838] text-white h-[100px] flex items-center relative">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-light">
                        <Link to="/">LOGO</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <nav className="flex space-x-10">
                            <Link to="/about-us" className="hover:text-gray-300 transition duration-300 text-2xl">
                                {t('nav.aboutUs')}
                            </Link>
                            <Link to="/services" className="hover:text-gray-300 transition duration-300 text-2xl">
                                {t('nav.services')}
                            </Link>
                            <Link to="/projects" className="hover:text-gray-300 transition duration-300 text-2xl">
                                {t('nav.projects')}
                            </Link>
                            <Link to="/sustainability" className="hover:text-gray-300 transition duration-300 text-2xl">
                                {t('nav.sustainability')}
                            </Link>
                            <Link to="/contact" className="hover:text-gray-300 transition duration-300 text-2xl">
                                {t('nav.contact')}
                            </Link>
                        </nav>

                        {/* Language Selector */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="group flex items-center space-x-2 transition duration-300 cursor-pointer"
                            >
                                <img
                                    src={`/flags/${i18n.language}.png`}
                                    alt={i18n.language}
                                    className="w-10 h-10 transition duration-300 group-hover:opacity-70 cursor-pointer"
                                />
                            </button>

                            {isLangMenuOpen && (
                                <div className="absolute top-full right-0 mt-4 bg-white rounded-lg shadow-lg min-w-[160px] z-50">
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className="flex items-center space-x-3 px-6 py-3 w-full rounded-t-lg transition duration-300 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="/flags/en.png"
                                            alt="English"
                                            className="w-8 h-6 transition duration-300 hover:opacity-70 cursor-pointer"
                                        />
                                        <span className="text-gray-800 text-lg">English</span>
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('tr')}
                                        className="flex items-center space-x-3 px-6 py-3 w-full rounded-b-lg transition duration-300 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="/flags/tr.png"
                                            alt="Türkçe"
                                            className="w-9 h-9 transition duration-300 hover:opacity-70 cursor-pointer"
                                        />
                                        <span className="text-gray-800 text-lg">Türkçe</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Search Icon */}
                        <button
                            onClick={toggleSearch}
                            className="p-2 hover:bg-gray-700 rounded transition duration-300 cursor-pointer"
                        >
                            <BiSearch size={25} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-[100px] left-0 right-0 bg-[#383838] transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-40`}
                >
                    <nav className="flex flex-col p-4">
                        <Link
                            to="/about-us"
                            className="py-3 px-4 text-xl hover:bg-gray-700 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.aboutUs')}
                        </Link>
                        <Link
                            to="/services"
                            className="py-3 px-4 text-xl hover:bg-gray-700 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.services')}
                        </Link>
                        <Link
                            to="/projects"
                            className="py-3 px-4 text-xl hover:bg-gray-700 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.projects')}
                        </Link>
                        <Link
                            to="/sustainability"
                            className="py-3 px-4 text-xl hover:bg-gray-700 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.sustainability')}
                        </Link>
                        <Link
                            to="/contact"
                            className="py-3 px-4 text-xl hover:bg-gray-700 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.contact')}
                        </Link>

                        {/* Mobile Language and Search */}
                        <div className="flex items-center justify-between p-4 border-t border-gray-600 mt-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => changeLanguage('en')} className="flex items-center gap-2">
                                    <img src="/flags/en.png" alt="English" className="w-8 h-6" />
                                    <span>EN</span>
                                </button>
                                <button onClick={() => changeLanguage('tr')} className="flex items-center gap-2">
                                    <img src="/flags/tr.png" alt="Türkçe" className="w-8 h-6" />
                                    <span>TR</span>
                                </button>
                            </div>
                            <button onClick={toggleSearch} className="p-2">
                                <BiSearch size={25} />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Search Dropdown */}
            <div
                className={`w-full bg-white shadow-lg border-t overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="container mx-auto px-4 py-6">
                    <input
                        type="search"
                        placeholder={t('search.placeholder')}
                        className="w-full text-gray-800 text-4xl md:text-2xl focus:outline-none border-b-2 border-gray-300 pb-2 placeholder-gray-400"
                    />
                </div>
            </div>
        </>
    );
};

export default Header;