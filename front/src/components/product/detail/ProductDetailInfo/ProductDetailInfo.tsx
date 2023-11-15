import InfoImgContents from '../InfoImgContents/InfoImgContents';
import InfoTab from '../InfoTab/InfoTab';
import InfoReview from '../review/InfoReview/InfoReview';

export default function ProductDetailInfo() {
  return (
    <div>
      <InfoTab />
      <InfoImgContents imgList={['/assets/sample/detail-info.jpeg']} />
      <InfoReview />
    </div>
  );
}
