"use client"
import React, { FC } from "react";
import style from "./style.module.css";
import {Link} from "@/i18n/navigation";
import { Product } from "@/app/[locale]/products/preloaded";
import SelectBrowserModal from "../DButton/SelectBrowserModal";
import { redirect } from "next/navigation";



const ProductBlock: FC<Product> = (props) => {
  const { logoSrc, title, desc, alias, details } = props;
  
  const truncateDescription = (str:string) => (str.length > 129 ? str.slice(0, 129) + "..." : str);
  return (
    <article className={style.block}>
      <div className={style.header}>
        <div className={style.preview_img}>
          <img src={logoSrc} alt="Logo" />
        </div>
        {/* TODO: Install link */}
        <SelectBrowserModal blockScroll={true} links={details.links} isEmbeded={true} />
      </div>

      <h3 onClick={()=> redirect(`/products/${alias?.toLowerCase()}`)} className={style.title}>{title}</h3>
      <p className={style.desc}>
        {truncateDescription(desc)}
      </p>

      <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>
        <span>View Details</span>
        <img src="/icons/right-arrow.svg" alt="ic" />
      </Link>
    </article>
  );
};

export default ProductBlock;
