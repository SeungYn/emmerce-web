import { HttpServer } from '@/network/http';
import { Category, ProductCategoryInfo } from '../types/category';

export async function getCategoryList() {
  const res = await fetch('https://emmerce.duckdns.org/category/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: false,
    },
  });
  const data = (await res.json()) as Category[];

  const firstCategories = [] as Category[];
  const secondCategories = [] as Category[];
  const thirdCategories = [] as Category[];

  data.forEach((v) => {
    if (v.tier === 1) firstCategories.push(v);
    else if (v.tier === 2) secondCategories.push(v);
    else thirdCategories.push(v);
  });

  const subCategories = secondCategories.map((v) => {
    const kinds = thirdCategories.filter((i) => v.code === i.parentCode);

    return { subCategory: v, kinds };
  });

  const categories = firstCategories.map((item) => {
    const subCatregoryList = subCategories.filter(
      (v) => item.code === v.subCategory.parentCode
    );
    return { mainCategory: item, subCategories: subCatregoryList };
  });

  categories.sort(
    (a, b) => a.mainCategory.categoryId - b.mainCategory.categoryId
  );

  return categories;
}

export class CategoryServerService {
  constructor(private http: HttpServer) {}

  async getProductCategoryInfo(productId: number | string) {
    const data = await this.http.fetch<ProductCategoryInfo[]>(
      `/product/${productId}/categories`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    data.sort((a, b) => a.tier - b.tier);

    return data;
  }
}
