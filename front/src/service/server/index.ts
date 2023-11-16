import { fetchInstance } from '@/network/http';
import { ProductServerService } from './product';
import { CategoryServerService } from './category';

export const serverService = {
  product: new ProductServerService(fetchInstance),
  category: new CategoryServerService(fetchInstance),
};
