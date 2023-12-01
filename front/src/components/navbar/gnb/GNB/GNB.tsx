import Category from '../../category/Category/Category';
import { CategoryList } from '@/service/types/category';
import GNBLogo from '../GNBLogo/GNBLogo';
import NavbarForm from '../../NavbarForm/NavbarForm';
import GNBMenu from '../GNBMenu/GNBMenu';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GNBNavbarForm from '../GNBNavbarForm/GNBNavbarForm';

type Props = {
  categoryList: CategoryList;
};

export default function GNB({ categoryList }: Props) {
  return (
    <nav className='w-full pt-2' suppressHydrationWarning>
      <div className='border-b border-zinc-200 py-3'>
        <MaxXLContainer>
          <div className='flex justify-between items-center  relative'>
            <GNBLogo />
            <GNBNavbarForm />
            <GNBMenu />
          </div>
        </MaxXLContainer>
      </div>
      <Category categoryList={categoryList} />
    </nav>
  );
}
