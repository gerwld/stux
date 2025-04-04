import React, { FC } from "react";
import style from "./style.module.css";
import TextWithFragment from "@/components/TextWithFragments";
import { PrevReview } from "@/app/[locale]/products/preloaded";
import clsx from "clsx";
import Image from "next/image";


const Block: FC<PrevReview> = ({ avatarUrl, description, author }) => {
  return (
    <article className={clsx(style.block, "tblock")}>
      <div className={style.author}>
        <div className={style.icon}>
          <Image width={45} height={45} src={avatarUrl} alt={author} />
        </div>
        <h3 className={style.author_title}>{author}</h3>
      </div>
      <p className={style.desc}><TextWithFragment text={description}/></p>
    </article>
  );
};

export default Block;
