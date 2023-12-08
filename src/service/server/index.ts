import { fetchInstance } from '@/network/http';
import { ProductServerService } from './product';
import { CategoryServerService } from './category';
import PaymentServerService from './payment';
import OrderServerService from './order';

export const serverService = {
  product: new ProductServerService(fetchInstance),
  category: new CategoryServerService(fetchInstance),
  payment: new PaymentServerService(fetchInstance),
  order: new OrderServerService(fetchInstance),
};
