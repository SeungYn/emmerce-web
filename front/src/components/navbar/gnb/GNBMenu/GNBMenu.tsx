import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import GNBLogin from '../GNBLogin/GNBLogin';

export default function GNBMenu() {
  return (
    <div className='flex flex-col'>
      <GNBLogin />
      <ul className='flex text-2xl items-center gap-2'>
        <li>
          <FaRegHeart />
        </li>
        <li>
          <IoPersonOutline />
        </li>
        <li>
          <CiDeliveryTruck size='32px' />
        </li>
        <li>
          <BsCart />
        </li>
      </ul>
    </div>
  );
}
