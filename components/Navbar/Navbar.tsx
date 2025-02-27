"use client"
import React, { useState } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductLinksExtras } from "@/app/products/preloaded";

type Link = {
  href: string,
  title: string,
  n18?: string
}

const Header:React.FC<{menuLinks: ProductLinksExtras | undefined}> = ({menuLinks}) => {
  const m = menuLinks;
  const route = usePathname();

  const [links] = useState<Link[]>([
    {href: "/", title: 'Home', n18: 'header_home'},
    {href: "/products", title: 'All Products', n18: 'header_home'},
    {href: (m?.feature_request || "https://docs.google.com/forms/d/e/1FAIpQLSc8jGjwaVURaYxI0XPIEa9yW21H0CjeHfe19fcxMRBCkFsoPQ/viewform?usp=header"), title: 'Request Feature', n18: 'header_home'}, 
    {href: (m?.bug_report || "https://docs.google.com/forms/d/e/1FAIpQLSfs7hCNix98qt70fx_dhhBSF309hn5WBcavb2H_dMZgeT3CHg/viewform?usp=dialog"), title: "Support", n18: 'header_home'},
  ])
  return (
    <>
    <div className={style.gap_fix}/>
    
    <div className={style.header}>
      <div className={`content_wrapper ${style.header_content}`}>

      <nav className={style.nav}>
        {links.map(link => 
          <Link 
          key={link.href} 
          href={link.href}
          className={route == link.href || route.indexOf(link.href) !== -1 && link.href !== "/" ? style.active : ""}
          >{link.title}</Link>)}
      </nav>
      <div className="lang_select">
      <div className="lang_set_wrapper">
        <select
          className="btn_header lang_set emojiesfix"
          name="lang_set"
          id="lang_set"
        >
          <option value="en">English</option>
          <option value="pl">Polish - polski</option>
          <option value="fr">French - français</option>
          <option value="es">Spanish - español</option>
          <option value="de">German - Deutsch</option>
          <option value="nl">Dutch - Nederlands</option>
          <option value="uk">Ukrainian - українська</option>
          <option value="be">Belarusian - беларуская</option>
          <option value="ru">Rusian - русский</option>
          <option value="pt">Portuguese - português</option>
          <option value="hi">Hindi - हिन्दी</option>
          <option value="sv">Swedish - svenska</option>
          <option value="ar">Arabic - العربية</option>
          <option value="ja">Japanese - 日本語 (Nihongo)</option>
          <option value="zh">Chinese - 中文 (Zhōngwén)</option>
        </select>
        <div className="lang_ic"></div>
      </div>
      </div>

      </div>
    </div>
    </>
  );
};

export default Header;
