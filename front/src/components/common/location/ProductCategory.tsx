import { ProductCategoryInfo } from '@/service/types/category';
import { combineCateNameAndId } from '@/util/lib/util';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
  productCategoryInfo: ProductCategoryInfo[];
};

export default function ProductCategory({ productCategoryInfo }: Props) {
  const categoriesLength = productCategoryInfo.length;

  return (
    <ul className='text-sm text-gray-400 flex items-center '>
      <a>
        <li>HOME</li>
      </a>
      {categoriesLength >= 1 && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <Link
              href={`/category/${
                productCategoryInfo[0].categoryId
              }?mainCate=${combineCateNameAndId(productCategoryInfo[0])}`}
            >
              {productCategoryInfo[0].name}
            </Link>
          </li>
        </>
      )}
      {categoriesLength >= 2 && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <Link
              href={`/category/${
                productCategoryInfo[1].categoryId
              }?mainCate=${combineCateNameAndId(
                productCategoryInfo[0]
              )}&subCate=${combineCateNameAndId(productCategoryInfo[1])}`}
            >
              {productCategoryInfo[1].name}
            </Link>
          </li>
        </>
      )}
      {categoriesLength >= 3 && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <Link
              href={`/category/${
                productCategoryInfo[2].categoryId
              }?mainCate=${combineCateNameAndId(
                productCategoryInfo[0]
              )}&subCate=${combineCateNameAndId(
                productCategoryInfo[1]
              )}&kind=${combineCateNameAndId(productCategoryInfo[2])}`}
            >
              {productCategoryInfo[2].name}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
