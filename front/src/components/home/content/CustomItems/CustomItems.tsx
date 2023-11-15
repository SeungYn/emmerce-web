import MiniItem from '@/components/common/listitem/MiniItem/MiniItem';
import Header from '../Header/Header';

export default function CustomItems() {
  return (
    <div>
      <Header
        title='고객님을 위해 준비했어요'
        subTitle='당싱을 위한 맞춤 상품'
      />

      <div className='overflow-auto mt-4'>
        <ul className='flex flex-wrap shrink-0 w-[1500px] gap-4'>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
          <li className='w-[340px]'>
            <MiniItem />
          </li>
        </ul>
      </div>
    </div>
  );
}
