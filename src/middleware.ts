import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessTokenCookie = request.cookies.get('access-token');

  if (!accessTokenCookie) {
    const previousPath = request.headers.get('referer')!;
    const redirectURL = previousPath
      ? new URL(previousPath)
      : new URL('/', request.url);
    return NextResponse.redirect(redirectURL);
  }
}

export const config = {
  matcher: ['/o/:path*', '/my/:path*'],
};
