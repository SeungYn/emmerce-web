import MiniItem from '@/components/common/listitem/MiniItem/MiniItem';

export default function CustomItems() {
  return (
    <div>
      <div className='flex shrink-0 items-center'>
        <h3 className='text-3xl font-semibold'>고객님을 위해 준비했어요</h3>
        <span className='text-gray-400 ml-3'>당신을 위한 맞춤 상품</span>
      </div>

      <div className='overflow-auto'>
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
