import { fetchInstance } from '@/network/http';
import { ProductServerService } from './product';
import { CategoryServerService } from './category';
import PaymentServerService from './payment';

export const serverService = {
  product: new ProductServerService(fetchInstance),
  category: new CategoryServerService(fetchInstance),
  payment: new PaymentServerService(fetchInstance),
};
