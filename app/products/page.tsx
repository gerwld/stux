"use client";
import Footer from "@/components/Footer/Footer";
import ProductBlock from "@/components/items/ProductBlock/ProductBlock";
import Navbar from "@/components/Navbar/Navbar";
import PageTitle from "@/components/PageTitle";
import React from "react";
import style from "./style.module.css";
import HeaderGradient from "@/components/HeaderGradient";
import { products } from "./preloaded";



const ProductsPage = () => {
  return (
    <>
      <HeaderGradient withTexture/>
      <Navbar />
      <main className="content_wrapper">
        <PageTitle title="Our Products" />
        <section className={style.content}>
          {products.map((p) => (
            <ProductBlock
              key={p.id}
              id={p.id}
              alias={p.alias}
              logoSrc={`/images/logos/${p.alias}.svg`}
              desc={p.desc}
              title={p.title}
            />
          ))}
          {/* <ProductBlock/> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
