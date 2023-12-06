'use client';
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useUserContext } from '@/context/auth/UserContext';
import { useRouter } from 'next/navigation';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import dynamic from 'next/dynamic';

const GNBLogin = dynamic(() => import('../GNBLogin/GNBLogin'), { ssr: false });

export default function GNBMenu() {
  const { userInfo } = useUserContext();
  const { handleOpen } = useAuthFormContext();
  const router = useRouter();
  const onMoveCartPage = () => {
    if (userInfo?.token) {
      router.push('/o/cart');
    } else {
      handleOpen();
    }
  };

  return (
    <div className='flex flex-col'>
      <GNBLogin />
      <ul className='flex text-2xl items-center gap-2'>
        <li>
          <button className='flex items-center'>
            <FaRegHeart />
          </button>
        </li>
        <li>
          <button className='flex items-center'>
            <IoPersonOutline />
          </button>
        </li>
        <li>
          <button className='flex items-center'>
            <CiDeliveryTruck size='32px' />
          </button>
        </li>
        <li>
          <button className='flex items-center' onClick={onMoveCartPage}>
            <BsCart />
          </button>
        </li>
      </ul>
    </div>
  );
}
