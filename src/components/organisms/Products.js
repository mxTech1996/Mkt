// components/ProductCarousel.js
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

// La estructura de productos que proporcionaste
const products = dataSite.products;

const ProductCarousel = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  // Mueve el carrusel un elemento a la vez.
  const handleNext = () => {
    // Suponiendo 3 elementos visibles en escritorio, no permitimos que los últimos 2 queden solos.
    if (index < products.length - 3) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section id='products' className='bg-slate-100/80 py-20 lg:py-24'>
      <div className='container mx-auto'>
        {/* --- Cabecera --- */}
        <div className='flex justify-between items-center px-4 sm:px-6 lg:px-8 mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            What&#39;s new in our Agency
          </h2>
          <div className='flex space-x-3'>
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className='w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={index >= products.length - 3}
              className='w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* --- Carrusel --- */}
        <div className='overflow-hidden' ref={carouselRef}>
          <motion.div
            className='flex space-x-6 px-4 sm:px-6 lg:px-8'
            animate={{ x: `calc(-${index * (100 / 3)}% - ${index * 1.5}rem)` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            {products.map((product) => {
              // Verifica si el producto está en el carrito
              const isInCart = validateProductInCart(product.id);
              // Maneja el clic para agregar o eliminar del carrito
              const handleClick = () => {
                handleAddOrRemoveProduct(product.id);
              };
              return (
                <motion.div
                  key={product.id}
                  className='flex-shrink-0 w-[80%] md:w-[45%] lg:w-[calc(100%/3 - 1.5rem*2/3)]'
                >
                  <div className='bg-gray-800 rounded-2xl p-6 text-white h-full flex flex-col'>
                    <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <h3 className='font-bold text-lg'>{product.name}</h3>
                    <p className='text-sm text-gray-300 mt-2 flex-grow line-clamp-3'>
                      {product.description}
                    </p>
                    {/* price */}
                    <div className='mt-4 text-lg font-semibold'>
                      ${product.price}
                    </div>
                    <button
                      onClick={handleClick}
                      className='w-full mt-4 bg-indigo-600 text-white font-semibold py-2.5 rounded-full hover:bg-indigo-700 transition-colors'
                      style={{
                        backgroundColor: isInCart ? '#dc2626' : '#6366f1',
                        color: isInCart ? '#fff' : '#fff',
                      }}
                    >
                      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
