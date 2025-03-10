import { Metadata } from "next";
import { createTranslator } from "next-intl";
// import { getTranslations } from "next-intl/server";

const PRODUCT_KEY:string = "CHESSHELPER";
const PRODUCT_NAME = "ChessHelper"


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params; 
  
  // Load translations for metadata (server function)
  // const t = await getTranslations({ locale: resolvedParams.locale, namespace: "" });

  // Load translations for metadata (local function)
  const messages = (await import(`@/i18n/locales/${resolvedParams.locale}.json`)).default;
  const t = createTranslator({ locale: resolvedParams.locale, messages, namespace: "" });

  return {
    title: `${PRODUCT_NAME} ${t("global.extension")} – WeblxApplications`,
    description: t(`PRODUCTS.${PRODUCT_KEY}.description`).replace("<br/>", " ").replace("<br>", " "),
  };
}

export default function IgplusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="igplus-container">
      {children}
    </div>
  );
}