import Category from '../../category/Category/Category';
import { CategoryList } from '@/service/types/category';
import GNBLogo from '../GNBLogo/GNBLogo';

type Props = {
  categoryList: CategoryList;
};

export default function GNB({ categoryList }: Props) {
  return (
    <nav className='w-full' suppressHydrationWarning>
      <div className='flex justify-between'>
        <GNBLogo />
        <div>2</div>
        <div>3</div>
      </div>
      <Category categoryList={categoryList} />
    </nav>
  );
}
