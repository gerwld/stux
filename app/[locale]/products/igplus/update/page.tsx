"use client";
import clsx from "clsx";

import s from "@/app/[locale]/products/update.module.css";
import { useTranslations } from "@/hooks/useTranslations";
import UpdateBase from "@/components/UpdateBase";

import logo_base from "./logo_base.svg";
import logo_rotate from "./logo_rotate.svg";
import KofiPost from "@/components/KofiPost/KofiPost";
import { Product, products } from "../../preloaded";


const PRODUCT_KEY:Product["alias"] = "IGPLUS";
const PRODUCT_TITLE:string = "IGPlus";
const CURRENT_VERSION  = products.find(p => p.alias === PRODUCT_KEY)?.version?.split(" ")[0];



const Update = () => {
  const t = useTranslations();

  const ot = <li>{t("UpdatePage.update_andother")}</li>
  const st = <span className={s.stb}>{t("UpdatePage.upd_stable_release")}</span>

  return (
    <div className={clsx("schema-purple", s.content_wrapper)}>
      <main>
        <UpdateBase 
          CURRENT_VERSION={CURRENT_VERSION} 
          PRODUCT_TITLE={PRODUCT_TITLE} 
          logo_base={logo_base} 
          logo_rotate={logo_rotate}
          logoClassName={s.logo_igplus}
        />

      <KofiPost 
        title="Just released IGPlus v3.0.1 - Major Update!"
        imageUrl="/images/posts/kofi/0.webp"
        link="https://ko-fi.com/post/Just-released-IGPlus-v3-0-0--Major-Update-P5P71A6AJP/">
         <ul>
            <li>- Fixed an issue where the <a href="https://github.com/gerwld/igplus-extension/issues/18">extension panel was inaccessible</a> on mobile viewports.</li>
            <li>- Fixed an issue where <a href="https://github.com/gerwld/igplus-extension/issues/20">counters were still visible on the Reels screen</a> when the &quot;Disable Likes and Followers Counts&quot; option was enabled.</li>
            <li>- Fixed an issue where the <a href="https://github.com/gerwld/igplus-extension/issues/15">comments section was still accessible on the Reels screen</a> despite the &quot;Disable Comments&quot; option being enabled.</li>
          </ul>
      </KofiPost>

        <h3>## Version 2.5.2 - {st}</h3>
      <ul>
        <li>- Added New Themes: Matrix Purple, Matrix Green</li>
        <li>- Updated themes: Kimbie Dark, Dimmed Red, Light Green</li>
        <li>- Updated <kbd/> look (vintage & modern)</li>
        <li>- Improved Classic heart button functionality</li>
        {ot}
      </ul>

      <h3>## Version 2.3.0 - {st}</h3>
      <ul>
        <li>- Fixed the issue where the <a target="_blank"
            href="https://github.com/gerwld/igplus-extension/issues/14">Reels section button was still visible</a>on profiles.</li>
        <li>- Fixed the issue where <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/13">&quot;View
            all comments&quot;</a>was shown.</li>
        <li>- Fixed <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/12">double redirection
            when clicking on profile pictures</a></li>
        <li>- Added improved comments hiding rules.</li>
        <li>- Fixed <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/15">the likes and
            comments counter still being visible in the mouseover state</a></li>
        {ot}
        <li><strong>Full Changelog:</strong> <a
            href="https://github.com/gerwld/igplus-extension/compare/v.2.2.0...v.2.3.0"
            target="_blank">v.2.2.0...v.2.3.0</a></li>
      </ul>


      <h3>## Version 2.2.0 - {st}</h3>
      <ul>
        <li>- Fixed the issue where <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/11">the
            New Post and Notification buttons disappear on mobile</a>. </li>
        <li>- Added the <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/7">suggested
            feature</a> to replace the `Explore button` with `Search` on the mobile viewport. </li>
        <li>- Added the <a target="_blank" href="https://github.com/gerwld/igplus-extension/issues/10">suggested
            feature</a> to hide Notes in Direct and the profile page. </li>
        {ot}
        <li><strong>Full Changelog:</strong> <a
            href="https://github.com/gerwld/igplus-extension/compare/v.2.1.0...v.2.2.0"
            target="_blank">v.2.1.0...v.2.2.0</a></li>
      </ul>


      <h3>## Version 2.1.0.1 - Hotfix</h3>
      <ul>
        <li>- Fixed Threads icon hide option (mobile viewport).</li>
      </ul>


      <h3>## Version 2.1.0 - {st}</h3>
      <ul>
        <li>- Added Threads button hiding feature.</li>
        <li>- New interface languages: French, Japanese, Chinese, and others.</li>
        <li>- Improved grayscale mode.</li>
        <li>- Resolved issues with hiding stories (mobile viewport & desktop).</li>
        <li>- Fixed inconsistencies in hiding elements on mobile viewports.</li>
        <li>- Corrected elements rendering incorrectly in dark mode.</li>
        <li>- Improved translations for Polish and English.</li>
        {ot}
      </ul>


      <h3>## Version 1.2.6 - {st}</h3>
      <ul>
        <li>- Fixed stories disabling (Main page / everywhere).</li>
        <li>- Added comments section disabling.</li>
        <li>- Added Belarusian (BE) locale.</li>
        <li>- Fixed &quot;Rectangle&quot; mode.</li>
        <li>- Fixed links.</li>
        {ot}
      </ul>

      <h3>## Version 1.2.4 - {st}</h3>
      <ul>
        <li>- Fixed recommendations disabling on the main page.</li>
        <li>- Fixed error where the font disappears in Firefox ver. {"<"} 120.1.</li>
        <li>- Updated locales (German, Swedish).</li>
        <li>- Updated popup UI.</li>
        {ot}
      </ul>

      <h3>## Version 1.2.2 - {st}</h3>
      <ul>
        <li>- Added i18n language support (x7).</li>
        <li>- Added Contribute option.</li>
        <li>- Updated UI, Dark Mode, and RTL locales.</li>
        <li>- Improved font switching.</li>
        {ot}
      </ul>

        <h3>## Version 1.1.6 - {st}</h3>
        <ul>
          <li>- Added feed disabling option.</li>
          <li>- Improved recommendations-free feed.</li>
          <li>- Fixed the issue with highlighting elements on the page even when stories were turned off.</li>
          <li>- Fixed turning off stories.</li>
          <li>- Fixed most layout issues.</li>
          {ot}
        </ul>

        <h3>## Version 1.1.5 - {st}</h3>
        <ul>
          <li>- Fixed Focus Mode.</li>
          <li>- Updated popup UI.</li>
          <li>- Added Opera support.</li>
          {ot}
        </ul>

        <h3>## Version 1.1.4 - {st}</h3>
        <ul>
          <li>- Added Firefox & Microsoft Edge support.</li>
          <li>- Extension popup dark mode.</li>
          <li>- Toggle-All functional button.</li>
          <li>- Added new fonts (x6).</li>
          <li>- Improved support page & others.</li>
          <li>- Fixed: Stories disabling, Cyrillic support, re-render bugs, etc.</li>
          {ot}
        </ul>

        <h3>## Version 1.0.4 - {st}</h3>
        <ul>
          <li>- Changed naming & UI to resolve Meta trademark claim.</li>
          <li>- Fixed font change.</li>
          <li>- Added minor improvements.</li>
          {ot}
        </ul>

        <h3>## Version 1.0.3 - {st}</h3>
        <ul>
          <li>- Fixed issues in Chrome ver.{"<"} 71.0.</li>
          <li>- Added minor improvements.</li>
          {ot}
        </ul>

        <h3>## Version 1.0.2 - {st}</h3>
        <ul>
          <li>- Added Classic Mode.</li>
          <li>- Fixed aside width functionality.</li>
          <li>- Added Reels, Explore, and Stories disabling feature.</li>
          <li>- Added image/video disabling to reduce bandwidth usage.</li>
          <li>- Added fonts: Poppins, Playfair, Noto Sans & others.</li>
          {ot}
        </ul>
      
      
      </main>

      <span className={s.st}>{t("WelcomePage.chess")} 🎨 ♟️</span>
    </div>
  );
};

export default Update;
