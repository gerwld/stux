import {defineRouting} from 'next-intl/routing';

export const SUPPORTED_LOCALES = ['pl','en','uk','ru','fr','ar','be','de','hi','ja','nl','pt','es','sv','zh'];
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,
 
  // Used when no locale matches
  defaultLocale: 'en'
});