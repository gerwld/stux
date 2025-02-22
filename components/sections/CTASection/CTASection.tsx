import React from 'react'
import style from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className={style.wrapper}>
    <div className={`content_wrapper ${style.content}`}>

      <div className={style.content_block1}>
        <h2 className={style.title}>Enjoy What We Do?<br/>Together, <span>We Can Do More.</span></h2>
        <p className={style.desc}>Since all our projects are completely free and do not collect or sell your data, voluntary donations are their only source of funding. Your financial support is extremely important to us, as it allows us to continue developing and updating our projects.</p>
      </div>

      <div className={style.content_block2}>
        <img className={style.preview} src="/images/latest-supporters.png" alt="Preview" />

        <Link className={style.button} href="https://ko-fi.com/patrykjaworski">
          <img src="/icons/kofi.svg" alt="Ko-fi"/>
          <span>Support on Ko-Fi</span>
        </Link>
      </div>

    </div>
  </section>
  )
}

export default CTASection