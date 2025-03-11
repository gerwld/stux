import React, { FC } from 'react'
import Navbar from './Navbar/Navbar'
import Image from 'next/image'
import { Product } from '@/app/[locale]/products/preloaded'
import DonateButtons from './DonateButtons/DonateButtons'
import { useTranslations } from '@/hooks/useTranslations'

import s from '@/app/[locale]/products/update.module.css';
import clsx from 'clsx'

type Props = {
    PRODUCT_TITLE: Product["title"],
    CURRENT_VERSION: Product["version"],
    logo_base: string,
    logo_rotate?: string,
    logoClassName?: string
}

const UpdateBase:FC<Props> = ({PRODUCT_TITLE, CURRENT_VERSION, logo_base, logo_rotate, logoClassName}) => {
  const t = useTranslations();
  return (
    <>
        <Navbar />
        <div className={s.title_block}>
            <div className={clsx(s.logo_box_anim, logoClassName)}>
                <Image src={logo_base} alt="logo-base"/>
                {logo_rotate ? <Image src={logo_rotate} className={s.set_rotate} alt="logo-rotate"/> : ""}
            </div>
            <h1>{PRODUCT_TITLE} - <span className={s.major_update}>{t("UpdatePage.major_update")}</span> {CURRENT_VERSION}!<span className="emoji confetti"></span></h1>
        </div>

        <p className="update_subl">
            <span>{t("UpdatePage.update_sbt_01")}</span> {PRODUCT_TITLE} <span>{t("UpdatePage.update_sbt_02")}</span>
        </p>
        <DonateButtons/>

        <span id="changelog" className={s.guarantee}>{t("UpdatePage.upd_guarantee")} {PRODUCT_TITLE}</span>
        <p>{t("UpdatePage.chop_contribute_desc3_1")} {PRODUCT_TITLE} {t("WelcomePage.ct_desc3_2")} Chrome, Firefox{t("WelcomePage.ct_desc4")} MS Edge {t("WelcomePage.ct_link2")}.</p>
      
        <h2 className={s.h2}>{t("UpdatePage.upd_history")}</h2>
        </>
  )
}

export default UpdateBase