import React, { FC } from "react";
import { TestimonialBlock } from "./TestimonialSection";
import style from "./style.module.css";
import TextWithBreaks from "@/components/TextWithFragments";

const Block: FC<TestimonialBlock> = ({ iconUrl, desc, name }) => {
  return (
    <article className={style.block}>
      <div className={style.author}>
        <div className={style.icon}>
          <img src={iconUrl} alt={name} />
        </div>
        <h3 className={style.name}>{name}</h3>
      </div>
      <p className={style.desc}><TextWithBreaks text={desc}/></p>
    </article>
  );
};

export default Block;
