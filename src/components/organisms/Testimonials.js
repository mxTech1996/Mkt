// components/TestimonialGrid.js

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// La estructura de datos de testimonios que proporcionaste
const references = dataSite.references;

// Función para obtener las iniciales del nombre
const getInitials = (name) => {
  const words = name.split(' ');
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const TestimonialGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='testimonials' className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900'>
            What Our Partners Say
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {references.map((ref, index) => (
            <motion.div
              key={index}
              className='bg-indigo-50/40 border border-indigo-100 rounded-2xl p-8 flex flex-col h-full shadow-lg shadow-indigo-100/50'
              variants={cardVariants}
            >
              <div className='flex-grow border-l-4 border-indigo-200 pl-6'>
                <p className='text-gray-700 italic'>
                  &quot;{ref.description}&quot;
                </p>
              </div>
              <div className='flex items-center mt-6 pt-6 border-t border-indigo-100'>
                <div className='flex-shrink-0'>
                  {ref.image ? (
                    <Image
                      src={ref.image}
                      alt={ref.name}
                      width={40}
                      height={40}
                      className='rounded-full object-cover'
                    />
                  ) : (
                    <div className='w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm'>
                      {getInitials(ref.name)}
                    </div>
                  )}
                </div>
                <p className='ml-4 font-semibold text-gray-800'>{ref.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
