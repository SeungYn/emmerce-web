'use client';

import { Variants, motion } from 'framer-motion';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import AuthFormContiner from '@/container/auth/AuthFormContiner';

const MotionVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { delay: 0.3 },
    transitionEnd: { display: 'none' },
  },
  visible: {
    opacity: 1,
    display: 'flex',
  },
};

export default function AuthBackground() {
  const context = useAuthFormContext();

  return (
    <motion.section
      layout
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className='top-0 z-50 fixed w-full h-[100vh] text-white flex justify-center items-center'
      initial={false}
      animate={context.isOpen ? 'visible' : 'hidden'}
      variants={MotionVariants}
      transition={{ duration: 0.3 }}
    >
      <AuthFormContiner {...context} />
    </motion.section>
  );
}
