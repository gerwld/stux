"use client";
import clsx from "clsx";

import s from "@/app/[locale]/products/update.module.css";
import { useTranslations } from "@/hooks/useTranslations";
import UpdateBase from "@/components/UpdateBase";

import logo_base from "./logo_base.svg";


const PRODUCT_TITLE:string = "EasyCalc";
const CURRENT_VERSION  = "2.0.0";


const Update = () => {
  const t = useTranslations();

  const ot = <li>{t("UpdatePage.update_andother")}</li>
  const st = <span className={s.stb}>{t("UpdatePage.upd_stable_release")}</span>
  const bt = <span className={s.stb}>{t("UpdatePage.upd_beta_release")}</span>

  return (
    <div className={clsx("schema-blue", s.content_wrapper)}>
      <main>
        <UpdateBase CURRENT_VERSION={CURRENT_VERSION} PRODUCT_TITLE={PRODUCT_TITLE} logo_base={logo_base}/>

      <h3>## Version 2.0.0 - {st}</h3>
      <ul>
        <li>- Fixed the overflow Display issue</li>
        <li>- Updated UI</li>
        <li>- Added faster animations</li>
        {ot}
        <li><b>Full Changelog</b>: <a href="https://github.com/gerwld/easycalc/commits/v.2.0.0">v.1.0.0...v.2.0.0</a></li>
      </ul>

        <h3>## Version 1.0.0 - {st}</h3>
        <ul>
          <li>- Added dark mode.</li>
          <li>- Added state management.</li>
          {ot}
        </ul>

        <h3>## Version 0.2 - {bt}</h3>
        <ul>
          <li>- Added basic functionality.</li>
          {ot}
        </ul>

      
      
      </main>

      <span className={s.st}>{t("WelcomePage.chess")} 🎨 ♟️</span>
    </div>
  );
};

export default Update;
