import React from 'react'
import clsx from "clsx";
import style from './style.module.css';
import SelectLang from '../Navbar/SelectLang';
import { useTranslations } from '@/hooks/useTranslations';
import { usePathname } from 'next/navigation';
import { Greeting, Product, products } from '@/app/[locale]/products/preloaded';
import Image from 'next/image';

type Props = {
        PRODUCT_KEY: Product["alias"],
        PRODUCT_TITLE: Product["title"],
        GREETING?: Greeting,
        GRETING_EMOJIES?: string
}

const WelcomeContent:React.FC<Props> = ({PRODUCT_KEY, PRODUCT_TITLE, GREETING, GRETING_EMOJIES}) => {
  const ITEM = products.find(p => p.alias === PRODUCT_KEY);
  const t = useTranslations();
  const pathname = usePathname();

  if(!ITEM) return "Error -0443: PRODUCT_KEY " + PRODUCT_KEY;
  
  return (
    <div className={clsx("schema-welcome", style.conent)}>
        <SelectLang/>

        <main className={clsx(style.main__page, style.content_wrapper)}>
        <h1>{t("WelcomePage.hi")}</h1>
        <p><span>{t("WelcomePage.th_part1")}</span> {PRODUCT_TITLE}! <span>{t("WelcomePage.th_part2")}</span></p>

        <h2>{t("WelcomePage.ct_title")}</h2>
        <p><span>{t("WelcomePage.ct_desc1")}</span> <a target="_blank" rel="noreferrer"
                href="https://www.paypal.com/donate/?hosted_button_id=HWFQXM25U8XWU">PayPal</a>,
            <a target="_blank" rel="noreferrer" href="https://ko-fi.com/patrykjaworski">Ko-Fi</a>, <a target="_blank" rel="noreferrer" href="https://weblxapplications.com/donate#crypto">Crypto</a><span>{t("WelcomePage.ct_desc2")}</span> <a
                target="_blank" rel="noreferrer"
                href="https://ko-fi.com/patrykjaworski"><span>{t("WelcomePage.ct_link1")}</span></a> <span>{t("WelcomePage.ct_desc3_1")}</span> {PRODUCT_TITLE} <span>{t("WelcomePage.ct_desc3_2")}</span> <a
                target="_blank" rel="noreferrer"
                href={ITEM.details.links?.CHROME || ""}>Chrome</a>,
            <a target="_blank" rel="noreferrer"
                href={ITEM.details.links?.FIREFOX || ITEM.details.links?.CHROME || ""}>Firefox</a><span>{t("WelcomePage.ct_desc4")}</span><a
                href={ITEM.details.links?.EDGE || ITEM.details.links?.CHROME || ""}
                target="_blank" rel="noreferrer">MS Edge</a> <span>{t("WelcomePage.ct_link2")}.</span>
        </p>

        
        <h2>{t("WelcomePage.bugs_title")}</h2>
        <p><span>{t("WelcomePage.bugs_desc1")}</span> <a href="mailto:pjaworski.dev@gmail.cmo">pjaworski.dev@gmail.com</a> <span>{t("WelcomePage.bugs_desc2")}</span></p>


        {GREETING ? <p className={style.last_sent}><span>{t(`WelcomePage.${GREETING}`)}</span> {GRETING_EMOJIES ? GRETING_EMOJIES : ""} </p> : ""}
        <a href={pathname.endsWith("/welcome") ? pathname.slice(0, -8) : pathname} className={clsx(style.btn, style.btn_svg)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 24 24">
                <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825Z" />
            </svg><span>{t("WelcomePage.act_back_home")}</span></a>
    </main>

{/* DESKTOP MODAL */}
    <div className={clsx(style.w_extinfo, style.w_extinfo__desktop)}>
        <span>{t("WelcomePage.ipart1")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor"
                d="M29.81 16H29V8.83a2 2 0 0 0-2-2h-6A5.14 5.14 0 0 0 16.51 2A5 5 0 0 0 11 6.83H4a2 2 0 0 0-2 2V17h2.81A3.13 3.13 0 0 1 8 19.69A3 3 0 0 1 7.22 22A3 3 0 0 1 5 23H2v8.83a2 2 0 0 0 2 2h23a2 2 0 0 0 2-2V26h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 29.81 16m2.41 7A3 3 0 0 1 30 24h-3v7.83H4V25h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 4.81 15H4V8.83h9V7a3 3 0 0 1 1-2.22A3 3 0 0 1 16.31 4A3.13 3.13 0 0 1 19 7.19v1.64h8V18h2.81A3.13 3.13 0 0 1 33 20.69a3 3 0 0 1-.78 2.31"
                 />
            <path fill="none" d="M0 0h36v36H0z" />
        </svg>

        <span>{t("WelcomePage.ipart2")}</span> <Image width={28} height={28} draggable="false" src={`/images/logos/${PRODUCT_KEY}.svg`} alt="" /> <span>{t("WelcomePage.ipart3_1")}</span> {PRODUCT_TITLE}. <span>{t("WelcomePage.ipart3_2")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z" />
        </svg>
        <span>{t("WelcomePage.ipart4")}</span>
    </div>

{/* MOBILE MODAL */}
    <div className={clsx(style.w_extinfo, style.w_extinfo__mobile)}>
        <span>{t("WelcomePage.ipart1")}</span>
        <span className="icl-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z" />
            </svg>
        </span>
        <span>{t("WelcomePage.ipart2__mobile")}</span>
        <span className="icl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                <path fill="currentColor"
                    d="M29.81 16H29V8.83a2 2 0 0 0-2-2h-6A5.14 5.14 0 0 0 16.51 2A5 5 0 0 0 11 6.83H4a2 2 0 0 0-2 2V17h2.81A3.13 3.13 0 0 1 8 19.69A3 3 0 0 1 7.22 22A3 3 0 0 1 5 23H2v8.83a2 2 0 0 0 2 2h23a2 2 0 0 0 2-2V26h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 29.81 16m2.41 7A3 3 0 0 1 30 24h-3v7.83H4V25h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 4.81 15H4V8.83h9V7a3 3 0 0 1 1-2.22A3 3 0 0 1 16.31 4A3.13 3.13 0 0 1 19 7.19v1.64h8V18h2.81A3.13 3.13 0 0 1 33 20.69a3 3 0 0 1-.78 2.31"
                    className="clr-i-outline clr-i-outline-path-1" />
                <path fill="none" d="M0 0h36v36H0z" />
            </svg>
        </span>

        <span>{t("WelcomePage.ipart3_1")} <Image width={28} height={28} draggable="false" src={`/images/logos/${PRODUCT_KEY}.svg`} alt={PRODUCT_TITLE} /> {PRODUCT_TITLE}. </span> 
        <span>{t("WelcomePage.ipart3_2__mobile")} </span> 
        <a href="https://open.spotify.com" className={style.gr_b}>open.spotify.com</a>. 
        <span> {t("WelcomePage.ipart3_3__mobile")}</span>
    </div>



    <div className={style.w_extinfo__arrow}></div>

    <a href="https://ko-fi.com/patrykjaworski" target="_blank" className={style.donate_btn}><Image width={36} height={36} src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Buy Me A Coffee"/></a>   
    </div>
  )
}

export default WelcomeContent