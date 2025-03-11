import React from 'react'
import style from './style.module.css';

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
          <img
            src="https://storage.ko-fi.com/cdn/useruploads/post/2ea00568-1072-4f07-a8c5-74ff6f4181ba_4b1464-acb5-4b48-88c5-ec4de45905e0.png"
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
            <img
            src={imageUrl}
            alt="Update"/>
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