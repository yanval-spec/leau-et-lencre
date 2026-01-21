import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - API routes
    // - _next (static files)
    // - _vercel (internal Vercel paths)
    // - Files in public (e.g. favicon.ico, images)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
