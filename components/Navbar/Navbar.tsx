"use client"
import React, { useState } from "react";
import style from "./style.module.css";
import {Link} from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { ProductLinksExtras } from "@/app/[locale]/products/preloaded";
import clsx from "clsx";

type Link = {
  href: string,
  title: string,
  n18?: string
}

const Navbar:React.FC<{menuLinks?: ProductLinksExtras | undefined}> = ({menuLinks}) => {
  const [mobileMenu, isMobileMenu] = useState<boolean>(false);
  const m = menuLinks;
  const route = usePathname();

  const [links] = useState<Link[]>([
    {href: "/", title: 'Home', n18: 'header_home'},
    {href: "/products", title: 'All Products', n18: 'header_home'},
    {href: (m?.feature_request || "https://docs.google.com/forms/d/e/1FAIpQLSc8jGjwaVURaYxI0XPIEa9yW21H0CjeHfe19fcxMRBCkFsoPQ/viewform?usp=header"), title: 'Request Feature', n18: 'header_home'}, 
    {href: (m?.bug_report || "https://docs.google.com/forms/d/e/1FAIpQLSfs7hCNix98qt70fx_dhhBSF309hn5WBcavb2H_dMZgeT3CHg/viewform?usp=dialog"), title: "Support", n18: 'header_home'},
  ])

  const [scrolled, setScrolled] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    isMobileMenu(!mobileMenu);
  }
  return (
    <>
    <div className={style.gap_fix}/>
    
    <div className={style.header}>
      <div className={clsx("content_wrapper", style.header_content, scrolled && style.header_scrolled)}>

      <nav className={clsx(style.nav, mobileMenu && style.mobile_nav_open)} area-visible={mobileMenu.toString()}>
        {links.map(link => 
          <Link 
          target={link.href.indexOf("http") !== -1 ? "_blank" : "_self"}
          key={link.href} 
          href={link.href}
          // className={route == link.href || route.indexOf(link.href) !== -1 && link.href !== "/" ? style.active : ""}
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

      <button className={style.mobile_menu__btn} onClick={toggleMenu} title="Menu Button">
      {mobileMenu 
          ? <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.84615 19L23 1M1 1L23 19" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>          
          : <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H27M1 10H27M1 19H27" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>          
          }
      </button>
         
      </div>
    </div>
    </>
  );
};

export default Navbar;
