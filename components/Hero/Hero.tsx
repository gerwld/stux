import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import style from "./style.module.css";
import {Link} from "@/i18n/navigation";
import clsx from "clsx";


const Hero = () => {
  const SHORTCUTS = [
    "SPOPLUS",
    "IGPLUS",
    "DOHABIT",
    "LICHESSHELPER",
    "MEMENTO"
  ]
  return (
    <header className={style.wrapper}>
      <div className={style.wrapper_texture}>
      <Navbar />
      <div className={clsx(style.content, "content_wrapper")}>
        <h1 className={style.title}>Enhance Your Daily <br/>Experience With Our Products</h1>
        <p className={style.desc}>From browser extensions and CLI tools to libraries and mobile applications, <br/>our solutions always focus on attention to detail and user experience.</p>
        {/* <div className={style.img_preview}>
          <img src="/hero-preview.svg" alt="Preview" />
        </div> */}
        <div className={style.shortcuts}>
          {SHORTCUTS.map(item => <Link key={item} href={"/products/" + item.toLowerCase()} className={style.shortcuts_act}>
            <img src={`/images/logos/${item}.svg`} alt={item} className={clsx(style.shortcuts_act_image, style["shortcuts_act_image__" + item])} />
          </Link>)}
        </div>
        <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>Explore All Products</Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Hero;
