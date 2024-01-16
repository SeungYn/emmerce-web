'use client';
import BrandFilter from '@/components/product/filter/BrandFilter/BrandFilter';
import useCustomRouter from '@/hooks/common/useCustomRouter';
import { Product } from '@/service/types/product';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { filterBrandList } from '@/util/lib/util';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChangeEventHandler, useState } from 'react';

export type BrandState = {
  name: string;
  checked: boolean;
};

type Props = {
  productList: Product[];
};

export default function BrandFilterContainer({ productList }: Props) {
  const router = useCustomRouter();
  const [brandList, setBrandList] = useState<BrandState[]>(
    [...filterBrandList(productList)].map((v) => ({ name: v, checked: false }))
  );
  const [keyword, setKeyword] = useState('');
  const searchParams = new NextURLSearchParams(useSearchParams());
  const pathname = usePathname();
  const pushRoute = (pathname: string, query: string) => {
    router.push(pathname + '?' + query);
  };
  const brandListByKeyword = brandList.filter((o) => o.name.includes(keyword));

  const onChangeKeyword: ChangeEventHandler<HTMLInputElement> = (e) =>
    setKeyword(e.target.value);
  const onChangeCheckBox: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target;
    setBrandList((list) =>
      list.map((o) => ({
        ...o,
        checked: o.name === value ? checked : false,
      }))
    );
    if (checked)
      pushRoute(pathname, searchParams.setQueryString('brand', value));
    else pushRoute(pathname, searchParams.deleteQueryString('brand'));
  };
  return (
    <>
      <BrandFilter
        brandList={brandList}
        brandListByKeyword={brandListByKeyword}
        keyword={keyword}
        onChangeCheckBox={onChangeCheckBox}
        onChangeKeyword={onChangeKeyword}
      />
    </>
  );
}
