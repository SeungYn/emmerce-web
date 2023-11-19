import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import BrandIconList from '@/components/home/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import RankingItems from '@/components/home/content/RankingItems/RankingItems';
import ShowcaseItems from '@/components/home/content/ShowcaseItems/ShowcaseItems';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';
import RecommendProductsContainer from '@/container/product/RecommendProductsContainer';
import { serverService } from '@/service/server';
import { getCategoryList } from '@/service/server/category';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navbar/Navbar/Navbar'), {
  ssr: false,
});

export default async function Home() {
  const categoryList = await getCategoryList();
  const hotdealProductList = await serverService.product.getHotdealProducts();
  const rankingProductList = await serverService.product.getRankingProducts();
  const latestProductList = await serverService.product.getLatestProducts();

  return (
    <>
      <Navbar isLogo categoryList={categoryList} />
      <SliderBannerContainer />
      <BrandIconList />
      <MaxXLContainer className='mt-10'>
        <CustomItems productList={latestProductList} />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <RecommendProductsContainer />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <RankingItems productList={rankingProductList} />
      </MaxXLContainer>
      {/* <MaxXLContainer className='mt-10'>
        <RankingItems />
      </MaxXLContainer> */}
    </>
  );
}
