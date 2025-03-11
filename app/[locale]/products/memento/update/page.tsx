"use client";
import clsx from "clsx";

import s from "@/app/[locale]/products/update.module.css";
import { useTranslations } from "@/hooks/useTranslations";
import UpdateBase from "@/components/UpdateBase";

import logo_base from "./logo_base.svg";


const PRODUCT_TITLE:string = "Mememnto.";
const CURRENT_VERSION  = "1.4.0";


const Update = () => {
  const t = useTranslations();

  const ot = <li>{t("UpdatePage.update_andother")}</li>
  const st = <span className={s.stb}>{t("UpdatePage.upd_stable_release")}</span>
  const ht = <span className={s.stb}>Hotfix</span>

  return (
    <div className={clsx("schema-blue", s.content_wrapper)}>
      <main>
        <UpdateBase CURRENT_VERSION={CURRENT_VERSION} PRODUCT_TITLE={PRODUCT_TITLE} logo_base={logo_base} />


      <h3>## Version 1.4.0 - {st}</h3>
      <ul>
        <li>- Added `toolbar`</li>
        <li>- Added `toolbar-calculator`</li>
        {ot}
        <li><b>Full Changelog</b>: <a href="https://github.com/gerwld/memento-extension/compare/main%40%7B1day%7D...main">v.1.1.0...v.1.2.0</a></li>
      </ul>
      
      <h3>## Version 1.2.1 - {ht}</h3>
      <ul>
        <li>- Fixed initialization</li>
      </ul>
      
      <h3>## Version 1.2.0 - {st}</h3>
      <ul>
        <li>- Added search bar option</li>
        <li>- Fixed background change delay</li>
        <li>- Added smooth range-input preview update</li>
        <li>- Fixed appear animations</li>
        {ot}
        <li><b>Full Changelog</b>: <a href="https://github.com/gerwld/memento-extension/compare/v.1.1.0...v.1.2.0">v.1.1.0...v.1.2.0</a></li>
      </ul>
      
        <h3>## Version 1.1.0 - {st}</h3>
        <ul>
          <li>- Added local image option: Multiple-uploads, Select, Delete</li>
          <li>- Added better user interface, scaling on mobile viewport</li>
          <li>- Added initial state preset for low-end devices</li>
          <li>- IndexDB images host (beta)</li>
          <li>- Added refresh option for Unsplash backgrounds</li>
          {ot}
          <li><b>Full Changelog</b>: <a href="https://github.com/gerwld/memento-extension/compare/v.1.0.0...v.1.1.0">v.1.0.0...v.1.1.0</a></li>
        </ul>
        
        <h3>## Version 1.0.0 - Initial Release</h3>
        <ul>
          <li>- Custom backgrounds support (`Unsplash` or a blank background).</li>
          <li>- Blur and brightness adjustments via sliders.</li>
          <li>- Clock support: 12-hour and 24-hour formats.</li>
          <li>- Localization: **12 languages**.</li>
          {ot}
          <li><b>Full Changelog</b>: <a href="https://github.com/gerwld/memento-extension/commits/v.1.0.0">v.1.0.0</a></li>
        </ul>
      
      
      </main>

      <span className={s.st}>{t("WelcomePage.chess")} 🎨 ♟️</span>
    </div>
  );
};

export default Update;
