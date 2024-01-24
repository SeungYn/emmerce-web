import { NextRequest, NextResponse } from 'next/server';
import { TOKEN_NAME } from './util/constants/auth';

export function middleware(request: NextRequest) {
  const accessTokenCookie = request.cookies.get(TOKEN_NAME.access);
  const refreshTokenCookie = request.cookies.get(TOKEN_NAME.refesh);

  if (!accessTokenCookie && refreshTokenCookie) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (!accessTokenCookie) {
    const previousPath = request.headers.get('referer')!;
    const redirectURL = previousPath
      ? new URL(previousPath)
      : new URL('/', request.url);
    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/o/:path*', '/my/:path*'],
};
