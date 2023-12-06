import { ProductDetail } from '@/service/types/product';
import InfoImgContents from '../InfoImgContents/InfoImgContents';
import InfoTab from '../InfoTab/InfoTab';
import InfoReview from '../review/InfoReview/InfoReview';
import InfoReviewContainer from '@/container/review/InfoReviewContainer';

type Props = {
  productDetail: ProductDetail;
};

export default function ProductDetailInfo({ productDetail }: Props) {
  return (
    <div>
      <InfoTab />
      {/* <InfoImgContents imgList={['/assets/sample/detail-info.jpeg']} /> */}
      <InfoReviewContainer productId={productDetail.productId} />
    </div>
  );
}
