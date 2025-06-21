// components/Benefits.js
import { motion } from 'framer-motion';
// Iconos relevantes para una agencia de publicidad
import { FiVideo, FiTarget, FiPlay, FiBarChart2 } from 'react-icons/fi';

// Datos para las 4 tarjetas de servicios
const services = [
  {
    title: 'Brand Storytelling',
    icon: <FiVideo />,
  },
  {
    title: 'Audience Targeting',
    icon: <FiTarget />,
  },
  {
    title: 'Interactive Campaigns',
    icon: <FiPlay />,
  },
  {
    title: 'Performance Analytics',
    icon: <FiBarChart2 />,
  },
];

const Benefits = () => {
  // Variantes para la animación de entrada en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <section id='benefits' className='bg-white py-20 lg:py-28'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* --- Columna Izquierda: Texto y Botón --- */}
        <motion.div variants={itemVariants}>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Discover Our Core Services
          </h2>
          <p className='mt-4 text-gray-600 max-w-lg'>
            Step into a realm of boundless creativity and strategy with our
            state-of-the-art consulting services. Experience the thrill of
            data-driven campaigns, challenge your market with bold new ideas,
            and enjoy the results of our cutting-edge approach.
          </p>
          {/* <a
            href='/services'
            className='inline-block mt-8 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors'
          >
            View All
          </a> */}
        </motion.div>

        {/* --- Columna Derecha: Cuadrícula de Servicios --- */}
        <motion.div
          className='grid grid-cols-2 gap-4 sm:gap-6'
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href='#'
              className='group block p-6 sm:p-8 rounded-2xl text-center bg-indigo-50/70 border border-indigo-100 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-2xl hover:shadow-indigo-200/50 hover:scale-105'
              variants={itemVariants}
            >
              <div className='text-indigo-400 transition-colors duration-300 group-hover:text-indigo-600'>
                <span className='text-5xl sm:text-6xl'>{service.icon}</span>
              </div>
              <h3 className='mt-4 font-bold text-gray-700 transition-colors duration-300 group-hover:text-gray-900'>
                {service.title}
              </h3>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
