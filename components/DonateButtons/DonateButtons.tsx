import React from 'react'
import s from "./s.module.css";
import Image from 'next/image';
import clsx from 'clsx';

import kofi from "./icons/kofi.svg"
import card from "./icons/card.svg"
import paypal from "./icons/paypal.svg"

const DonateButtons = () => {
  return (
    <nav className={s.donate_nav}>
      <a href="https://www.paypal.com/donate/?hosted_button_id=HWFQXM25U8XWU" target="_blank">
        <span className={clsx(s.ic, s.ic__pp)}>
          <Image src={paypal} alt='Icon'/>
        </span>
        <span data-i18n="donate_btn_lb_1">Donate with PayPal</span>
      </a>

      <a href="https://ko-fi.com/patrykjaworski" target="_blank">
        <span className={s.ic}>
         <Image src={kofi} alt='Icon'/>
        </span>
        <span data-i18n="donate_btn_lb_2">Donate with Ko-fi.com</span>
      </a>

      <a href="https://ko-fi.com/patrykjaworski" target="_blank">
        <span className={clsx(s.ic, s.cred)}>
          <Image src={card} alt='Icon'/>
        </span>
        <span data-i18n="donate_btn_lb_3">Donate using card</span>
      </a>
    </nav>
  )
}

export default DonateButtons