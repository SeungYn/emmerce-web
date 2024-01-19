export default function ReviewSkeleton() {
  return (
    <div>
      <h3 className='text-lg font-normal border-b border-black py-6 '>
        리뷰()
      </h3>
      <ul className='[&>*]:border-b border-gray-300 animate-pulse'>
        {Array.from({ length: 5 }, (_, i) => (
          <li key={i} className='flex'>
            <div className='flex-grow p-6'>
              <div
                className='bg-no-repeat w-[140px] h-[30px] block bg-icons relative'
                style={{
                  backgroundPosition: '-331px -110px',
                }}
              ></div>

              <p className='text-gray-400  mt-4 bg-gray-300 w-3/4 h-8'></p>
              <p className='whitespace-pre-line mt-4  bg-gray-300 w-3/4 h-8'></p>
              <ul className='flex flex-wrap'>
                <li>
                  <div className='w-[200px] h-[200px] bg-gray-300 mt-4'></div>
                </li>
              </ul>
            </div>
            <div className='basis-[20%] p-6 `'>
              <p className='bg-gray-300 w-3/4 h-8'></p>
              <p className='bg-gray-300 w-3/4 h-20 mt-2'></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
