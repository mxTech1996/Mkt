// components/IntroSection.js
import { motion } from 'framer-motion';

// Datos para las tarjetas de servicios. La del medio tiene `featured: true`.
const services = [
  {
    title: 'Creative Campaign Development',
    description:
      'Step into a realm of boundless creativity with our state-of-the-art campaign strategies. Experience the thrill of award-winning concepts and the latest in digital storytelling.',
    featured: false,
  },
  {
    title: 'Data-Driven Market Strategy',
    description:
      'Indulge in a strategic spree like never before. From high-end market analysis to consumer insights, our data collection caters to all tastes and budgets.',
    featured: true,
  },
  {
    title: 'Brand & Reputation Management',
    description:
      'We take pride in being a brand-focused partner. Our carefully designed facilities cater to all stages of brand growth, ensuring a safe and inclusive environment.',
    featured: false,
  },
];

const IntroSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='bg-white py-20 lg:py-28'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* --- Encabezado --- */}
        <motion.div
          className='text-center max-w-3xl mx-auto mb-12'
          variants={itemVariants}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Discover a World of Unrivaled Solutions for Your Agency
          </h2>
          <p className='mt-4 text-gray-600'>
            We take immense pride in curating an exceptional array of strategies
            to ensure your agency&#39;s work is truly memorable. From thrilling
            creative campaigns to unparalleled data analysis, we have tailored
            our services to cater to all your desires and preferences.
          </p>
        </motion.div>

        {/* --- Contenedor Principal de Tarjetas --- */}
        <motion.div
          className='bg-slate-100/70 p-6 sm:p-10 rounded-3xl shadow-lg shadow-indigo-100/50'
          variants={itemVariants}
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl flex flex-col transition-all duration-300
                                    ${
                                      service.featured
                                        ? 'bg-indigo-600 text-white shadow-2xl scale-100 lg:scale-105'
                                        : 'bg-white/80 backdrop-blur-sm'
                                    }`}
                whileHover={{ y: -5, scale: service.featured ? 1.05 : 1.02 }}
              >
                <h3 className='text-xl font-bold'>{service.title}</h3>
                <p
                  className={`mt-3 flex-grow ${
                    service.featured ? 'text-indigo-100' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
                <div className='mt-6'>
                  <a
                    href='#services'
                    className={`inline-block font-semibold py-2 px-6 rounded-lg transition-colors
                                        ${
                                          service.featured
                                            ? 'bg-white text-indigo-600 hover:bg-gray-200'
                                            : 'bg-gray-800 text-white hover:bg-black'
                                        }`}
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
