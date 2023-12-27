import AuthBackground from '@/components/auth/AuthBackground';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthFormContextProvider from '@/context/auth/AuthFormContext';
import ReactQueryContext from '@/context/common/ReactQueryContext';
import UserContextProvider from '@/context/auth/UserContext';
import React, { Suspense } from 'react';
import GlobalLoading from '@/components/common/loading/GlobalLoading/GlobalLoading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://emmerce1.duckdns.org'),
  title: {
    template: '%s | 이머스몰',
    default: '이머스 공식 온라인 스토어 | 이머스몰',
  },
  description:
    '뉴발란스, 스파오, 미쏘, 로엠, 후아유 등 이랜드의 모든 패션 브랜드와 쇼핑 혜택을 가장 빠르게 만나보세요!',
  keywords:
    '패션,캐주얼,유니섹스,여성의류,언더웨어,잠옷,레저,스포츠,슈즈,가방,잡화,주얼리,시계,뷰티,해외명품,남성의류,유아동패션,유아동용품,가구,패브릭,홈데코,주방,생활,수납,청소,가전,디지털,식품,펫,문구,취미,여행,상품권,티켓',
  openGraph: {
    images: '/assets/logo/opengraph-image.png',
    type: 'website',
    siteName: '이머스몰',
    title: '이머스 공식 온라인 스토어 | 이머스몰',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <link rel='icon' href='/public/assets/favicon.svg' />
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GlobalLoading />
        </Suspense>
        <ReactQueryContext>
          <UserContextProvider>
            <AuthFormContextProvider>
              {children}
              <AuthBackground />
            </AuthFormContextProvider>
          </UserContextProvider>
        </ReactQueryContext>
        <div id='portal'></div>
        <div id='review-portal'></div>
      </body>
    </html>
  );
}
