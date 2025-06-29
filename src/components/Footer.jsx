// components/Footer.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    FaInstagram,
    FaLinkedin,
    FaYoutubeSquare,
    FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();

    const getHeaders = () => ({
        usefulLinks: i18n.language === 'tr' ? 'Faydalı Bağlantılar' : 'Useful Links',
        contactInfo: i18n.language === 'tr' ? 'İletişim Bilgileri' : 'Contact Info',
        followUs: i18n.language === 'tr' ? 'Bizi Takip Edin' : 'Follow Us'
    });

    const headers = getHeaders();

    const socialMedia = [

        {
            name: 'Instagram',
            icon: <FaInstagram className="w-10 h-10" />,
            url: 'https://instagram.com/yourpage'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-10 h-10" />,
            url: 'https://linkedin.com/company/yourpage'
        },
        {
            name: 'YouTube',
            icon: <FaYoutubeSquare className="w-10 h-10" />,
            url: 'https://youtube.com/yourchannel'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="w-10 h-10" />,
            url: 'https://wa.me/yournumber'
        }
    ];

    return (
        <footer className="bg-[#383838] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-bold mb-4">LOGO</h3>
                        <p className="text-gray-300 text-lg">
                            {t('footer.companyDescription')}
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">
                            {headers.usefulLinks}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about-us" className="text-gray-300 hover:text-white transition duration-300 text-lg"> {/* text-lg ekledik */}
                                    {t('nav.aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition duration-300 text-lg">
                                    {t('nav.services')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-300 hover:text-white transition duration-300 text-lg">
                                    {t('nav.projects')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/sustainability" className="text-gray-300 hover:text-white transition duration-300 text-lg">
                                    {t('nav.sustainability')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 text-lg">
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">
                            {headers.contactInfo}
                        </h3>
                        <div className="space-y-2 text-gray-300 text-lg">
                            <p>{t('footer.address')}</p>
                            <p>Email: info@example.com</p>
                            <p>Tel: +90 123 456 7890</p>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">
                            {headers.followUs}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; {currentYear} Company Name. {t('footer.allRightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;