import { BsCart3 } from 'react-icons/bs';
import { CiCreditCard1 } from 'react-icons/ci';
import { GiConfirmed } from 'react-icons/gi';

const cartHeader = {
  cart: {
    name: '장바구니',
    iconComponent: <BsCart3 />,
  },
  order: {
    name: '주문/결제',
    iconComponent: <CiCreditCard1 />,
  },
  complate: {
    name: '주문완료',
    iconComponent: <GiConfirmed />,
  },
};

type CurrentPage = keyof typeof cartHeader;

type Props = {
  currentPage: CurrentPage;
};

export default function CartHeader({ currentPage }: Props) {
  return (
    <div className='flex justify-between shrink-0 py-10 mb-10 border-b-2 border-zinc-600 '>
      <h2 className='flex items-center text-4xl font-bold gap-2'>
        {cartHeader[currentPage].iconComponent}
        <p>{cartHeader[currentPage].name}</p>
      </h2>

      <ul className='flex gap-4 font-bold text-white'>
        <li
          className={`flex flex-col items-center p-6  rounded-full ${
            currentPage === 'cart' ? 'bg-black' : 'bg-zinc-300'
          }`}
        >
          <span>01</span>
          <span>장바구니</span>
        </li>
        <li
          className={`flex flex-col items-center p-6  rounded-full ${
            currentPage === 'order' ? 'bg-black' : 'bg-zinc-300'
          }`}
        >
          <span>02</span>
          <span>주문/결제</span>
        </li>
        <li
          className={`flex flex-col items-center p-6 rounded-full ${
            currentPage === 'complate' ? 'bg-black' : 'bg-zinc-300'
          }`}
        >
          <span>03</span>
          <span>주문완료</span>
        </li>
      </ul>
    </div>
  );
}
