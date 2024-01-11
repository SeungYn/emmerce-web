import { ApproveResult } from '@/components/payment/PaymentSuccess/PaymentSuccess';
import service from '@/service/client';
import { PaymentApproveReq } from '@/service/types/payment';
import { useKakaoPayStore } from '@/store/payment/kakaoPayStore';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function usePaymentMutation() {
  const { setRedirect_pc_url } = useKakaoPayStore();

  const readyMutate = useMutation({
    mutationFn: (orderId: number | string) => {
      return service.payment.ready(orderId);
    },
    onSuccess: ({ next_redirect_pc_url }) => {
      setRedirect_pc_url(next_redirect_pc_url);
    },
  });

  const approveMutate = useMutation({
    mutationFn: (data: PaymentApproveReq) => {
      return service.payment.approve(data);
    },
  });

  const cancelMutate = useMutation({
    mutationFn: (orderId: number | string) => {
      return service.payment.cancel(orderId);
    },
  });

  return { readyMutate, approveMutate, cancelMutate };
}

export function usePaymentApproveMutate(
  setResult: Dispatch<SetStateAction<ApproveResult>>
) {
  const approveMutate = useMutation({
    mutationFn: (data: PaymentApproveReq) => {
      return service.payment.approve(data);
    },
    onSuccess: () => {
      setResult({ isLoading: false, result: 'SUCCESS' });
    },
    onError: () => {
      setResult({ isLoading: true, result: 'FAIL' });
    },
  });

  return approveMutate;
}
