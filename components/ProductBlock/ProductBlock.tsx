"use client"
import React, { FC, useState } from "react";
import style from "./style.module.css";
import { Link } from "@/i18n/navigation";
import { Product } from "@/app/[locale]/products/preloaded";
import SelectBrowserModal from "../DButton/SelectBrowserModal";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Image from "next/image";



const ProductBlock: FC<Product> = (props) => {
  const t = useTranslations();
  const { logoSrc, title, desc, alias, details } = props;

  const [isShow, setShow] = useState<boolean>(false);

  const toggleInstallShow = () => setShow((prev) => !prev);

  const trDescription = 
    t(`PRODUCTS.${props.alias}.description`) == `PRODUCTS.${props.alias}.description` 
    ? desc 
    : t(`PRODUCTS.${props.alias}.description`);
  
  
  const truncateDescription = (str:string) => (str.length > 129 ? str.slice(0, 129) + "..." : str);
  return (
    <>
    <article className={clsx("zbblock", style.block)}>
      <div className={style.header}>
        <div className={style.preview_img}>
          <Image width={54} height={58} src={logoSrc} alt="Logo" />
        </div>
        {/* Install link */}
        <button onClick={toggleInstallShow} className={style.install_btn}>
          <Image width={17} height={17} src="/icons/download.svg" alt="ic" />
          <span>{t("global.install_btn")}</span>
        </button>
       
      </div>

      <h3 className={style.title}>
        <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>{title}</Link>
      </h3>
      <p className={style.desc}>
        {truncateDescription(trDescription)}
      </p>

      <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>
        <span>{t("global.details_btn")}</span>
        <Image width={19} height={15} src="/icons/right-arrow.svg" alt="ic" />
      </Link>
    </article>
    <SelectBrowserModal isShow={isShow} toggleShow={toggleInstallShow} blockScroll={true} links={details.links} isEmbeded={true} />
    </>
  );
};

export default ProductBlock;
