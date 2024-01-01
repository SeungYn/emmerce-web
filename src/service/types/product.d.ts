export type Product = {
  productId: number;
  brand: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  ratings: number;
  titleImg: string;
  likeCount: number;
};

export type ProductDetail = {
  productId: number;
  name: string;
  detail: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  stockQuantity: number;
  ratings: number;
  titleImg: string;
  detailImgList: string[];
  brand: string;
  enrollTime: string;
  likeCount: number;
};

export type Paging = {
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
};

export type ProductList = {
  content: Product[];
} & Paging;
