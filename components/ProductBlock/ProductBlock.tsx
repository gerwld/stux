"use client"
import React, { FC } from "react";
import style from "./style.module.css";
import { Link } from "@/i18n/navigation";
import { Product } from "@/app/[locale]/products/preloaded";
import SelectBrowserModal from "../DButton/SelectBrowserModal";
import { useTranslations } from "next-intl";
import clsx from "clsx";



const ProductBlock: FC<Product> = (props) => {
  const t = useTranslations();
  const { logoSrc, title, desc, alias, details } = props;

  const trDescription = 
    t(`PRODUCTS.${props.alias}.description`) == `PRODUCTS.${props.alias}.description` 
    ? desc 
    : t(`PRODUCTS.${props.alias}.description`);
  
  
  const truncateDescription = (str:string) => (str.length > 129 ? str.slice(0, 129) + "..." : str);
  return (
    <article className={clsx("zbblock", style.block)}>
      <div className={style.header}>
        <div className={style.preview_img}>
          <img src={logoSrc} alt="Logo" />
        </div>
        {/* Install link */}
        <SelectBrowserModal blockScroll={true} links={details.links} isEmbeded={true} />
      </div>

      <h3 className={style.title}>
        <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>{title}</Link>
      </h3>
      <p className={style.desc}>
        {truncateDescription(trDescription)}
      </p>

      <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>
        <span>{t("global.details_btn")}</span>
        <img src="/icons/right-arrow.svg" alt="ic" />
      </Link>
    </article>
  );
};

export default ProductBlock;
