import MaxXLContainer from '../../container/MaxXLContainer';

export default function GlobalFooter() {
  return (
    <section className='py-6 mt-10'>
      <nav className='border-b border-t border-zinc-200 py-3'>
        <MaxXLContainer>
          <ul className='[&>*:not(:first-child)]:border-l-2 [&>*]:grow border-gray-300 flex justify-between text-center text-sm tracking-tight text-gray-400'>
            <li className=''>이머스 소개</li>
            <li className=''>이머스 상품권 소개</li>
            <li className=''>개인정보처리방침</li>
            <li className=''>영상정보처리기기 설치 운영 방침</li>
            <li className=''>약관안내</li>
            <li className=''>윤리경영</li>
            <li className=''>안전거래센터</li>
            <li className=''>전자세금 계산서</li>
            <li className=''>인터넷 쇼핑몰 입점 상담</li>
          </ul>
        </MaxXLContainer>
      </nav>
      <MaxXLContainer>
        <footer className='py-8'>
          <h2 className='text-xl font-bold'>EMMERCE MALL</h2>
          <p className='py-2 text-sm font-semibold'>이머스 온라인플랫폼</p>
          <div>
            <ul className='flex text-gray-400 text-xs [&>*:not(:first-child)]:border-l-2 border-gray-300'>
              <li className=''>대표자명 : 김떙떙</li>
              <li className='ml-2 pl-2'>서울 금천구 곡반정동 이머스몰</li>
              <li className='ml-2 pl-2'>
                고객센터 1899-9500(운영시간 : 오전9시~오후5시 30분 / 주말 및
                공휴일 휴무)
              </li>
            </ul>
            <ul className='flex text-gray-400 text-xs [&>*:not(:first-child)]:border-l-2 border-gray-300'>
              <li className=''>사업자등록번호</li>
              <li className='ml-2 pl-2'>통신판매업 신고번호</li>
              <li className='ml-2 pl-2'>사업자 정보확인</li>
            </ul>
            <ul className='flex text-gray-400 text-xs [&>*:not(:first-child)]:border-l-2 border-gray-300'>
              <li className=''>개인정보 보호책임자 김땡땡</li>
              <li className='ml-2 pl-2'>email@email.com</li>
              <li className='ml-2 pl-2'>호스팅 서비스 제공자</li>
            </ul>
          </div>
        </footer>
        <div className='text-gray-400 text-xs'>
          <p className='pb-2'>
            소비자피해보상보험 고객님은 안전거래를 위해 현금 등으로 결제시 저희
            쇼핑몰에서 가입한 구매 안전서비스를 이용하실 수 있습니다.
          </p>
          <p>
            이머스몰에서 판매되는 상품 중,특정 브랜드(다른 회사)의 상품에 대하여
            이머스몰은 통신판매 당사자가 아니므로 상품 및 상품정보, 거래에 대한
            책임은 판매자에게 있습니다.
            <br />각 상품의 페이지에서 판매자에 대한 구체적인 내용을 확인하시기
            바랍니다.
          </p>
        </div>
      </MaxXLContainer>
    </section>
  );
}
