import { FaCheckCircle } from 'react-icons/fa';
export default function GNBLogo() {
  return (
    <div className='flex items-center tracking-tighter'>
      <p className='text-2xl font-extrabold'>EM</p>
      <p className='text-2xl font-extrabold absolute flex items-center left-[29px] gap-1'>
        MERCE MALL <FaCheckCircle className='text-blue-400 text-base' />
      </p>
    </div>
  );
}
