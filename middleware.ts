import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pl|en|uk|ru|fr|ar|be|de|hi|ja|nl|pt|sp|sv|zh)/:path*']
};