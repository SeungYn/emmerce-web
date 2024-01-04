'use client';

import { useEffect, useRef } from 'react';

export default function IframeTestBtn() {
  const divRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const testCallback = () => {
      alert('test callback');
    };
    // if (divRef.current !== null) {
    //   window.addEventListener('message', (e) => {
    //     if (e.data) {
    //       divRef.current!.innerText = e.data.fc as string;
    //       e.data?.fc();
    //     }
    //   });
    // }

    window.addEventListener('message', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div id='testdiv' ref={divRef}>
      <iframe ref={iframeRef} src='/iframetest/iframe'></iframe>
      <button
        onClick={() => {
          iframeRef.current?.contentWindow?.postMessage({ d: 123 });
        }}
      >
        자식 iframe한테 메세지 보내기
      </button>
    </div>
  );
}
