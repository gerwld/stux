import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


const PRODUCT_KEY:string = "DOHABIT";
const PRODUCT_NAME = "DoHabit"


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // Load translations for metadata
  const t = await getTranslations({ locale: params.locale, namespace: "" });

  return {
    title: `${PRODUCT_NAME} App – WeblxApplications`,
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