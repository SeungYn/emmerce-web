import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
};

export default function MotionBG({
  isOpen,
  children,
}: PropsWithChildren<Props>) {
  return (
    <motion.section
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className='top-0 z-50 fixed w-full h-[100vh] text-white flex justify-center items-center'
      initial={false}
      animate={isOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, display: 'none' },
        visible: {
          opacity: 1,
          display: 'flex',
        },
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
}
