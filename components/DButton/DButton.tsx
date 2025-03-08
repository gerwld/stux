import React, { FC, JSX } from "react";
import style from "./style.module.css";
import {Link} from "@/i18n/navigation";
import { ProductBrowserLinks, ProductLinks, ProductType } from "@/app/[locale]/products/preloaded";
import { BrowserType, useBrowserType } from "@/hooks/useBrowserType";
import toTitleCase from "@/tools/toTitleCase";
import clsx from "clsx";
import SelectBrowserModal from "./SelectBrowserModal";

type DButtonProps = {
  links: ProductBrowserLinks | ProductLinks;
  productType: ProductType;
};

const DButton: FC<DButtonProps> = ({ links, productType }) => {
  let CONTENT: JSX.Element = <i />;
  let browser: BrowserType = useBrowserType();

  // ** IF EXTENSION ** //
  if (productType === "EXTENSION") {
    // gets the default option (chrome / any other that exists)
    let link =
      links["CHROME"] || links[Object.keys(links)[0] as keyof typeof links];
    // if current browser is available - set it link
    if (browser in links) {
      link = links[browser as keyof typeof links];
    }
    // else set the default option
    else {
      browser = links["CHROME"]
        ? "CHROME"
        : (Object.keys(links)[0] as keyof typeof links);
    }

    const linkValue = typeof link === "string" ? link : "#";
    const isE = browser === "EDGE";

    if (browser === "SERVER") return "";
    CONTENT = (
      <div className={clsx(style.block, isE && style.is_edge)}>
        <Link href={linkValue} className={style.btn_download}>
          <div className={style.section_1}>
            <img src={`/icons/browsers/${browser}.svg`} alt={"Browser Icon"} />
          </div>
          <div className={style.section_2}>
            <span>Download for</span>
            <span>{isE ? "Microsoft Edge" : toTitleCase(browser)}</span>
          </div>
        </Link>
        <SelectBrowserModal blockScroll={true} links={links} />
      </div>
    );
  }
  // ** IF APPLICATION ** //
  else if (productType === "APPLICATION") {
      CONTENT = <span>productType === APPLICATION</span>;
  }

  return CONTENT;
};

export default DButton;
