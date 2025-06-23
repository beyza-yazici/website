// src/pages/AboutUs.jsx
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-white"
        >
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="container mx-auto px-4 py-8"
            >
                <h1 className="text-[#4A4A4A] text-5xl font-bold">
                    {t('aboutUs.title')}
                </h1>

                {/* Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 mb-8"
                >
                    <h2 className="text-[#6B7280] text-4xl italic font-light">
                        {t('aboutUs.slogan')} {/* i18n dosyanıza slogan metnini eklemeyi unutmayın */}
                    </h2>
                </motion.div>
            </motion.div>

            {/* Hero Section with Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="w-full relative"
            >
                <div className="w-full aspect-[21/9] md:aspect-[16/7] lg:aspect-[2/1] relative">
                    <img
                        src="/images/us.jpg"
                        alt="About Us Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="container mx-auto px-4 py-16"
            >
                <div className="max-w-6xl mx-auto space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="text-2xl leading-relaxed text-gray-700"
                    >
                        {t('aboutUs.paragraphs.p1')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="text-2xl leading-relaxed text-gray-700"
                    >
                        {t('aboutUs.paragraphs.p2')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                        className="text-2xl leading-relaxed text-gray-700"
                    >
                        {t('aboutUs.paragraphs.p3')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="text-2xl leading-relaxed text-gray-700"
                    >
                        {t('aboutUs.paragraphs.p4')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.6 }}
                        className="text-2xl leading-relaxed text-gray-700"
                    >
                        {t('aboutUs.paragraphs.p5')}
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutUs;