import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "../globals.css";
import "../schemas/schemas.css";
import "../switzer.css";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // Load translations for metadata
  const t = await getTranslations({ locale: params.locale, namespace: '' });

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
  params: any;
}) {
  // Handle both Promise and direct object cases
  const resolvedParams = params.then ? await params : params;
  const locale = resolvedParams.locale;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages().catch(() => ({}));

  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}