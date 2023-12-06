export type PaymentReadyRes = {
  tid: string;
  next_redirect_pc_url: string;
  created_at: string;
};

export type PaymentApproveReq = {
  orderId: number | string;
  pg_token: string;
};

export type PaymentApproveRes = {
  aid: string;
  tid: string;
  cid: string;
  sid: unknown;
  partner_order_id: string;
  partner_user_id: string;
  payment_method_type: string;
  amount: {
    total: number;
    tax_free: number;
    vat: number;
    point: number;
    discount: number;
    green_deposit: number;
  };
  card_info: {
    purchase_corp: string;
    purchase_corp_code: string;
    issuer_corp: string;
    issuer_corp_code: string;
    bin: string;
    card_type: string;
    install_month: string;
    approved_id: string;
    card_mid: string;
    interest_free_install: string;
    card_item_code: string;
  };
  item_name: string;
  item_code: unknown;
  quantity: number;
  created_at: Date;
  approved_at: Date;
  payload: unknown;
};

export type PaymentInfoRes = {
  tid: string;
  cid: string;
  status: string;
  partner_order_id: string;
  partner_user_id: string;
  payment_method_type: string;
  amount: {
    total: number;
    tax_free: number;
    vat: number;
    point: number;
    discount: number;
    green_deposit: number;
  };
  canceled_amount: {
    total: number;
    tax_free: number;
    vat: number;
    point: number;
    discount: number;
    green_deposit: number;
  };
  cancel_available_amount: {
    total: number;
    tax_free: number;
    vat: number;
    point: number;
    discount: number;
    green_deposit: number;
  };
  item_name: string;
  item_code: unknown;
  quantity: number;
  created_at: Date;
  approved_at: Date;
  canceled_at: Date;
  selected_card_info: {
    card_bin: string;
    install_month: number;
    card_corp_name: string;
    interest_free_install: string;
  };
  payment_action_details: {
    aid: string;
    approved_at: string;
    amount: number;
    point_amount: number;
    discount_amount: number;
    green_deposit: number;
    payment_action_type: string;
    payload: unknown;
  }[];
};
