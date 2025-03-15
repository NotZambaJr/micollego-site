import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  // Redirect mobile users to a specific mobile route
  if (isMobile && !request.nextUrl.pathname.startsWith('/mobile')) {
    return NextResponse.redirect(new URL('/mobile', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Add other routes you want to handle
};