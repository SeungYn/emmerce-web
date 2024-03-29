import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import SliderBanner from '@/components/home/banner/SliderBanner/SliderBanner';

// 이랜드 height 543px
export default function SliderBannerContainer() {
  return (
    <section className='py-10 bg-gray-100'>
      <MaxXLContainer>
        <SliderBanner />
      </MaxXLContainer>
    </section>
  );
}
