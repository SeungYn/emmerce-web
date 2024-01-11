import Header from '../Header/Header';

export default function CommonMainSkeleton() {
  return (
    <section>
      <Header title='오늘의 추천' subTitle='놓쳐서는 안 될 초특급 상품' />

      <div className='mt-4 animate-pulse'>
        <nav className='flex gap-4 shrink-0'>
          {['캐주얼/유니섹스', '티셔츠', '긴팔', '루즈핏/롱'].map((cate) => (
            <button
              key={cate}
              className={`p-2 px-4 w-[100px] h-[38px] rounded-full border border-gray-300 text-gray-400 text-sm bg-skeletonBG`}
            ></button>
          ))}
        </nav>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className='relative cursor-pointer'>
              <div>
                <div className='w-[246px] h-[240px] bg-skeletonBG rounded-lg'></div>
              </div>
              <div className='flex flex-col justify-center gap-1 mt-4'>
                <h4 className='bg-skeletonBG  w-[70px] h-[20px] rounded-lg'></h4>
                <p className='bg-skeletonBG  w-[100px] h-[20px] rounded-lg'></p>

                <span className='bg-skeletonBG  w-[70px] h-[20px] inline-block rounded-lg'></span>
                <div className='flex justify-between text-xl font-semibold rounded-lg'>
                  <p>
                    <span className='bg-skeletonBG w-[70px] h-[20px] inline-block rounded-lg'></span>
                  </p>
                  <span className='bg-skeletonBG w-[70px] h-[20px] inline-block rounded-lg'></span>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
