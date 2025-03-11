"use client";
import clsx from "clsx";

import s from "@/app/[locale]/products/update.module.css";
import { useTranslations } from "@/hooks/useTranslations";
import UpdateBase from "@/components/UpdateBase";

import logo_base from "./logo_base.svg";
import logo_rotate from "./logo_rotate.svg";


const PRODUCT_TITLE:string = "SpoPlus";
const CURRENT_VERSION  = "3.0.0";


const Update = () => {
  const t = useTranslations();

  const ot = <li>{t("UpdatePage.update_andother")}</li>
  const st = <span className={s.stb}>{t("UpdatePage.upd_stable_release")}</span>

  return (
    <div className={clsx("schema-blue", s.content_wrapper)}>
      <main>
        <UpdateBase 
          CURRENT_VERSION={CURRENT_VERSION} 
          PRODUCT_TITLE={PRODUCT_TITLE} 
          logo_base={logo_base} 
          logo_rotate={logo_rotate}
          logoClassName={s.logo_spoplus}
        />

        <h3>## {t("UpdatePage.upd_version")} 3.0.0 - {st}</h3>
        <ul>
            <li>- Added new themes (x2): Frutiger Aero Green, Frutiger Aero Dimmed</li>
            <li>- Updated themes: Frutiger Aero</li>
            <li>- Fixed double-click resign</li>
            <li>- Improved locales: English, Swedish, Polish</li>
            <li>- Fixed frame drops caused by false mount DOM inj.</li>
            <li>- Updated fullscreen button</li>
            {ot}
        </ul>

          <h3>## {t("UpdatePage.upd_version")} 2.1.4.5 - {st}</h3>
          <ul>
              <li>- Fixed fonts not appearing properly on some devices</li>
              <li>- Added new themes (x6): Frutiger Aero, Glitter, Dark Purple</li>
              {ot}
          </ul>
          <h3>## {t("UpdatePage.upd_version")} 1.0.4.1 - {st}</h3>
          <ul>
            <li>- Added Android Support (Mozilla)</li>
            <li>- Fixed Welcome page appear every time</li>
            <li>- Fixed Light Mode in themes</li>
            <li>- Fixed bug when online status dissapear</li>
            <li>- Added new theme - Amoled</li>
            <li>- Added Contribute option</li>
            <li>- Updated extension UI & Logo</li>
            {ot}
          </ul>
          <h3>## {t("UpdatePage.upd_version")} 1.0.4 - {st}</h3>
          <ul>
            <li>- Added new languages (x98) i18n support</li>
            <li>- Fixed RTL in Hewbrew, Sindhi, Persian</li>
            <li>- Updated Extension Logo & UI</li>
            <li>- Added Contribute Option</li>
            {ot}
          </ul>
          <h3>## {t("UpdatePage.upd_version")} 1.0.3 - {st}</h3>
          <ul>
            <li>- Added i18n languages (x8) support</li>
            <li>- Added new pieces (x16)</li>
            <li>- Added new theme: Amoled</li>
            <li>- Fixed RTL in Arabic</li>
            {ot}
          </ul>
          <h3>## {t("UpdatePage.upd_version")} 1.0.2 - {st}</h3>
          <ul>
            <li>- Fixed 3D Mode (Pieces & Boards Change)</li>
            <li>- Added x2 new Boards (Emerald, Industrial)</li>
            <li>- Updated Popup UI</li>
            {ot}
          </ul>
          <h3>## {t("UpdatePage.upd_version")} 1.0.1 - {st}</h3>
          <ul>
            <li>- Fixed Dark Mode on Mozilla Firefox</li>
            <li>- Fixed Background on Analysis Page</li>
            <li>- Improved Highlight colors</li>
            {ot}
          </ul>
            <h3>## {t("UpdatePage.upd_version")} 1.0.0 - {st}</h3>
          <ul>
            <li>- **Support of Firefox, MS Edge & Chrome**</li>
            <li>- Added Focus Mode</li>
            <li>- Added Custom Fonts support</li>
            <li>- Added double-click resign</li>
            <li>- Fixed layout bouncing</li>
            <li>- Added Pieces Assets (x18), Boards (x17)</li>
            <li>- Added themes (x5)</li>
            {ot}
          </ul>

      
      
      </main>

      <span className={s.st}>{t("WelcomePage.chess")} 🎨 ♟️</span>
    </div>
  );
};

export default Update;
