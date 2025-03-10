"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from 'next/image'
import clsx from "clsx";

import logo_base from "./logo_base.svg";
import logo_rotate from "./logo_rotate.svg";

import s from "@/app/[locale]/products/update.module.css";
import DonateButtons from "@/components/DonateButtons/DonateButtons";



const PRODUCT_TITLE:string = "ChessHelper";
const CURRENT_VERSION  = "3.0.0";


const Update = () => {

  const ot = <li data-i18n="update_andother">...and other changes</li>
  const st = <span data-i18n="upd_stable_release">Stable Release</span>

  return (
    <div className={clsx("schema-purple", s.content_wrapper)}>
      <Navbar />
      <main>
        <div className={s.title_block}>
            <div className={s.logo_box_anim}>
                <Image src={logo_base} alt="logo-base"/>
                <Image src={logo_rotate} className={s.set_rotate} alt="logo-rotate"/>
            </div>
            <h1>{PRODUCT_TITLE} - <span className={s.major_update}>Major Update</span> {CURRENT_VERSION}!<span className="emoji confetti"></span></h1>
        </div>

        <p className="update_subl">
            <span data-i18n="update_sbt_01">We spend hours every week fixing bugs, adding and improving features, and addressing user
            feedback. Donations keep</span> {PRODUCT_TITLE} <span data-i18n="update_sbt_02">up and running.</span>
        </p>

        <DonateButtons/>

        <span id="changelog" className={s.guarantee}>30-days money back guarantee. And you can keep using {PRODUCT_TITLE}</span>
        <p>If you can't contribute financially, We'd love if you could share {PRODUCT_TITLE} with a few friends or leave a review on the Chrome, Firefox, or MS Edge stores.</p>
      
    
        <div className="updates_log">
        <h2 className={s.h2} data-i18n="upd_history">Update History</h2>


        <h3>## Version 3.0.0 - {st}</h3>
        <ul>
            <li>- Added new themes (x2): Frutiger Aero Green, Frutiger Aero Dimmed</li>
            <li>- Updated themes: Frutiger Aero</li>
            <li>- Fixed double-click resign</li>
            <li>- Improved locales: English, Swedish, Polish</li>
            <li>- Fixed frame drops caused by false mount DOM inj.</li>
            <li>- Updated fullscreen button</li>
            {ot}
        </ul>

        <h3>## Version 2.1.4.5 - {st}</h3>
        <ul>
            <li>- Fixed fonts not appearing properly on some devices</li>
            <li>- Added new themes (x6): Frutiger Aero, Glitter, Dark Purple</li>
            {ot}
        </ul>
        <div className="old_versions">
            <h3>## Version 1.0.4.1 - {st}</h3>
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
            <h3>## Version 1.0.4 - {st}</h3>
            <ul>
            <li>- Added new languages (x98) i18n support</li>
            <li>- Fixed RTL in Hewbrew, Sindhi, Persian</li>
            <li>- Updated Extension Logo & UI</li>
            <li>- Added Contribute Option</li>
            {ot}
            </ul>
            <h3>## Version 1.0.3 - {st}</h3>
            <ul>
            <li>- Added i18n languages (x8) support</li>
            <li>- Added new pieces (x16)</li>
            <li>- Added new theme: Amoled</li>
            <li>- Fixed RTL in Arabic</li>
            {ot}
            </ul>
            <h3>## Version 1.0.2 - {st}</h3>
            <ul>
            <li>- Fixed 3D Mode (Pieces & Boards Change)</li>
            <li>- Added x2 new Boards (Emerald, Industrial)</li>
            <li>- Updated Popup UI</li>
            {ot}
            </ul>
            <h3>## Version 1.0.1 - {st}</h3>
            <ul>
            <li>- Fixed Dark Mode on Mozilla Firefox</li>
            <li>- Fixed Background on Analysis Page</li>
            <li>- Improved Highlight colors</li>
            {ot}
            </ul>
            <h3>## Version 1.0.0 - {st}</h3>
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
        </div>
        </div>
      
      
      </main>

      <span className={s.st}>Enjoy your new themes, presets, pieces and boards! 🎨 ♟️</span>
    </div>
  );
};

export default Update;
