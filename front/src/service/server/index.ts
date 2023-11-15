import { fetchInstance } from '@/network/http';
import { ProductServerService } from './product';

export const serverService = {
  product: new ProductServerService(fetchInstance),
};
