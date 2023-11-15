import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import BrandIconList from '@/components/home/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import RankingItems from '@/components/home/content/RankingItems/RankingItems';
import ShowcaseItems from '@/components/home/content/ShowcaseItems/ShowcaseItems';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';
import { getCategoryList } from '@/service/server/category';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navbar/Navbar/Navbar'), {
  ssr: false,
});

export default async function Home() {
  const categoryList = await getCategoryList();

  return (
    <>
      <Navbar isLogo categoryList={categoryList} />
      <SliderBannerContainer />
      <BrandIconList />
      <MaxXLContainer className='mt-10'>
        <CustomItems />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <ShowcaseItems />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <RankingItems />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <RankingItems />
      </MaxXLContainer>
    </>
  );
}
