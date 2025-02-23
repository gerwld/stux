"use client"
import React, { FC } from "react";
import style from "./style.module.css";
import Link from "next/link";

export interface Product {
  logoSrc: string;
  title: string;
  desc: string;
  url: string;
}

const ProductBlock: FC<Product> = ({ logoSrc, title, desc, url }) => {
  return (
    <article className={style.block}>
      <div className={style.header}>
        <div className={style.preview_img}>
          <img src={logoSrc} alt="Logo" />
        </div>
        <Link href="/" className={style.install_btn}>
          <img src="/icons/download.svg" alt="ic" />
          <span>Install</span>
        </Link>
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={style.desc}>
        {desc}
      </p>

      <Link href={`/products${url}`} className={style.details_btn}>
        <span>View Details</span>
        <img src="/icons/right-arrow.svg" alt="ic" />
      </Link>
    </article>
  );
};

export default ProductBlock;
