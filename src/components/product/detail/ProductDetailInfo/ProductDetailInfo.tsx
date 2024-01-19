import { ProductDetail } from '@/service/types/product';
import InfoImgContents from '../InfoImgContents/InfoImgContents';
import InfoTab from '../InfoTab/InfoTab';
import InfoReviewContainer from '@/container/review/InfoReviewContainer';
import InfoDelivery from '../InfoDelivery/InfoDelivery';
import QnA from '../QnA/QnA';

type Props = {
  productDetail: ProductDetail;
};

export default function ProductDetailInfo({ productDetail }: Props) {
  return (
    <div>
      <InfoTab />
      <InfoImgContents imgList={productDetail.detailImgList} />
      <InfoReviewContainer productId={productDetail.productId} />
      <QnA />
      <InfoDelivery />
    </div>
  );
}
