import { MdOutlineDoNotTouch } from 'react-icons/md';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen flexitems-center flex items-center'>
      <MaxXLContainer className=''>
        <div className='flex flex-col justify-center items-center bg-zinc-100 rounded-3xl py-60'>
          <MdOutlineDoNotTouch className='text-9xl' />
          <strong className='text-4xl mt-6'>
            요청한 페이지를 찾을 수 없습니다.
          </strong>
          <p className='text-sm leading-4 text-center mt-6'>
            방문하시려는 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를
            찾을 수 없습니다. <br />
            입력한 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
          </p>
          <Link href='/' className='bg-white rounded-3xl py-2 px-4 mt-4'>
            홈으로
          </Link>
        </div>
      </MaxXLContainer>
    </div>
  );
}
