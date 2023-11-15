import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import Location from '@/components/common/location/Location';
import ProductDetailInfo from '@/components/product/detail/ProductDetailInfo/ProductDetailInfo';
import ProductDetailMain from '@/components/product/detail/ProductDetailMain/ProductDetailMain';
import { serverService } from '@/service/server';

export default async function page({
  params,
}: {
  params: { productId: number };
}) {
  const productDetail = await serverService.product.getProductDetail(4);
  console.log(productDetail);
  return (
    <>
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      <MaxXLContainer className='mt-4'>
        <ProductDetailMain productDetail={productDetail} />
      </MaxXLContainer>
      <MaxXLContainer className='mt-4'>
        <ProductDetailInfo productDetail={productDetail} />
      </MaxXLContainer>
    </>
  );
}
