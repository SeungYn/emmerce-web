'use client';

import { motion } from 'framer-motion';
import AuthForm from './AuthForm';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useEffect } from 'react';

export default function AuthBackground() {
  const context = useAuthFormContext();

  return (
    <motion.section
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className='top-0 z-50 fixed w-full h-[100vh] text-white flex justify-center items-center'
      initial={false}
      animate={context.isOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, display: 'none' },
        visible: {
          opacity: 1,
          display: 'flex',
        },
      }}
      transition={{ duration: 0.5 }}
    >
      <AuthForm {...context} />
    </motion.section>
  );
}
