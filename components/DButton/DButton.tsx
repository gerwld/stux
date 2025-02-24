import React, { FC } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { ProductLink } from "@/app/products/preloaded";
import { BrowserType, useBrowserType } from "@/hooks/useBrowserType";
import toTitleCase from "@/tools/toTitleCase";
import clsx from "clsx";
import SelectBrowserModal from "./SelectBrowserModal";

type DButtonProps = {
  links: ProductLink;
};

const DButton: FC<DButtonProps> = ({ links }) => {
  const browser: BrowserType = useBrowserType();
  const link = links[browser];
  if (browser === "SERVER") return "";
  const isE = browser === "EDGE";

  return (
    <div className={clsx(style.block, isE && style.is_edge)}>
      <Link href={link || "#"} className={style.btn_download}>
        <div className={style.section_1}>
          <img src={`/icons/browsers/${browser}.svg`} alt={"Browser Icon"} />
        </div>
        <div className={style.section_2}>
          <span>Download for</span>
          <span>{isE ? "Microsoft Edge" : toTitleCase(browser)}</span>
        </div>
      </Link>
      <SelectBrowserModal blockScroll={true}/>
    </div>
  );
};

export default DButton;
