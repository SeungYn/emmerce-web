import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import BrandIconList from '@/components/home/BrandIconList/BrandIconList';
import CustomItems from '@/components/home/content/CustomItems/CustomItems';
import SliderBannerContainer from '@/container/home/banner/SliderBannerContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <SliderBannerContainer />
      <BrandIconList />
      <MaxXLContainer className='mt-10'>
        <CustomItems />
      </MaxXLContainer>
    </>
  );
}
