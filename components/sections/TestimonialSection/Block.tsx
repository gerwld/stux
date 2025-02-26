import React, { FC } from "react";
import style from "./style.module.css";
import TextWithFragment from "@/components/TextWithFragments";
import { PrevReview } from "@/app/products/preloaded";


const Block: FC<PrevReview> = ({ avatarUrl, description, author }) => {
  return (
    <article className={style.block}>
      <div className={style.author}>
        <div className={style.icon}>
          <img src={avatarUrl} alt={author} />
        </div>
        <h3 className={style.author}>{author}</h3>
      </div>
      <p className={style.desc}><TextWithFragment text={description}/></p>
    </article>
  );
};

export default Block;
