import InfoImgContents from '../InfoImgContents/InfoImgContents';
import InfoTab from '../InfoTab/InfoTab';

export default function ProductDetailInfo() {
  return (
    <div>
      <InfoTab />
      <InfoImgContents imgList={['/assets/sample/detail-info.jpeg']} />
    </div>
  );
}
