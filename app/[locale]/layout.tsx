import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "../globals.css";
import "../schemas/schemas.css";
import "../switzer.css";

const RTL_LANGUAGES = new Set(["ar", "he", "fa", "ur"]);

export function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'be' },
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'hi' },
    { locale: 'ja' },
    { locale: 'nl' },
    { locale: 'pl' },
    { locale: 'pt' },
    { locale: 'ru' },
    { locale: 'sp' },
    { locale: 'sv' },
    { locale: 'uk' },
    { locale: 'zh' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params; 
  // Load translations for metadata
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: '' });

  return {
    title: "Main Page – WebLX Applications",
    description: t('HeroMain.subtitle').replace("<br/>", " ").replace("<br>", " "),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  // Handle both Promise and direct object cases
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolvedParams.locale;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages().catch(() => ({}));

  //rtl support
  const dir = RTL_LANGUAGES.has(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}