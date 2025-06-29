// src/pages/AboutUs.jsx
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-white"
        >
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="container mx-auto px-4 py-8"
            >
                <h1 className="text-[#4A4A4A] text-5xl font-bold">
                    {t('aboutUs.title')}
                </h1>

                {/* Slogan */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-8 mb-8"
                >
                    <h2 className="text-[#6B7280] text-4xl italic font-light">
                        {t('aboutUs.slogan')}
                    </h2>
                </motion.div>
            </motion.div>

            {/* Hero Section with Image and Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="container mx-auto px-4 py-16"
            >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Image */}
                    <div className="lg:w-3/4">
                        <img
                            src="/images/burak.jpg"
                            alt="About Us Hero"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5">
                        <div className="space-y-8">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="text-2xl leading-relaxed text-gray-700 italic"
                            >
                                {t('aboutUs.paragraphs.p1')}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.8, duration: 1 }}
                                className="text-2xl leading-relaxed text-gray-700 italic"
                            >
                                {t('aboutUs.paragraphs.p2')}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.1, duration: 1 }}
                                className="text-2xl leading-relaxed text-gray-700 italic"
                            >
                                {t('aboutUs.paragraphs.p3')}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.4, duration: 1 }}
                                className="text-2xl leading-relaxed text-gray-700 italic"
                            >
                                {t('aboutUs.paragraphs.p4')}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.7, duration: 1 }}
                                className="text-2xl leading-relaxed text-gray-700 italic"
                            >
                                {t('aboutUs.paragraphs.p5')}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutUs;