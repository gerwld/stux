import Footer from "@/components/Footer/Footer";
import ProductBlock from "@/components/ProductBlock/ProductBlock";
import Navbar from "@/components/Navbar/Navbar";
import PageTitle from "@/components/PageTitle";
import React from "react";
import style from "./style.module.scss";
import HeaderGradient from "@/components/HeaderGradient";
import { products } from "./preloaded";
import { useTranslations } from "next-intl";



const ProductsPage = () => {
  const t = useTranslations("ProductsPage");
  return (
    <>
      <HeaderGradient withTexture/>
      <Navbar />
      <main className="content_wrapper">
        <PageTitle title={t("title")} />
        <section className={style.content}>
          {products.map((p) => (
            <ProductBlock
              id={p?.id}
              key={p.logoSrc}
              logoSrc={`/images/logos/${p.alias}.svg`}
              desc={p.desc}
              title={p.title}
              alias={p.alias}
              details={p.details}
              productType={p.productType}
            />
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default ProductsPage;
