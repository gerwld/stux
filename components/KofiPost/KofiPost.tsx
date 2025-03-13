import React from 'react'
import style from './style.module.css';
import Image from 'next/image';

type Props = {
    title: string
    link: string
    children: React.ReactElement
    imageUrl?: string
}

const KofiPost:React.FC<Props> = ({
    title,
    children,
    link,
    imageUrl
}) => {
const onNavigate = () => {
    if(link && link.length)
        window.open(link, "_blank", "noopener,noreferrer")
}
  return (
    <article data-href={link} className={style.kofipost}>
    <div className={style.kofipost__header}>
      <div className={style.kofipost_author}>
        <div className={style.kofipost_author__pfp}>
          <Image
            width={32}
            height={32}
            src="/images/posts/kofi/author0.webp"
            alt="Patryk Jaworski"/>
        </div>
        <a href="https://ko-fi.com/patrykjaworski" className={style.kofipost_author__fullname}>Patryk Jaworski</a>
        <span onClick={onNavigate} className={style.kofipost_author__notpostadd}>added a note</span>
        <span onClick={onNavigate} className={style.kofipost_author__notdate}>2 Feb</span>
      </div>
      <button onClick={onNavigate} className={style.kofipost__more}>More</button>
    </div>

    <section className={style.kofipost__content}>
    {imageUrl 
        ? <div onClick={onNavigate} className={style.kofipost__preview}>
            <Image
            width={518}
            height={321}
            src={imageUrl}
            alt={"Image to post: " + title}/>
        </div> 
        : ""}
      <h3 className={style.kofipost__title}>{title}</h3>
      {children}
      <button onClick={onNavigate} className={style.kofipost__readmore}>Read more</button>
    </section>
  </article>
  )
}

export default KofiPost