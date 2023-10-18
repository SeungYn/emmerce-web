import Image from 'next/image';
import TopBottomPaddingBox from '../../common/TopBottomPaddingBox/TopBottomPaddingBox';

export default function ProductDetailMain() {
  return (
    <section>
      <div>
        <a href='' className='text-2xl font-bold'>
          브랜드명
        </a>
      </div>
      {/* 메인 */}
      <div className='flex shrink-0 gap-6'>
        {/* left */}
        <div className='relative basis-[640px] '>
          <div>
            <Image
              src='/assets/slide/1.png'
              width={640}
              height={640}
              style={{ width: '640px', height: '640px' }}
              alt='아이템 이미지'
            />
          </div>

          <div className='flex items-center text-lg gap-2 pt-4'>
            <p className=' font-semibold'>고객리뷰</p>

            <div
              className='bg-no-repeat w-[150px] h-[24px] block bg-icons relative'
              style={{
                backgroundPosition: '-174px -177px',
              }}
            >
              <span
                className='w-[80%] bg-no-repeat h-[24px] block bg-icons absolute t-0 l-0'
                style={{
                  backgroundPosition: '-174px -146px',
                }}
              ></span>
            </div>
            <p className='pr-2 mr-2 border-r border-gray-300'>4.9점</p>
            <a
              href='#'
              className='border-b border-gray-300 text-gray-300 leading-5'
            >
              리뷰
            </a>
          </div>
        </div>
        {/* right */}
        <div className='basis-[640px] text-base'>
          <h2 className='font-semibold text-2xl'>
            [남녀공용] (우디) 그래픽 스웨트 셔츠_SPMWC12C3
          </h2>
          <TopBottomPaddingBox className='border-b border-gray-300'>
            <div className='flex shrink-0 items-center '>
              <span className='basis-[140px]'>판매가</span>
              <div className='flex items-end gap-4'>
                <h3 className='text-3xl font-semibold'>16,130원</h3>
                <span className='text-lg text-gray-400 line-through'>
                  35444원
                </span>
                <h3 className='text-3xl text-red-500 font-semibold'>55%</h3>
              </div>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>혜택안내</p>
            <div className='flex shrink-0 items-center pb-2'>
              <span className='basis-[140px]'>카드혜택</span>
              <p className='text-gray-400'>무이자 할부혜택 안내</p>
            </div>
            <div className='flex shrink-0 items-center'>
              <span className='basis-[140px]'>멤버십 포인트</span>
              <p className='text-gray-400'>19P적립</p>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>배송안내</p>
            <div className='flex shrink-0 items-center pb-2'>
              <span className='basis-[140px]'>배송비</span>
              <p className='text-gray-400'>2500원</p>
            </div>
            <div className='flex shrink-0 items-center'>
              <span className='basis-[140px]'>발송예정일</span>
              <p className='text-gray-400'>평균 0.3일 이내 발송</p>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>구매안내</p>
            <div className='flex shrink-0 items-center '>
              <span className='basis-[140px]'>최대구매수량</span>
              <p className='text-gray-400'>1회 10개 / 1인 10개</p>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <div className='flex '>
              <p className='basis-[140px]'>색상</p>
              <select
                className='w-full border border-gray-400'
                placeholder='색상 옵션을 선택해 주세요.'
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div className='flex pt-6'>
              <p className='basis-[140px]'>사이즈</p>
              <select
                className='w-full border border-gray-400'
                placeholder='사이즈 옵션을 선택해 주세요.'
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </TopBottomPaddingBox>
          <div className='flex pt-5'>
            <button className='basis-[50%] h-[53px] border border-black font-medium text-xl'>
              장바구니
            </button>
            <button className='basis-[50%]  h-[53px] border border-black font-medium text-xl text-white bg-black'>
              바로구매
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
