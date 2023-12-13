'use client';
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useUserContext } from '@/context/auth/UserContext';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import dynamic from 'next/dynamic';
import useCustomRouter from '@/hooks/common/useCustomRouter';

const GNBLogin = dynamic(() => import('../GNBLogin/GNBLogin'), { ssr: false });

export default function GNBMenu() {
  const { userInfo } = useUserContext();
  const { handleOpen } = useAuthFormContext();
  const customRouter = useCustomRouter();

  const onMovePage = (path: string) => {
    if (userInfo?.token) {
      customRouter.push(path);
    } else {
      handleOpen();
    }
  };

  return (
    <div className='flex flex-col'>
      <GNBLogin />
      <ul className='flex text-2xl items-center gap-2'>
        <li>
          <button
            className='flex items-center'
            onClick={() => alert('준비중입니다.')}
          >
            <FaRegHeart />
          </button>
        </li>
        <li>
          <button
            className='flex items-center'
            onClick={() => onMovePage('/my/order')}
          >
            <IoPersonOutline />
          </button>
        </li>
        <li>
          <button
            className='flex items-center'
            onClick={() => onMovePage('/my/order')}
          >
            <CiDeliveryTruck size='32px' />
          </button>
        </li>
        <li>
          <button
            className='flex items-center'
            onClick={() => onMovePage('/o/cart')}
          >
            <BsCart />
          </button>
        </li>
      </ul>
    </div>
  );
}
