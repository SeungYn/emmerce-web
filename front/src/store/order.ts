import { create } from 'zustand';

interface DeliveryState {
  name: string;
  tel: string;
  email: string;
  city: string;
  street: string;
  zipcode: string;
}
type DeliveryStateFormType =
  | 'name'
  | 'tel'
  | 'email'
  | 'city'
  | 'street'
  | 'zipcode';

type DeliveryStateActionType = { type: DeliveryStateFormType; payload: string };

const initialDeliveryState = {
  name: '',
  tel: '',
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
      return { ...state, tel: payload };
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
