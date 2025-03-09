import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params; 
  // Load translations for metadata
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: '' });

  return {
    title: t('ProductsPage.title') + " – WeblxApplications",
    description: t('HeroMain.subtitle').replace("<br/>", " ").replace("<br>", " "),
  };
}

export default async function S({ children }: { children: React.ReactNode }) {
  return children;
}