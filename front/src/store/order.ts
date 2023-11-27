import { create } from 'zustand';

export interface DeliveryForm {
  name: string;
  tel: string;
  telFirst: string;
  telSecond: string;
  telThird: string;
  email: string;
  city: string;
  street: string;
  zipcode: string;
}

interface DeliveryState extends DeliveryForm {
  dispatch: (action: DeliveryStateActionType) => void;
}

type DeliveryStateActionType = { type: keyof DeliveryForm; payload: string };

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
        tel: state.telSecond + payload + state.telThird,
      };
    case 'telThird':
      return {
        ...state,
        telThird: payload,
        tel: state.telSecond + state.telSecond + payload,
      };
    case 'email':
      return { ...state, email: payload };
    case 'name':
      return { ...state, name: payload };
    case 'street':
      return { ...state, street: payload };
    case 'zipcode':
      return { ...state, zipcode: payload };
  }
}
export const useDeliveryFormFluxStore = create<DeliveryState>()((set) => ({
  ...initialDeliveryState,
  dispatch: (action: DeliveryStateActionType) =>
    set((state) => deliverStateReduceer(state, action)),
}));
