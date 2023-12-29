import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type Props = {
  setOpenState: Dispatch<SetStateAction<boolean>>;
};
export default function useRefOutClickHelper<T extends HTMLElement>({
  setOpenState,
}: Props) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const onClose = (e: MouseEvent) => {
      if (
        e.target !== null &&
        e.target !== ref.current &&
        !ref.current?.contains(e.target as HTMLElement)
      ) {
        setOpenState(false);
      }
    };

    document.addEventListener('click', onClose);

    return () => document.removeEventListener('click', onClose);
  }, [ref, setOpenState]);

  return { ref };
}
