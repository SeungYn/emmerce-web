'use client';

import { useEffect } from 'react';

export default function TestIframe() {
  useEffect(() => {
    window.addEventListener('message', (e) => {
      console.log(e);
    });
  }, []);

  return <div>iframe페이지 입니다!!</div>;
}
