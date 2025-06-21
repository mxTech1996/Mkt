// components/AgencyOfferings.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';

// Datos de los servicios, cada uno con su par de imágenes.
const offerings = dataSite.services;

const AgencyOfferings = () => {
  // Estado para saber qué servicio está activo
  const [activeIndex, setActiveIndex] = useState(0);

  const activeOffering = offerings[activeIndex];

  return (
    <section id='services' className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna Izquierda: Lista de Servicios --- */}
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {offerings.map((offering, index) => (
              <button
                key={offering.title}
                onClick={() => setActiveIndex(index)}
                className='text-left w-full p-2 -m-2 rounded-lg'
              >
                <h3
                  className={`text-2xl font-bold transition-colors ${
                    activeIndex === index ? 'text-indigo-600' : 'text-gray-900'
                  }`}
                >
                  {offering.title}
                </h3>
                <p className='mt-2 text-gray-600'>{offering.description}</p>
              </button>
            ))}
          </motion.div>

          {/* --- Columna Derecha: Imágenes --- */}
          <motion.div
            className='relative h-[80vh] max-h-[600px]'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* El 'key' en cada imagen es crucial para que AnimatePresence funcione */}
            <AnimatePresence>
              <motion.div
                key={'index' + 2}
                className='absolute top-0 left-0 w-full h-1/2 rounded-2xl overflow-hidden'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={activeOffering.image}
                  alt={activeOffering.title}
                  layout='fill'
                  objectFit='cover'
                />
              </motion.div>
              <motion.div
                key={'index' + 'ddkd'}
                className='absolute bottom-0 right-0 w-full h-1/2 rounded-2xl overflow-hidden'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src={dataSite.image_hero}
                  alt={activeOffering.title}
                  layout='fill'
                  objectFit='cover'
                />
              </motion.div>
            </AnimatePresence>

            {/* Círculo con la Fecha */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600 text-white rounded-full flex flex-col items-center justify-center text-center shadow-2xl'>
              <span className='uppercase tracking-widest mt-1'>Services</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyOfferings;
