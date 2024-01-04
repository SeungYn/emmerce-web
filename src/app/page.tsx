import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import BrandIconList from '@/components/home/brand-icons/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import HotDeal from '@/components/home/content/HotDeal/HotDeal';
import RankingItems from '@/components/home/content/RankingItems/RankingItems';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';
import RecommendProductsContainer from '@/container/product/RecommendProductsContainer';
import { serverService } from '@/service/server';

//https://emmerce1.duckdns.org

export default async function Home() {
  const categoryList = await serverService.category.getCategoryList();
  const hotdealProductList = await serverService.product.getHotdealProducts();
  const rankingProductList = await serverService.product.getRankingProducts();
  const latestProductList = await serverService.product.getLatestProducts();

  return (
    <>
      <GNB categoryList={categoryList} />
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
      <MaxXLContainer className='mt-10'>
        <HotDeal productList={hotdealProductList} />
      </MaxXLContainer>
      <GlobalFooter />
    </>
  );
}
