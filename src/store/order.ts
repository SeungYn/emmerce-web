import { Delivery } from '@/service/types/order';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface DeliveryForm extends Delivery {
  telFirst: string;
  telSecond: string;
  telThird: string;
}

interface DeliveryState extends DeliveryForm {
  dispatch: (action: DeliveryStateActionType) => void;
}

type DeliveryStateType = keyof DeliveryForm | 'reset';

type DeliveryStateActionType = { type: DeliveryStateType; payload: string };

const initialDeliveryState = {
  name: '',
  tel: '',
  telFirst: '',
  telSecond: '',
  telThird: '',
  email: '',
  city: '',
  street: '',
  zipcode: '',
};

function deliverStateReduceer(
  state: DeliveryState,
  action: DeliveryStateActionType
) {
  const { payload, type } = action;

  switch (type) {
    case 'city':
      return { ...state, city: payload };
    case 'tel':
      return { ...state, telFirst: payload };
    case 'telFirst':
      return {
        ...state,
        telFirst: payload,
        tel: payload + state.telSecond + state.telThird,
      };
    case 'telSecond':
      return {
        ...state,
        telSecond: payload,
        tel: state.telFirst + payload + state.telThird,
      };
    case 'telThird':
      return {
        ...state,
        telThird: payload,
        tel: state.telFirst + state.telSecond + payload,
      };
    case 'email':
      return { ...state, email: payload };
    case 'name':
      return { ...state, name: payload };
    case 'street':
      return { ...state, street: payload };
    case 'zipcode':
      return { ...state, zipcode: payload };
    case 'reset':
      return { ...initialDeliveryState };
  }
}

export const useDeliveryFormFluxStore = create<DeliveryState>()(
  devtools((set) => ({
    ...initialDeliveryState,
    dispatch: (action: DeliveryStateActionType) =>
      set((state) => deliverStateReduceer(state, action)),
  }))
);
