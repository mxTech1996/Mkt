'use client';

// components/PlazaNavbar.js
import { dataSite, pageName } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Usaremos iconos de Feather Icons, son muy limpios
import { FiShoppingCart, FiPhone, FiMenu } from 'react-icons/fi';

const PlazaNavbar = () => {
  const { products } = useCart();
  // Array para generar los enlaces de navegación
  const navLinks = [
    { name: 'Benefits', href: '/#benefits' },
    { name: 'About Us', href: '/#intro' },
    { name: 'Testminials', href: '/#testimonials' },
    { name: 'Shop', href: '/#products' },
    { name: 'Services', href: '/#services' },
  ];

  return (
    // 1. Contenedor exterior: Se encarga del posicionamiento "sticky".
    // El padding (p-4) crea el espacio alrededor de la barra para que la sombra sea visible.
    <motion.header
      className='sticky top-0 z-50 p-4'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 2. Contenedor interior: Es la barra visible con el diseño de píldora y la sombra. */}
      <nav className='container mx-auto flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg shadow-indigo-200/50'>
        {/* --- Logo --- */}
        <div className='flex items-center'>
          <a href='/' className='flex items-center space-x-2'>
            {/* Reemplaza esto con tu logo */}
            <Image
              src={dataSite.iconImage}
              alt='Plaza Mall Logo'
              width={28}
              height={28}
            />
            <span className='font-bold text-lg text-gray-800'>{pageName}</span>
          </a>
        </div>

        {/* --- Enlaces de Navegación (Escritorio) --- */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* --- Iconos y Botón (Escritorio) --- */}
        <div className='hidden lg:flex items-center space-x-6'>
          <a
            href='/my-cart'
            className='relative text-gray-700 hover:text-indigo-600'
          >
            <FiShoppingCart size={20} />
            <span className='absolute -top-1 -right-1.5 flex items-center justify-center w-4 h-4 bg-indigo-500 text-white text-[10px] font-bold rounded-full'>
              {products.length}
            </span>
          </a>
          <a
            href={`tel:${dataSite.telephone}`}
            className='flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600'
          >
            <FiPhone size={18} />
            <span>{dataSite.telephone} </span>
          </a>
          <a
            href='/more-information'
            className='bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors'
          >
            Contact Us
          </a>
        </div>

        {/* --- Botón de Menú (Móvil) --- */}
        <div className='lg:hidden'>
          <button type='button' aria-label='Open menu' className='p-2'>
            <FiMenu size={24} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default PlazaNavbar;
