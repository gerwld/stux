import React from 'react'
import Image from 'next/image'
import clsx from "clsx";
import style from './style.module.css';
import SelectLang from '../Navbar/SelectLang';

const PRODUCT_KEY = "CHESSHELPER";
const PRODUCT_TITLE = "ChessHelper";

const WelcomeContent = () => {
  return (
    <div className={clsx("schema-welcome", style.conent)}>
        <SelectLang/>

        <main className={clsx(style.main__page, style.content_wrapper)}>
        <h1 data-i18n="welcome_hi">Hi</h1>

        <p><span data-i18n="welcome_th_part1">Thank you for installing</span> {PRODUCT_TITLE}! <span data-i18n="welcome_th_part2">This page will only be displayed once.</span></p>


        <h2 data-i18n="welcome_contribute_title">Contribute</h2>
        <p><span data-i18n="welcome_contribute_desc1">Donate using</span> <a target="_blank" rel="noreferrer"
                href="https://www.paypal.com/donate/?hosted_button_id=HWFQXM25U8XWU">PayPal</a>,
            <a target="_blank" rel="noreferrer" href="https://ko-fi.com/patrykjaworski">Ko-Fi</a>, <a target="_blank" rel="noreferrer" href="https://weblxapplications.com/donate#crypto">Crypto</a>, <span data-i18n="welcome_contribute_desc2">or a</span> <a
                target="_blank" rel="noreferrer"
                href="https://ko-fi.com/patrykjaworski"><span data-i18n="welcome_contribute_link1">credit
                or debit card</span></a> <span data-i18n="welcome_contribute_desc3_1">to support my
            work. If you can't contribute
            financially, I'd love if you could share </span> {PRODUCT_TITLE} <span data-i18n="welcome_contribute_desc3_2"> with a few friends or leave a review on the</span> <a
                target="_blank" rel="noreferrer"
                href="https://chrome.google.com/webstore/detail/ChessHelper-improve-chess/kdkckejnngdmlcephpnfaggaeofloode/">Chrome</a>,
            <a target="_blank" rel="noreferrer"
                href="https://addons.mozilla.org/en-US/firefox/addon/ChessHelper/">Firefox</a><span data-i18n="welcome_contribute_desc4">, or</span><a
                href="https://microsoftedge.microsoft.com/addons/detail/piiencmafefnakeddeeecjkehmbgcjdg"
                target="_blank" rel="noreferrer">MS Edge</a> <span data-i18n="welcome_contribute_link2">stores</span>.
        </p>

        



        <h2 data-i18n="welcome_bugs_title">Find any bugs?</h2>

        <p><span data-i18n="welcome_bugs_desc1">Just shoot me an email at</span> <a href="mailto:pjaworski.dev@gmail.cmo">pjaworski.dev@gmail.com</a> <span data-i18n="welcome_bugs_desc2">with a
            description
            and screenshot or video of the issue and
            I'll get back to you as soon as I can. For a quicker fix, include the browser (e.g., Firefox 86.0) you're
            using.</span></p>


        <p className={style.last_sent}><span data-i18n="welcome_chess">Enjoy your new themes, presets, pieces and boards!</span> 🎨 ♟️ </p>
        <a href={`/products/${PRODUCT_KEY.toLowerCase()}/`} className={clsx(style.btn, style.btn_svg)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 24 24">
                <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825Z" />
            </svg><span data-i18n="act_back_home">Home</span></a>
    </main>


    <div className={style.w_extinfo}>
        <span data-i18n="welcome_info_part1">Click</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor"
                d="M29.81 16H29V8.83a2 2 0 0 0-2-2h-6A5.14 5.14 0 0 0 16.51 2A5 5 0 0 0 11 6.83H4a2 2 0 0 0-2 2V17h2.81A3.13 3.13 0 0 1 8 19.69A3 3 0 0 1 7.22 22A3 3 0 0 1 5 23H2v8.83a2 2 0 0 0 2 2h23a2 2 0 0 0 2-2V26h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 29.81 16m2.41 7A3 3 0 0 1 30 24h-3v7.83H4V25h1a5 5 0 0 0 5-5.51A5.15 5.15 0 0 0 4.81 15H4V8.83h9V7a3 3 0 0 1 1-2.22A3 3 0 0 1 16.31 4A3.13 3.13 0 0 1 19 7.19v1.64h8V18h2.81A3.13 3.13 0 0 1 33 20.69a3 3 0 0 1-.78 2.31"
                 />
            <path fill="none" d="M0 0h36v36H0z" />
        </svg>

        <span data-i18n="welcome_info_part2">in the top left corner, then find</span> <img draggable="false" src={`/images/logos/${PRODUCT_KEY}.svg`} alt="" /> <span data-i18n="welcome_info_part3_1">to begin working with</span> {PRODUCT_TITLE}. <span data-i18n="welcome_info_part3_2">If you want to
        pin it, click on</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z" />
        </svg>
    <span data-i18n="welcome_info_part4">next to it.</span>
    </div>
    <div className={style.w_extinfo__arrow}></div>


    <a href="https://ko-fi.com/patrykjaworski" target="_blank" id="bmc-wbtn" className={style.donate_btn}><img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Buy Me A Coffee"/></a>   
    </div>
  )
}

export default WelcomeContent