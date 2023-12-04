import { HttpServer } from '@/network/http';
import { Product, ProductDetail, ProductList } from '../types/product';

export async function getProductListByCategory({
  categoryId,
  keyword,
  brand,
  limit,
  maxPrice,
  minPrice,
}: {
  categoryId: number | string;
  keyword?: string;
  brand?: string;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
}): Promise<ProductList> {
  const query = `?${keyword ? `keyword=${keyword}?` : ''}${
    brand ? `brand=${brand}?` : ''
  }${limit ? `limit=${limit}?` : ''}${maxPrice ? `maxPrice=${maxPrice}?` : ''}${
    minPrice ? `minPrice=${minPrice}?` : ''
  }`;

  const res = await fetch(
    `http://localhost:8088/category/${categoryId}/product/list${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return res.json();
}

export class ProductServerService {
  constructor(private http: HttpServer) {}

  async getProductDetail(productId: number | string) {
    const data = await this.http.fetch<ProductDetail>(`/product/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }

  async getLatestProducts() {
    const data = await this.http.fetch<Product[]>(`/product/latest`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }

  async getHotdealProducts() {
    const data = await this.http.fetch<Product[]>(`/product/hot-deal`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }

  async getRankingProducts() {
    const data = await this.http.fetch<Product[]>(`/product/ranking`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }

  async getProductListByKeyword({
    keyword,
    brand,
    limit,
    maxPrice,
    minPrice,
  }: {
    keyword?: string;
    brand?: string;
    limit?: number;
    minPrice?: number;
    maxPrice?: number;
  }) {
    const query = `?${keyword ? `keyword=${keyword}?` : ''}${
      brand ? `brand=${brand}?` : ''
    }${limit ? `limit=${limit}?` : ''}${
      maxPrice ? `maxPrice=${maxPrice}?` : ''
    }${minPrice ? `minPrice=${minPrice}?` : ''}`;

    const data = await this.http.fetch<ProductList>(`/product/search${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data;
  }
}
