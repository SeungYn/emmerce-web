import { ProductDetail } from '@/service/types/product';
import InfoImgContents from '../InfoImgContents/InfoImgContents';
import InfoTab from '../InfoTab/InfoTab';
import InfoReviewContainer from '@/container/review/InfoReviewContainer';

type Props = {
  productDetail: ProductDetail;
};

export default function ProductDetailInfo({ productDetail }: Props) {
  return (
    <div>
      <InfoTab />
      <InfoImgContents imgList={productDetail.detailImgList} />
      <InfoReviewContainer productId={productDetail.productId} />
    </div>
  );
}
