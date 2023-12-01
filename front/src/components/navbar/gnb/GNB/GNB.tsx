import Category from '../../category/Category/Category';
import { CategoryList } from '@/service/types/category';
import GNBLogo from '../GNBLogo/GNBLogo';
import NavbarForm from '../../NavbarForm/NavbarForm';

type Props = {
  categoryList: CategoryList;
};

export default function GNB({ categoryList }: Props) {
  return (
    <nav className='w-full' suppressHydrationWarning>
      <div className='flex justify-between'>
        <GNBLogo />
        <NavbarForm />
        <div>3</div>
      </div>
      <Category categoryList={categoryList} />
    </nav>
  );
}
