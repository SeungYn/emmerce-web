import { AxiosInstance } from 'axios';
import { ProductList } from '../types/product';

export default class ProductService {
  constructor(private axios: AxiosInstance) {}

  async getRecommentProducts(categoryId: number | string) {
    const query = `/category/${categoryId}/product/list?size=10`;
    const { data } = await this.axios.get<ProductList>(query);

    return data;
  }
}
