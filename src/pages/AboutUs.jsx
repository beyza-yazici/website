// src/pages/AboutUs.jsx
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutUs = () => {
    const { t } = useTranslation();

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 }
    };

    return (
        <motion.div {...fadeIn} className="min-h-screen bg-white"
        >
            {/* Title Section */}
            <motion.div {...fadeIn}
                className="container mx-auto px-4 py-16"
            >
                <h1 className="text-[#4A4A4A] text-5xl font-bold">
                    {t('aboutUs.title')}
                </h1>

                {/* Slogan */}
                <motion.div
                    {...fadeIn}
                    className="mt-8 mb-8"
                >
                    <h2 className="text-[#6B7280] text-4xl italic font-light">
                        {t('aboutUs.slogan')}
                    </h2>
                </motion.div>
            </motion.div>

            {/* Three Columns Section */}
            <motion.div {...fadeIn} className="mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Vision Section */}
                    <motion.div {...fadeIn} className="flex flex-col items-center text-center px-2">
                        <img
                            src="/images/vision.jpg"
                            alt="Vision"
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">
                            {t('aboutUs.sections.vision.title')}
                        </h3>
                        <p className="text-2xl text-gray-700 italic">
                            {t('aboutUs.sections.vision.content')}
                        </p>
                    </motion.div>

                    {/* Principles Section */}
                    <motion.div {...fadeIn} className="flex flex-col items-center text-center px-2">
                        <img
                            src="/images/principles.jpg"
                            alt="Principles"
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">
                            {t('aboutUs.sections.principles.title')}
                        </h3>
                        <p className="text-2xl text-gray-700 italic">
                            {t('aboutUs.sections.principles.content')}
                        </p>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div {...fadeIn} className="flex flex-col items-center text-center px-2">
                        <img
                            src="/images/values.jpg"
                            alt="Values"
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">
                            {t('aboutUs.sections.values.title')}
                        </h3>
                        <p className="text-2xl text-gray-700 italic">
                            {t('aboutUs.sections.values.content')}
                        </p>
                    </motion.div>
                </div>
            </motion.div>
            {/* Hero Section with Image and Content */}
            <motion.div {...fadeIn} className="container mx-auto px-4 py-16">
                {/* Our Founder Title */}
                <h2 className="text-5xl font-semibold text-[#4A4A4A] mb-8 text-center py-10">
                    {t('aboutUs.founder')}
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Image */}
                    <div className="lg:w-3/5">
                        <img
                            src="/images/burak.jpg"
                            alt="About Us Hero"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5">
                        <div className="space-y-8 max-w-4xl">
                            <motion.p {...fadeIn} className="text-2xl leading-relaxed text-gray-700 italic">
                                {t('aboutUs.paragraphs.p1')}
                            </motion.p>
                            <motion.p {...fadeIn} className="text-2xl leading-relaxed text-gray-700 italic">
                                {t('aboutUs.paragraphs.p2')}
                            </motion.p>
                            <motion.p {...fadeIn} className="text-2xl leading-relaxed text-gray-700 italic">
                                {t('aboutUs.paragraphs.p3')}
                            </motion.p>
                            <motion.p {...fadeIn} className="text-2xl leading-relaxed text-gray-700 italic">
                                {t('aboutUs.paragraphs.p4')}
                            </motion.p>
                            <motion.p {...fadeIn} className="text-2xl leading-relaxed text-gray-700 italic">
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