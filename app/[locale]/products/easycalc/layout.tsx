import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


const PRODUCT_KEY:string = "EASYCALC";
const PRODUCT_NAME = "EasyCalc"


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params; 
  // Load translations for metadata
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: "" });

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