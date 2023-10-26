import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import Location from '@/components/common/location/Location';
import ProductDetailInfo from '@/components/product/detail/ProductDetailInfo/ProductDetailInfo';
import ProductDetailMain from '@/components/product/detail/ProductDetailMain/ProductDetailMain';

export default function page({ params }: { params: { productId: number } }) {
  console.log('params', params.productId);
  return (
    <>
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      <MaxXLContainer className='mt-4'>
        <ProductDetailMain />
      </MaxXLContainer>
      <MaxXLContainer className='mt-4'>
        <ProductDetailInfo />
      </MaxXLContainer>
    </>
  );
}
