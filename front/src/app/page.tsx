import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import BrandIconList from '@/components/home/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import ShowcaseItems from '@/components/home/content/ShowcaseItems/ShowcaseItems';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';

export default function Home() {
  return (
    <>
      <SliderBannerContainer />
      <BrandIconList />
      <MaxXLContainer className='mt-10'>
        <CustomItems />
      </MaxXLContainer>
      <MaxXLContainer className='mt-10'>
        <ShowcaseItems />
      </MaxXLContainer>
    </>
  );
}
