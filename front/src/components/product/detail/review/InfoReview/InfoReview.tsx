export default function InfoReview() {
  return (
    <div>
      <h3 className='text-lg font-normal border-b border-black py-6'>
        리뷰(갯수)
      </h3>
      <ul className='[&>*]:border-b border-gray-300'>
        <li className='flex'>
          <div className='flex-grow p-6'>
            <div
              className='bg-no-repeat w-[140px] h-[30px] block bg-icons relative'
              style={{
                backgroundPosition: '-331px -110px',
              }}
            >
              <span
                className='w-[80%]  bg-no-repeat h-[30px] block bg-icons absolute t-0 l-0'
                style={{
                  backgroundPosition: '-331px -68px',
                }}
              ></span>
            </div>

            <p className='text-gray-400 pt-4'>옵션</p>
            <p className='whitespace-pre-line pt-4'>
              색이 너무 예뻐요!! 하늘색이 진짜 구름구름 해서 귀여운것
              같아요..ㅜㅜ
            </p>
          </div>
          <div className='basis-[20%] p-6'>
            <p>
              <span className='text-gray-400'>작성자 : </span>(사용자 아이디)
            </p>
            <p>
              <span className='text-gray-400'>등록일 : </span>(날짜)
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
