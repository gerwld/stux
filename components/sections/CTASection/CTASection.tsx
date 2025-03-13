import React from 'react'
import style from './style.module.css';
import { useTranslations } from 'next-intl';
import TextWithFragment from '@/components/TextWithFragments';
import Image from 'next/image';

const CTASection = () => {
  const t = useTranslations("CTASection");
  return (
    <section className={style.wrapper}>
    <div className={`content_wrapper ${style.content}`}>

      <div className={style.content_block1}>
        <h2 className={style.title}>{<TextWithFragment text={t("title_part_1")}/>}{" "}<span>{t("title_part_2")}.</span></h2>

        <p className={style.desc}>{t("description")}</p>
      </div>

      <div className={style.content_block2}>
        <Image width={330} height={280} className={style.preview} src="/images/latest-supporters.png" alt="Preview" />

        <a target='_blank' className={style.button} href="https://www.paypal.com/donate/?hosted_button_id=HWFQXM25U8XWU">
          <Image width={34} height={37} src="/icons/kofi.svg" alt="Ko-fi"/>
          <span>{t("button")}</span>
        </a>
      </div>

    </div>
  </section>
  )
}

export default CTASection