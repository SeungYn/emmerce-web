'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  titleImg: string;
};

const INITIAL_IMAGE_SIZE = { width: 640, height: 640 };
const INITIAL_CONTAINER_COORDNATE = {
  left: 0,
  top: 0,
};
const INITIAL_MAGINIFIER_COORDNATE = {
  left: 0,
  top: 0,
  width: 200,
  height: 200,
  scale: 1,
};

export default function DetailZoom({ titleImg }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const [isEnter, setIsEnter] = useState(false);
  const [containerCoordnate, setContainerCoordnate] = useState(
    INITIAL_CONTAINER_COORDNATE
  );
  const [maginifierCoordnate, setMaginifierCoordnate] = useState(
    INITIAL_MAGINIFIER_COORDNATE
  );
  const ratioMagnifierZoomTarget = getRatioMaginifier(
    maginifierCoordnate.width,
    INITIAL_IMAGE_SIZE.width
  );

  // container 최초 좌표
  useEffect(() => {
    if (containerRef.current) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      setContainerCoordnate({ left: x, top: y });
    }
    // document.addEventListener('mousemove', (e) => {
    //   console.log(e.clientY);
    // });
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative cursor-crosshair'
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      onWheel={(e) => {
        let scale = maginifierCoordnate.scale + e.deltaY * -0.01;
        scale = Math.min(Math.max(1, scale), 2);
        let sizeDifference = 1;

        // 휠 다운에 따른 크기 전, 후의 차이
        if (e.deltaY < 0) {
          sizeDifference *= -1;
          sizeDifference *=
            scale * INITIAL_MAGINIFIER_COORDNATE.width -
            maginifierCoordnate.width;
        } else {
          sizeDifference *=
            maginifierCoordnate.width -
            scale * INITIAL_MAGINIFIER_COORDNATE.width;
        }

        if (scale === maginifierCoordnate.scale) sizeDifference = 0;

        setMaginifierCoordnate((v) => ({
          ...v,
          scale,
          width: scale * INITIAL_MAGINIFIER_COORDNATE.width,
          height: scale * INITIAL_MAGINIFIER_COORDNATE.height,
          left: v.left + sizeDifference / 2,
          top: v.top + sizeDifference / 2,
        }));
      }}
      onMouseMove={(e) => {
        //console.log(e);
        let x = 0,
          y = 0;
        if (magnifierRef.current) {
          // const { x: cx, y: cy } = magnifierRef.current.getBoundingClientRect();
          //console.log(containerCoordnate.top, e.clientY);
          x =
            e.clientX - containerCoordnate.left - maginifierCoordnate.width / 2;
          y =
            e.clientY - containerCoordnate.top - maginifierCoordnate.width / 2;

          if (x < 0) x = 0;
          if (y < 0) y = 0;
          if (x + maginifierCoordnate.width > INITIAL_IMAGE_SIZE.width)
            x = INITIAL_IMAGE_SIZE.width - maginifierCoordnate.width;
          if (y + maginifierCoordnate.height > INITIAL_IMAGE_SIZE.height)
            y = INITIAL_IMAGE_SIZE.height - maginifierCoordnate.height;
          setMaginifierCoordnate((v) => ({ ...v, left: x, top: y }));
        }
      }}
    >
      <Image
        src={titleImg}
        width={INITIAL_IMAGE_SIZE.width}
        height={INITIAL_IMAGE_SIZE.height}
        style={{ width: '640px', height: '640px' }}
        sizes='640px'
        alt='아이템 이미지'
      />
      {/* 확대 이미지 */}
      <div
        className={`absolute  left-[660px] w-[640px] h-[640px] top-0 `}
        style={{
          display: isEnter ? 'block' : 'none',
          backgroundImage: `url(${titleImg})`,
          backgroundSize: `${
            INITIAL_IMAGE_SIZE.width * ratioMagnifierZoomTarget
          }px ${INITIAL_IMAGE_SIZE.height * ratioMagnifierZoomTarget}px`,
          backgroundPosition: `-${
            maginifierCoordnate.left * ratioMagnifierZoomTarget
          }px -${maginifierCoordnate.top * ratioMagnifierZoomTarget}px`,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* 돋보기 */}
      <div
        ref={magnifierRef}
        style={{
          left: maginifierCoordnate.left,
          top: maginifierCoordnate.top,
          width: maginifierCoordnate.width,
          height: maginifierCoordnate.height,
          opacity: isEnter ? 1 : 0,
        }}
        className='top-0 absolute  bg-slate-100  bg-opacity-50 border border-black '
      ></div>
    </div>
  );
}

function getRatioMaginifier(m: number, originSize: number) {
  return originSize / m;
}
