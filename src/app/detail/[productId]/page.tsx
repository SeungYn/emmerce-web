import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import ProductCategory from '@/components/common/location/ProductCategory';
import ProductDetailInfo from '@/components/product/detail/ProductDetailInfo/ProductDetailInfo';
import ProductDetailMain from '@/components/product/detail/ProductDetailMain/ProductDetailMain';
import { serverService } from '@/service/server';

export default async function page({
  params,
}: {
  params: { productId: number };
}) {
  const { productId } = params;
  const productCategoryInfo =
    await serverService.category.getProductCategoryInfo(productId);
  const productDetail = await serverService.product.getProductDetail(productId);

  return (
    <>
      <MaxXLContainer className='mt-4'>
        <ProductCategory productCategoryInfo={productCategoryInfo} />
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
