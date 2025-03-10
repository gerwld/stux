import { Metadata } from "next";
import fs from "fs";
import path from "path";

const PRODUCT_KEY = "EASYCALC";
const PRODUCT_NAME = "EasyCalc";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const messages = getStaticTranslations(params.locale);

  return {
    title: `${PRODUCT_NAME} ${messages["global.extension"]} – WeblxApplications`,
    description: messages[`PRODUCTS.${PRODUCT_KEY}.description`]?.replace(/<br\s*\/?>/g, " "),
  };
}

// Загружаем нужный язык во время билда
function getStaticTranslations(locale: string) {
  try {
    const filePath = path.join(process.cwd(), "public/locales", `${locale}.json`);
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    console.warn(`⚠️ Нет перевода для ${locale}, fallback → English.`);
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/locales/en.json"), "utf-8"));
  }
}

// Генерируем статические страницы для всех языков
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "pl" },
    { locale: "es" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "it" },
    { locale: "ru" },
    { locale: "zh" },
    { locale: "ja" },
    { locale: "ko" },
  ];
}

export default function IgplusLayout({ children }: { children: React.ReactNode }) {
  return <div className="igplus-container">{children}</div>;
}
