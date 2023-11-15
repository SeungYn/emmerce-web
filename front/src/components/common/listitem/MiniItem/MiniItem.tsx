import Image from 'next/image';

type Props = {};

export default function MiniItem() {
  return (
    <div className='flex gap-2 shrink-0 mxh'>
      {/* after없이 border을 지정하면 미세 틈이 생기는데 after로 border을 해주면 커버 가능 */}
      <div className='relative shrink-0 rounded-xl w-[110px] overflow-hidden after:content-[""] after:absolute after:inset-0 after:border after:border-gray-400 after:rounded-xl'>
        {/* 이미지 태그가 */}
        <Image
          src='/assets/slide/1.png'
          width={111}
          height={111}
          style={{ width: '111px', height: '111px' }}
          alt='상품 이미지'
        />
      </div>

      <div className='flex flex-col justify-center'>
        <h4 className='text-sm font-bold'>브랜드명</h4>
        <p className='text-xs text-gray-500 break-all line-clamp-3'>
          설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
        </p>
        <span className='line-through text-gray-300 text-xs'>
          원가 가위표시
        </span>
        <div className='flex justify-between text-xl font-semibold'>
          <p>최종가격</p>
          <span className='text-red-500'>할인율</span>
        </div>
      </div>
    </div>
  );
}
{
}
