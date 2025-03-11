"use client";
import clsx from "clsx";

import s from "@/app/[locale]/products/update.module.css";
import { useTranslations } from "@/hooks/useTranslations";
import UpdateBase from "@/components/UpdateBase";

import logo_base from "./logo_base.svg";
import logo_rotate from "./logo_rotate.svg";
import HeaderGradient from "@/components/HeaderGradient";
import KofiPost from "@/components/KofiPost/KofiPost";


const PRODUCT_TITLE:string = "SpoPlus";
const CURRENT_VERSION  = "2.6.0";


const Update = () => {
  const t = useTranslations();

  const ot = <li>{t("UpdatePage.update_andother")}</li>
  const st = <span className={s.stb}>{t("UpdatePage.upd_stable_release")}</span>
  const bt = <span className={s.stb}>{t("UpdatePage.upd_beta_release")}</span>

  return (
    <div className={clsx("schema-blue", s.content_wrapper)}>
      <HeaderGradient withTexture/>
      <main>
        <UpdateBase 
          CURRENT_VERSION={CURRENT_VERSION} 
          PRODUCT_TITLE={PRODUCT_TITLE} 
          logo_base={logo_base} 
          logo_rotate={logo_rotate}
          logoClassName={s.logo_spoplus}
        />

        <KofiPost 
          title="Just updated SpoPlus to v.2.6.0!"
          imageUrl="https://storage.ko-fi.com/cdn/useruploads/post/588fea9d-04b4-4e75-b7b5-d51d936ff1fa_pastedgraphic1.png"
          link="https://ko-fi.com/post/Just-updated-SpoPlus-to-v-2-6-0-E1E719WWVB">
          <ul>
            <li>– Fixed "Keep Aside Width Static" option <a
                href="https://github.com/gerwld/spoplus-extension/issues/11">(#11)</a> not working properly</li>
            <li>– Fixed incorrect tone in <a href="https://github.com/gerwld/spoplus-extension/issues/9">(#9)</a> skeleton
              loader</li>
            <li>– Resolved visual bug causing <a href="https://github.com/gerwld/spoplus-extension/issues/4">(#4)</a>
              incorrect tone in aside menu on press sta...</li>
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

      <h3>## Version 2.3.0.0 - {st}</h3>
      <ul>
        <li>- Fixed heart button: Improved visibility for pending requests and resolved related issues.</li>
        <li>- Light themes: Enhanced shadows and fixed several bugs.</li>
        <li>- Updated Focus mode (Search bar, Navigation bar).</li>
        <li>- Fixed an issue where the rate-me popup appeared more than twice.</li>
        {ot}
      </ul>


      <h3>## Version 2.2.0 - {st}</h3>
      <ul>
        <li>- Fixed multiple issues in Focus Mode, including compact view and transcript display errors.</li>
        <li>- Resolved problems with heart icons feature not functioning correctly.</li>
        <li>- Fixed progress bar issues in "Your Episodes" for light themes.</li>
        <li>- Fixed fullscreen mode issues across light themes.</li>
        <li>- Corrected overflow issues with some tippyjs tooltips.</li>
        <li>- Fixed layout issues on the Premium page when using light themes.</li>
        <li>- Updated placeholders to reduce GPU usage.</li>
        <li>- Resolved resizing problems when the "Aside" section is set to static.</li>
        <li>- Fixed color issues with lyrics display in light themes.</li>
        {ot}
      </ul>

      <h3>## Version 2.1.0 - {st}</h3>
      <ul>
        <li>- Fixed the issue where Inter font was not displayed properly on some devices.</li>
        <li>- Updated light themes: Light Green, Light Purple.</li>
        <li>- Fixed the issue where active buttons were baseline color in active or mixed state.</li>
        <li>- Improved general stability and state validation.</li>
        <li>- Added low-end PC optimization feature.</li>
        <li>- Added new themes (x4): Kimbie Dark, Comfy Red, Light Pink, Light Pink Dimmed.</li>
        <li>- Added better SVG animation color-swapping support.</li>
        <li>- Added changelog button functionality.</li>
        {ot}
      </ul>

      <h3>## Version 2.0.0 - {st}</h3>
      <ul>
        <li>- Fixed the issue where disabling "Now Playing View" didn't work properly or caused other issues.</li>
        <li>- Added general performance improvements.</li>
        <li>- Improved code injection & state validation.</li>
        <li>- Updated Focus Mode layout and features.</li>
        <li>- Improved the "Make Aside Width Static" feature.</li>
        <li>- Fixed the "Make Navbar Bigger" issue occurring on Chromium and some versions of Firefox.</li>
        <li>- Updated light mode themes: Light Green, Light Purple.</li>
        <li>- Updated the performance and visuals of "placeholders."</li>
        <li>- Fixed issues related to the Amoled theme.</li>
        <li>- Fixed the issue where the symbol "•" in pseudo blocks didn't display correctly.</li>
        <li>- Fixed the issue where "Make Navbar Bigger" suddenly stopped working on Firefox.</li>
        <li>- Updated color SVG animation (add to favorites) for themes.</li>
        <li>- Added light themes navigation.</li>
        <li>- Minor visual improvements: Dark Purple, Dark Red, Dark Yellow, etc.</li>
        {ot}
      </ul>

      <h3>## Version 1.2.7 - {st}</h3>
      <ul>
        <li>- Added Belarusian and Arabic i18n support.</li>
        <li>- Improved themes: Dark Purple, Dark Red, Dark Yellow, Light Purple, and Light Green.</li>
        <li>- Fixed the issue with aside "collapse" in Fixed Mode.</li>
        <li>- Added "Contribute" menu option.</li>
        <li>- Fixed window.reload issues caused by a faulty event handler.</li>
        <li>- Improved the "Add Button" animation and color.</li>
        <li>- Fixed the Amoled Theme issue where the old background persisted.</li>
        <li>- Fixed the overflow issue in aside when "List mode" view was selected.</li>
        <li>- Fixed the "Hide header buttons" functionality.</li>
        <li>- Added RTL support.</li>
        <li>- Improved "Focus Mode."</li>
        {ot}
      </ul>

      <h3>## Version 1.2.0 - {st}</h3>
      <ul>
        <li>- Added i18n support for seven languages.</li>
        <li>- Added new themes: Amoled, Amoled Night.</li>
        <li>- Improved the Dark Purple theme.</li>
        {ot}
      </ul>


        <h3>## Version 1.1.7 - {st}</h3>
        <ul>
          <li>- Improved themes: Dark Purple, Green Light, Kittens.</li>
          <li>- Fixed the Welcome page appearing at every update.</li>
          {ot}
        </ul>

        <h3>## Version 1.1.5 - {st}</h3>
        <ul>
          <li>- Added support for Firefox and Microsoft Edge.</li>
          <li>- Implemented Dark Mode for the extension popup.</li>
          <li>- Added Toggle-All Functional Button.</li>
          <li>- Added six new fonts.</li>
          <li>- Improved the Support page and other sections.</li>
          <li>- Fixed issues with the Light theme, Cyrillic support, re-render bugs, etc.</li>
          {ot}
        </ul>

        <h3>## Version 1.0.4 - {st}</h3>
        <ul>
          <li>- Stability improvements.</li>
          <li>- Enhanced popup visuals.</li>
          <li>- Updated license changes.</li>
          {ot}
        </ul>

        <h3>## Version 1.0.2 - {st}</h3>
        <ul>
          <li>- Stability improvements.</li>
          <li>- Fixed the font issue after toggling "Classic mode."</li>
          {ot}
        </ul>

        <h3>## Version 1.0.0 - {st}</h3>
        <ul>
          <li>- Added themes: Light Green, Dark Purple, Kittens.</li>
          <li>- Added fonts: Poppins, Playfair, Noto Sans, and others.</li>
          <li>- Fixed the aside collapsing issue.</li>
          <li>- Fixed the app crash when using "Now Playing View."</li>
          {ot}
        </ul>

        <h3>## Version 0.2 - {bt}</h3>
        <ul>
          <li>- Added Classic Mode.</li>
          <li>- Fixed the aside width functionality.</li>
          <li>- Enabled image disabling to reduce bandwidth usage.</li>
          {ot}
        </ul>

      
      
      </main>

      <span className={s.st}>{t("WelcomePage.chess")} 🎨 ♟️</span>
    </div>
  );
};

export default Update;
