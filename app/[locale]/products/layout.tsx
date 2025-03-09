import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // Load translations for metadata
  const t = await getTranslations({ locale: params.locale, namespace: '' });

  return {
    title: t('ProductsPage.title') + " – WeblxApplications",
    description: t('HeroMain.subtitle').replace("<br/>", " ").replace("<br>", " "),
  };
}

export default async function ({ children }: { children: React.ReactNode }) {
  return children;
}