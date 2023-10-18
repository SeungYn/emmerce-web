import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import BrandIconList from '@/components/home/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import RankingItems from '@/components/home/content/RankingItems/RankingItems';
import ShowcaseItems from '@/components/home/content/ShowcaseItems/ShowcaseItems';
import Navbar from '@/components/navbar/Navbar/Navbar';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';

export default function Home() {
  return (
    <>
      <Navbar isLogo />
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
