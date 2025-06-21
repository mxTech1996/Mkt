// components/EntertainmentHero.js
import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Datos para las tarjetas, para mantener el código limpio
const cards = [
  {
    title: dataSite.info[0].title,
    image: dataSite.image_hero,
    description: dataSite.info[0].description,
    href: '#',
  },
  {
    title: dataSite.info[1].title,
    image: dataSite.image_hero2,
    description: dataSite.info[1].description,
    href: '#',
  },
  {
    title: dataSite.info[2].title,
    image: dataSite.services[0].image,
    description: dataSite.info[2].description,
    href: '#',
  },
];

const HeroSection = () => {
  // Variantes para la animación de entrada en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section className='bg-white py-20 lg:py-24'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* --- Encabezado --- */}
        <motion.div
          className='text-center max-w-4xl mx-auto'
          variants={itemVariants}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
            {dataSite.subtitle}{' '}
            <span className='text-indigo-600'>Full Potential</span>
          </h1>
          <p className='mt-6 text-gray-600 max-w-2xl mx-auto'>
            {dataSite.description}
          </p>
        </motion.div>

        {/* --- Botones --- */}
        <motion.div
          className='mt-8 flex justify-center space-x-4'
          variants={itemVariants}
        >
          <a
            href='/more-information'
            className='bg-black text-white px-7 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors'
          >
            Contact Us
          </a>
          <a
            href='/#products'
            className='bg-white border border-gray-300 text-gray-800 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'
          >
            Shop Now
          </a>
        </motion.div>

        {/* --- Cuadrícula de Tarjetas --- */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'
          variants={itemVariants}
        >
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              className='relative block aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg group'
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={card.image}
                alt={card.title}
                layout='fill'
                objectFit='cover'
                className='z-0 transition-transform duration-500 group-hover:scale-105'
              />
              {/* Gradiente para legibilidad */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10'></div>

              <div className='absolute bottom-0 left-0 p-6 z-20'>
                <h2 className='text-white text-2xl font-bold'>{card.title}</h2>
                <div className='mt-4 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-s p-3'>
                  <span className=' text-white px-5 py-2 rounded-full text-sm font-semibold'>
                    {card.description}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
