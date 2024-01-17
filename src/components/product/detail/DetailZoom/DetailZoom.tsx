'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  titleImg: string;
};

const imageSize = 640;
const initialContainerCoordnate = {
  left: 0,
  top: 0,
};
const initialMaginifierCoordnate = {
  left: 0,
  top: 0,
  width: 200,
  height: 200,
  scale: 1,
};
export default function DetailZoom({ titleImg }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const [containerCoordnate, setContainerCoordnate] = useState(
    initialContainerCoordnate
  );
  const [maginifierCoordnate, setMaginifierCoordnate] = useState(
    initialMaginifierCoordnate
  );
  const ratioMagnifierZoomTarget = getRatioMaginifier(
    maginifierCoordnate.width,
    imageSize
  );

  // container 최초 좌표
  useEffect(() => {
    if (containerRef.current) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      setContainerCoordnate({ left: x, top: y });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative'
      onWheel={(e) => {
        let scale = maginifierCoordnate.scale + e.deltaY * -0.01;
        let sizeDifference = 1;
        if (e.deltaY < 0) sizeDifference *= -1;
        scale = Math.min(Math.max(1, scale), 2);
        sizeDifference *=
          scale * maginifierCoordnate.width - maginifierCoordnate.width;
        if (scale === maginifierCoordnate.scale) sizeDifference = 0;

        console.log(
          sizeDifference,
          scale,
          imageSize,
          scale * maginifierCoordnate.width - maginifierCoordnate.width,
          maginifierCoordnate.width
        );
        setMaginifierCoordnate((v) => ({
          ...v,
          scale,
          width: scale * initialMaginifierCoordnate.width,
          // left: v.left + sizeDifference / 2,
          // top: v.top + sizeDifference / 2,
        }));
      }}
      onMouseMove={(e) => {
        //console.log(e);
        let x = 0,
          y = 0;
        if (magnifierRef.current) {
          // const { x: cx, y: cy } = magnifierRef.current.getBoundingClientRect();
          x =
            e.clientX - containerCoordnate.left - maginifierCoordnate.width / 2;
          y =
            e.clientY - containerCoordnate.top - maginifierCoordnate.width / 2;

          if (x < 0) x = 0;
          if (y < 0) y = 0;
          if (x + maginifierCoordnate.width > imageSize)
            x = imageSize - maginifierCoordnate.width;
          if (y + maginifierCoordnate.height > imageSize)
            y = imageSize - maginifierCoordnate.height;
          setMaginifierCoordnate((v) => ({ ...v, left: x, top: y }));
        }
      }}
    >
      <Image
        src={titleImg}
        width={imageSize}
        height={imageSize}
        style={{ width: '640px', height: '640px' }}
        sizes='640px'
        alt='아이템 이미지'
      />
      {/* 확대 이미지 */}
      <div
        className={`absolute  left-[660px] w-[640px] h-[640px] top-0 `}
        style={{
          backgroundImage: `url(${titleImg})`,
          backgroundSize: `${imageSize * ratioMagnifierZoomTarget}px ${
            imageSize * ratioMagnifierZoomTarget
          }px`,
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
        }}
        className='top-0 absolute  bg-black '
      ></div>
    </div>
  );
}

function getRatioMaginifier(m: number, originSize: number) {
  return originSize / m;
}
